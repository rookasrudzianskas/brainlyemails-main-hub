import Head from 'next/head'
import HomeScreen from "../screens/HomeScreen";
import {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import { useScrollData } from "scroll-data-hook";
import useScrollPosition from '@react-hook/window-scroll'



export default function Home() {
        const scrollPosition = useScrollPosition();
        console.log(scrollPosition);

    useEffect(() => {
        const interval = setInterval(() => {
            // checkForScroll();
        }, 1000);
        return () => clearInterval(interval);
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
