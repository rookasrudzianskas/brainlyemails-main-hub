import Head from 'next/head'
import HomeScreen from "../screens/HomeScreen";
import {useEffect, useState} from "react";

export default function Home() {


    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position)
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="bg-black h-screen overflow-y-scroll scrollbar-hide">
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
