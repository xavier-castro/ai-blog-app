import Developer from "./(home)/Developer"
import Trending from "./(home)/Trending"

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <div className="mb-5 md:flex gap-10">
        <div className="basis-3/4">
          <Trending />
          <Developer />
        </div>
      </div>
    </main>
  )
}
