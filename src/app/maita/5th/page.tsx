"use client";

import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NextLink from 'next/link';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FifthAnniversary() {
    const portraits = [
        '/maita/Normal/portrait.png',
        '/maita/Capella/portrait.png',
        '/maita/Antares/portrait.png',
        '/maita/Sirius/portrait.png',
        '/maita/Polaris/portrait.png',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dotIndex, setDotIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % portraits.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [portraits.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDotIndex((prev) => (prev + 1) % 4);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setLoaded(true);
        const timer = setTimeout(() => setShowSplash(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>5thアニバーサリー - Arpeggio</title>
            </Head>
            <div className="bg-white relative w-full h-screen overflow-hidden">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${showSplash ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <div className="flex flex-col items-center">
                        <Image src="/maita/5thIcon.png" alt="5th Anniversary Logo" width={160} height={160} className="mb-6" />
                        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div className="h-full bg-maitaPurple animate-loading-bar"></div>
                        </div>
                    </div>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-1000 ${showSplash ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
                    <Header bgColor="bg-white" textColor="text-white" />
                    <main className="bg-white text-black flex md:flex-row flex-col items-center justify-center min-h-screen p-8">
                        <div className={`flex flex-row items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="md:w-1/2 w-full flex flex-col items-center">
                                <Image src="/maita/5thHeader.png" alt="5th Anniversary Logo" width={700} height={160} className="mb-4" />
                                {/* <h1 className="text-6xl mb-6 font-semibold tracking-wide drop-shadow-lg font-poppins">
                                    <span className="text-maitaPurple">琵音マイタ</span> <span className="text-black">5<sup className="text-xl align-super">th</sup> Anniversary</span>
                                </h1> */}
                                <p className="text-4xl tracking-widest my-4 flex items-center">
                                    <span>Coming Soon</span>
                                    <span className="inline-block w-10 text-left">{['', '.', '..', '...'][dotIndex % 4]}</span>
                                </p>
                                <Link href="/maita" className="text-maitaPurple text-lg mt-10 px-10 py-3 rounded-lg border-2 border-transparent hover:border-mikuBlue transition-colors">
                                    トップに戻る
                                </Link>
                            </div>
                            <div className="md:w-1/2 w-full flex items-center justify-center">
                                <div className="relative w-full md:h-[500px] h-[300px] flex items-center justify-center">
                                    {portraits.map((src, index) => (
                                        <Image
                                            key={src}
                                            src={src}
                                            alt="Character portrait"
                                            width={500}
                                            height={500}
                                            className={`absolute max-h-[500px] object-contain transition-opacity duration-1000 ease-in-out pointer-events-none ${
                                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer bgColor="bg-black" textColor="text-white" />
                </div>
            </div>
            <style jsx global>{`
                @keyframes loading-bar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-loading-bar {
                    animation: loading-bar 2s linear forwards;
                }
            `}</style>
        </>
    );
}