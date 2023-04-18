import Developer from "./(home)/Developer"
import Trending from "./(home)/Trending"

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Trending />
          <Developer />
          <h2>Cyber</h2>
          <h2>Health</h2>
          <h2>Other</h2>
        </div>
      </div>
    </main>
  )
}
