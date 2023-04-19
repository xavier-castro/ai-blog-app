import FeaturedPosts from './(home)/Trending';

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
        <div className="">
          <FeaturedPosts />
        </div>
      </div>
    </main>
  );
}
