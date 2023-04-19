import { Post } from "@prisma/client";
import FeaturedPosts from "./(home)/Trending";
import { prisma } from "./api/client";

const getPosts = async () => {
  // Directly call our database here
  const posts = await prisma.post.findMany();

  // Return it for our frontend
  return posts;
};

// MARK: This is the BIGGEST difference between default NextJS and the new NextJS13
// By turning this function async... we are creating server components now
export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    /**
     * Iterates through an array of posts and categorizes them as trending, tech, travel, or other.
     * @param posts An array of Post objects to categorize.
     * @returns void
     */
    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });
  };

  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
        <div className="">
          <FeaturedPosts trendingPosts={posts}/>
        </div>
      </div>
    </main>
  );
}
