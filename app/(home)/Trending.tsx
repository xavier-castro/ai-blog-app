import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto mt-7 block relative w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-background">
        <Image
          fill
          src="https://images.unsplash.com/photo-1681814305569-c7b872ec051b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
      </div>
      <div className="absolute z-1 top-0 w-full h-full" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <Badge>Category</Badge>
        <div className=" mt-2">
          <h3 className="text-foreground text-2xl font-semibold tracking-tight text-white dark:text-foreground">
            Post Title
          </h3>
        </div>
      </div>
    </Link>
  );
};

const Trending = () => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-background py-2 px-8 text-foreground text-sm font-bold">
          TRENDING
        </div>
        <blockquote className="mt-6 border-l-2 pl-6 italic text-sm">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </blockquote>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2 bg-background" />
        <TrendingCard className="col-span-2 row-span-1 bg-background" />
        <TrendingCard className="col-span-1 row-span-1 bg-background" />
        <TrendingCard className="col-span-1 row-span-1 bg-background" />
      </div>
    </section>
  );
};

export default Trending;
