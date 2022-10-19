import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

export default function Login() {
    const { authenticate } = useMoralis();
    return (
        <>
            <Head>
                <title>Metaverse Challenge</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className="bg-black relative text-white h-screen overflow-hidden">
                <h1>I am login screen</h1>
                <div className="absolute flex flex-col justify-center items-center gap-y-4 z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4">
                    <svg viewBox="0 0 176 202.1" className="w-28 fill-[#000000a8] md:w-[150px]"><polygon points="98.2,192.5 88,198.7 3,149.6 3,147.3 57.4,115.9 57.4,140.3 43.6,148.3 77.8,168 77.8,104.1 88.3,98 173,146.9 173,149.4 118.6,180.8 118.6,156.7 132.9,148.4 98.2,128.4"></polygon><polygon points="173,124.5 173,52 88.9,3.5 3,53 3,123.6 57.4,92.2 57.4,67.2 24.3,86.2 24.3,64.4 77.8,33.6 77.8,80.4 88.4,74.3 98.2,80.5 98.2,33.1 151.7,64 151.7,87.2 118.6,68.1 118.6,93.1"></polygon></svg>
                    {/* Login button */}
                    <button onClick={authenticate} className="text-sm bg-black bg-opacity-60 px-6 py-2 rounded-2xl transition leading-8 animate-pulse hover:bg-opacity-100 hover:animate-none md:text-base md:px-8 md:py-3">LOGIN TO THE METAVERSE</button>
                </div>
                <div className="w-full h-screen">
                    <Image src="/images/background.jpg" layout="fill" objectFit="cover" />
                </div>
            </div>
        </>
    );
}
