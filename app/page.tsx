import { Post } from '@prisma/client';
import FeaturedPosts from './(home)/Trending';
import { prisma } from './api/client';
import { FormattedPost } from './types';

const getPosts = async () => {
  // Directly call our database here
  const posts = await prisma.post.findMany();

  // We are formatting each post to have `imageModule.default` so we can user `placeholder='blur'` in Image components
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
        createdAt: post?.createdAt?.toISOString(),
        updatedAt: post?.updatedAt?.toISOString(),
      };
    })
  );
  return formattedPosts;
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

// MARK: This is the BIGGEST difference between default NextJS and the new NextJS13
// By turning this function async... we are creating server components now
export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);

  const formatPosts = () => {
    const trendingPosts: Array<FormattedPost> = [];
    const techPosts: Array<FormattedPost> = [];
    const travelPosts: Array<FormattedPost> = [];
    const otherPosts: Array<FormattedPost> = [];
    /**
     * Iterates through an array of posts and categorizes them as trending, tech, travel, or other.
     * @param posts An array of Post objects to categorize.
     * @returns void
     */
    posts.forEach((post: FormattedPost, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === 'Tech') {
        techPosts.push(post);
      } else if (post?.category === 'Travel') {
        travelPosts.push(post);
      } else if (post?.category === 'Interior Design') {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
      <div className="">
          <FeaturedPosts trendingPosts={trendingPosts} />
        </div>
      </div>
    </main>
  );
}
