"use client";

import Head from 'next/head';
import Header from '../../../../../components/Header';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {


    return (
        <>
            <Head>
                <title>琵音マイタLINEスタンプ販売！ - Arpeggio</title>
            </Head>
            <div className="bg-pink-50 min-h-screen relative">

                <Header bgColor="bg-" textColor="text-gray-800" />

                <main className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                                <div className="relative inline-block">
                                    <Image
                                        src="/maita/5thHeader.png"
                                        alt="5th Anniversary Logo"
                                        width={300}
                                        height={75}
                                        className="drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        {/* コンテンツ部分を白背景で囲む */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="mb-8">
                                <p className="text-gray-500 text-sm mb-4">
                                    2025 9/10
                                </p>
                                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                                    琵音マイタLINEスタンプ販売！
                                </h1>
                                <div className="relative mb-8">
                                    <Image
                                        src="/stamp-sample.png"
                                        alt="琵音マイタLINEスタンプ"
                                        width={200}
                                        height={200}
                                        className="rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    琵音マイタのLINEスタンプが販売開始されました！

                                    <br></br>(もっと文章書く？)
                                </p>

                                <div className="text-center">
                                    <a
                                        href="#"
                                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        LINEスタンプストアで購入
                                    </a>
                                </div>
                            </div>

                            {/* トップに戻るボタン */}
                            <div className="text-center mt-12">
                                <Link 
                                    href="/maita/5th" 
                                    className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    トップに戻る
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer bgColor="bg-transparent" textColor="text-gray-800" />
            </div>
        </>
    );
}
