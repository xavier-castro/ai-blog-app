import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FormattedPost } from "../types";

type TrendingCardProps = {
  className?: string;
  post: FormattedPost;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto mt-7 block relative w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="relative z-0 w-full h-full bg-background">
        <Image
          fill
          placeholder="blur"
          src={post?.image}
          alt="tech posts"
          style={{ objectFit: "cover" }}
          sizes="
          (max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw
          "
        />
      </div>
      <div className="absolute top-0 w-full h-full z-1" />
      <div className="absolute bottom-0 left-0 p-3 z-2">
        <Badge>{post?.category}</Badge>
        <div className="mt-2 ">
          <h3 className="text-2xl font-semibold tracking-tight text-white text-foreground dark:text-foreground">
            {post?.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<FormattedPost>;
};

const FeaturedPosts = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-4 md:pb-10">
      <div className="flex items-center gap-3 py-4">
        <div className="px-8 py-2 text-sm font-bold bg-background text-foreground">
          TRENDING
        </div>
        <blockquote className="pl-6 mt-6 text-sm italic border-l-2">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </blockquote>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3 py-6">
        <TrendingCard
          className="col-span-2 row-span-2 bg-background"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-background"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-background"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-background"
          post={trendingPosts[3]}
        />
      </div>
    </section>
  );
};

export default FeaturedPosts;
