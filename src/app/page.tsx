import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col justify-center items-center gap-16' >
        <Image src='/snLogo.png' width={500} height={500} alt='logo' />
        <h1 className='text-6xl font-extrabold' >corrugated box manufacturers</h1>
        <h2 className='text-3xl font-extrabold' >Soon at your service...</h2>
      </div>
    </main>
  )
}
