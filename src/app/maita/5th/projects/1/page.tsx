"use client";

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '../../../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {

    return (
        <>
            <Head>
                <title>琵音マイタLINEスタンプ販売！ - Arpeggio</title>
            </Head>
            <div className="bg-pink-50 min-h-screen relative">

                <Header bgColor="bg-pink-50" textColor="text-gray-800" />

                <main className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                                <div className="relative inline-block">
                                    <Image
                                        src="/maita/5thHeader.png"
                                        alt="5th Anniversary Logo"
                                        width={300}
                                        height={75}
                                    
                                    />
                                </div>
                            </div>
                        {/* コンテンツ部分を白背景で囲む */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="mb-8">
                                <p className="text-gray-500 text-sm mb-4">
                                    2025 9/27
                                </p>
                                <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
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
                                    <br></br>
                                    このスタンプはOBと現役生が共同で制作しました！
                                    <br></br>
                                    下のボタンから琵音マイタのスタンプをご覧ください！
                                </p>

                                <div className="text-center mb-8">
                                    <a
                                        href="https://line.me/S/sticker/31434186/?lang=ja&utm_source=gnsh_stickerDetail"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        LINEスタンプストアで購入
                                    </a>
                                </div>

                                {/* クレジット */}
                                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">クレジット</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                                        <div className="space-y-3">
                                            <p><span className="font-bold">ありがとうマイタ・休憩マイタ</span><br />ささみ(<a href="https://x.com/not_muneniku?s=21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@not_muneniku</a>)</p>
                                            <p><span className="font-bold">お疲れ様ですマイタ・ぴえんマイタ</span><br />ねこの</p>
                                            <p><span className="font-bold">ルンルンマイタ</span><br />aru</p>
                                            <p><span className="font-bold">すみませんマイタ・照れマイタ</span><br />あざら(<a href="https://twitter.com/azala_exire" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@azala_exire</a>)</p>
                                            <p><span className="font-bold">すご～いマイタ</span><br />やし</p>
                                            <p><span className="font-bold">どうすれば…マイタ・了解ですマイタ</span><br />魚林(<a href="https://x.com/osakana_0909?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@osakana_0909</a>)</p>
                                            <p><span className="font-bold">それいいねマイタ・参ったマイタ</span><br />740</p>
                                            <p><span className="font-bold">横転マイタ・暑くて溶けるマイタ</span><br />でかいいぬ(<a href="https://x.com/dekaiyoinu?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@dekaiyoinu</a>)</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p><span className="font-bold">おやすみマイタ</span><br />YK</p>
                                            <p><span className="font-bold">お辞儀マイタ・進捗ダメですマイタ</span><br />円周率(<a href="https://x.com/perokyan314?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@perokyan314</a>)</p>
                                            <p><span className="font-bold">きゅんきゅんマイタ</span><br />りんく</p>
                                            <p><span className="font-bold">おはようマイタ</span><br />ei</p>
                                            <p><span className="font-bold">またねマイタ</span><br />れんれん</p>
                                            <p><span className="font-bold">宇宙猫マイタ</span><br />みぞれん(<a href="https://x.com/mizoren_arp?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@mizoren_arp</a>)</p>
                                            <p><span className="font-bold">今日もビールがうまいマイタ・出禁マイタ</span><br />とりけちゅん(<a href="https://x.com/kechuntori?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@kechuntori</a>)</p>
                                            <p><span className="font-bold">絶起マイタ</span><br />GA-CHAN(<a href="https://x.com/ga_chan_skeb?s=21&t=hTtafvu2XqqtD9vEHu9mbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@ga_chan_skeb</a>)</p>
                                        </div>
                                    </div>
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
