import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-blue-400">
        <div className="mx-4 order-last self-center">
          {/* <Image className="rounded-full" src="/121.jpg" alt="person's image" height={100} width={100} /> */}
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-zinc-500">Hello world!</h1>
          <h2 className="text-3xl font-semibold text-zinc-300">WEb 3 course</h2>
          <Link href="/tailwind">
            <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-900">Flex</button>
          </Link>
          <Link href="/tailwind/grid">
            <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-900">Grid</button>
          </Link>
          <Link href="/tailwind/final">
            <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-900">Final</button>
          </Link>

        </div>
      </div>
    </>
  )
}
