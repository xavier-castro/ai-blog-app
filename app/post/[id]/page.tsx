import { prisma } from '@/app/api/client';
import { FormattedPost } from '@/app/types';
import Content from './Content';

type Props = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({ where: { id: id } });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
        <Content post={post} />
      </div>
    </main>
  );
};

export default Post;
