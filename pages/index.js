import Head from 'next/head'
import HomeScreen from "../screens/HomeScreen";
import {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import { useScrollData } from "scroll-data-hook";
import useScrollPosition from '@react-hook/window-scroll'



export default function Home() {
        const [scrollY, setScrollY] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
                console.log(window.scrollY);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
  return (
    <div className="bg-black h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>👋 Brainlyemails</title>
        <link rel="icon" href="../assets/HomeScreen/images/homeScreen_header.png" />
      </Head>

        <main>
            <div className="text-white">
                <HomeScreen />
            </div>

        </main>


    </div>
  )
}

