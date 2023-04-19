import Posts from "./(home)/Posts"
import Trending from "./(home)/Trending"

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <div className="mb-5 md:flex gap-10">
        <div className="">
          <Trending />
          <Posts />
        </div>
      </div>
    </main>
  )
}
