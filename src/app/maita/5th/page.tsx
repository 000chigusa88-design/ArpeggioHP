"use client";

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '../../../components/Footer';
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
        }, 3000);
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
        const timer = setTimeout(() => setShowSplash(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>5thアニバーサリー - Arpeggio</title>
            </Head>
            <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 min-h-screen">
                {/* スプラッシュスクリーン */}
                <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${showSplash ? 'opacity-100 z-50' : 'opacity-0 z-0'}`}>
                    <div className="flex flex-col items-center">
                        <Image src="/maita/5thIcon.png" alt="5th Anniversary Logo" width={160} height={160} className="mb-4 sm:mb-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
                        <div className="w-48 sm:w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div className="h-full bg-maitaPurple w-0 animate-loading-bar"></div>
                        </div>
                    </div>
                </div>

                {/* メインコンテンツ */}
                <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
                    <Header bgColor="bg-transparent" textColor="text-gray-800" />

                    <main className="pt-32 sm:pt-32 pb-8 sm:pb-16 px-4">
                        {/* ヒーローセクション */}
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-8 sm:mb-16">
                                <div className="relative inline-block mb-4 sm:mb-8">
                                    <Image
                                        src="/maita/5thHeader.png"
                                        alt="5th Anniversary Logo"
                                        width={800}
                                        height={200}
                                        className="drop-shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto"
                                    />
                                </div>
                            </div>

                            {/* Projects セクション */}
                            <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest mb-4 sm:mb-6 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>PROJECT</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    <Link href="/maita/5th/projects/1" className="block">
                                        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                            <div className="aspect-square relative">
                                                <Image
                                                    src="/stamp-sample.png"
                                                    alt="琵音マイタLINEスタンプ"
                                                    fill
                                                    className="object-cover p-8" 
                                                />
                                            </div>
                                            <div className="p-2 sm:p-3">
                                                <p className="text-gray-600 text-xs sm:text-sm">
                                                    2025 9/27
                                                </p>
                                                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                                                    琵音マイタLINEスタンプ販売！
                                                </h3>

                                            </div>
                                        </div>
                                    </Link>
                                    
                                    <div className="bg-gray-200 rounded-xl shadow-xl overflow-hidden">
                                        <div className="aspect-square relative flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-gray-500 text-sm sm:text-lg font-medium">Coming Soon...</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-200 rounded-xl shadow-xl overflow-hidden">
                                        <div className="aspect-square relative flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-gray-500 text-sm sm:text-lg font-medium">Coming Soon...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>

                    <Footer bgColor="bg-transparent" textColor="text-gray-800" />
                </div>
            </div>
            <style jsx global>{`
                @keyframes loading-bar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-loading-bar {
                    animation: loading-bar 1s linear forwards;
                }
            `}</style>
        </>
    );
};