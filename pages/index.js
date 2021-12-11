import Head from 'next/head'
import HomeScreen from "../screens/HomeScreen";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>👋 Brainlyemails</title>
        <link rel="icon" href="../assets/HomeScreen/images/homeScreen_header.png" />
      </Head>

        <main>
            <div>
                <HomeScreen />
            </div>
        </main>

    </div>
  )
}
