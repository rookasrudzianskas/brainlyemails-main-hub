import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>👋 Brainlyemails</title>
        <link rel="icon" href="../assets/HomeScreen/images/homeScreen_header.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Brainlyemails!
          </a>
        </h1>

      </main>

    </div>
  )
}
