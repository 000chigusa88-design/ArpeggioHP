"use client"; // これを追加

import Head from 'next/head';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { maitaList } from '../../const/maita/MaitaList';
import { maitaProfileList } from '../../const/maita/MaitaProfileList';
import Footer from '../components/Footer';
import { MaitaIntroductionRow } from './maitaprops';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedMaita, setSelectedMaita] = useState<{ id: string, name: string, description: string, downloadUrl: string } | null>(null);
    const [termMessage, setTermMessage] = useState('ダウンロードを続行するには、利用規約をご確認ください。');
    const [lang, setLang] = useState('ja');
    const [isMaitaLogoVisible, setIsMaitaLogoVisible] = useState(false);
    const [isPolarisVisible, setIsPolarisVisible] = useState(false);
    const [isSiriusVisible, setIsSiriusVisible] = useState(false);
    const [isAntaresVisible, setIsAntaresVisible] = useState(false);
    const [isCapellaVisible, setIsCapellaVisible] = useState(false);
    const [isScrollGUide, setIsScrollGUide] = useState(false);
    const [isAnimationFinish, setIsAnimationFinish] = useState(false);
    const [show5thButton, setShow5thButton] = useState(false);

    useEffect(() => {
        setIsMaitaLogoVisible(true);
        setTimeout(() => setIsCapellaVisible(true), 300);
        setTimeout(() => setIsAntaresVisible(true), 600);
        setTimeout(() => setIsSiriusVisible(true), 900);
        setTimeout(() => setIsPolarisVisible(true), 1200);
        setTimeout(() => setIsScrollGUide(true), 1500);
        setTimeout(() => setShow5thButton(true), 1700);
        setTimeout(() => setIsAnimationFinish(true), 2000);
    }, []);


    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            if (scrollY > 10) {
                setScrollOpacity(0);
            } else {
                setScrollOpacity(1);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const lang = queryParams.get('lang');
        if (lang === 'en') {
            setLang('en');
            setTermMessage('Please review the terms of use before continuing with the download.');
        } else if (lang === 'ja') {
            setLang('ja');
            setTermMessage('ダウンロードを続行するには、利用規約をご確認ください。');
        } else {
            const userLanguage = navigator.language;
            if (userLanguage.startsWith('ja')) {
                setLang('ja');
                setTermMessage('ダウンロードを続行するには、利用規約をご確認ください。');
            } else {
                setLang('en');
                setTermMessage('Please review the terms of use before continuing with the download.');
            }
        }
    }, []);

    const handleDownloadClick = (id: string, name: string, description: string, downloadUrl: string) => {
        setSelectedMaita({ id, name, description, downloadUrl }); // Include downloadUrl
        setIsModalOpen(true);
    };

    const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(event.target.checked);
    };

    const handleFinalDownload = () => {
        if (selectedMaita) {
            window.open(selectedMaita.downloadUrl, '_blank'); // Accessing the URL from selectedMaita
            setIsModalOpen(false);
            setIsAgreed(false);
        }
    };

    return (
        <>
            <Head>
                <title>Arpeggio</title>
            </Head>
            <Header bgColor="bg-black" textColor="text-white" />

            <div className="bg-black text-white flex flex-col items-center justify-center py-25 min-h-screen tracking-lwidest relative">
                <div className="text-white flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest relative">
                    <Image
                        src="/BionMaitaLogo.png"
                        alt="琵音マイタのロゴ"
                        width={384}
                        height={216}
                        className={`transition-opacity duration-500 ${isMaitaLogoVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: '40%', height: 'auto' }}
                    />

                    <div className="space-y-6 flex flex-col items-center justify-center">
                        <div className={`text-yellow-100 text-3xl font-light mt-10 transition-opacity duration-500 ${isCapellaVisible ? 'opacity-100' : 'opacity-0'}`}>
                            - Capella
                        </div>
                        <div className={`text-red-300 text-3xl font-light mt-2 transition-opacity duration-500 ${isAntaresVisible ? 'opacity-100' : 'opacity-0'}`}>
                            - Antares
                        </div>
                        <div className={`text-blue-300 text-3xl font-light mt-2 transition-opacity duration-500 ${isSiriusVisible ? 'opacity-100' : 'opacity-0'}`}>
                            - Sirius
                        </div>
                        <div className={`text-white text-3xl font-light mt-2 transition-opacity duration-500 ${isPolarisVisible ? 'opacity-100' : 'opacity-0'}`}>
                            - Polaris
                        </div>



                    </div>
                    {isAnimationFinish ? (<p className={`absolute bottom-10 text-lg animate-bouncePulse transition-opacity duration-500 ${isScrollGUide ? 'opacity-100' : 'opacity-0'}`}>
                        ↓下にスクロール↓
                    </p>) : (
                        <p className={`absolute bottom-10 text-lg transition-opacity duration-500 ${isScrollGUide ? 'opacity-100' : 'opacity-0'}`}>
                            ↓下にスクロール↓
                        </p>
                    )}
                </div>
            </div>
            <div className="bg-black text-white flex flex-col items-center justify-center pb-10 tracking-wider pt-10">
                <div className='flex flex-col items-center justify-center '>
                    <div
                        className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-1000 ${show5thButton ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <NextLink
                            href="/maita/5th"
                            className="transform transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-mikuBlue to-maitaPurple text-white text-xs md:text-xl md:text-2xl font-bold px-6 md:px-20 py-2 rounded-full shadow-md flex items-center justify-center space-x-3 md:space-x-4 w-72 md:w-auto"
                        >
                            <Image
                                src="/maita/5thIcon.png"
                                alt="5周年ロゴ"
                                width={40}
                                height={40}
                                className="md:w-[56px] md:h-[56px] w-[40px] h-[40px]"
                            />
                            <span>5周年ページはこちら！</span>
                        </NextLink>
                    </div>
                    <h2 className="text-6xl mt-20 font-bold">琵音マイタとは？</h2>
                    <p className="text-xl mt-10 mx-20">
                        琵音マイタ(びおん まいた)とは同志社大学VOCALOID研究会Arpeggioの創立10周年記念プロジェクトで作成されたキャラクターです。
                    </p>
                </div>
            </div>

            <div className="bg-black text-white flex flex-col items-center justify-center pb-10 tracking-wider pt-10">
                <div className='mx-10 flex flex-col items-center justify-center custom:flex-row'>
                    <Image
                        src="/maita/Normal/portrait.png"
                        alt="マイタの立ち絵"
                        width={384}
                        height={216}
                        style={{ width: 'custom:80% 30%', height: 'auto' }}
                    />
                    <div className='flex flex-col'>
                        <p className="text-xl mt-5 ">
                            音楽が好きで元気いっぱいのArpeggioメンバー。
                        </p>
                        <p className="text-xl mt-5 ">
                            Arpeggioのことが大好きで髪色は班の数に合わせている。
                        </p>
                        <ul className="text-xl mt-5 space-y-3">
                            {maitaProfileList.map((profile, index) => (
                                <li key={index}>{profile.label}: {profile.value}</li> // 'key' ではなく 'label' に修正
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl text-black flex flex-col items-center justify-center py-10 tracking-wider px-7 mb-40 custom:mx-20">
                <div className="w-8/9 mx-auto flex flex-col items-start">
                    {maitaList.map(maita => (
                        <MaitaIntroductionRow
                            key={maita.id}
                            maita={maita}
                            onDownload={() => handleDownloadClick(maita.id, maita.name, maita.description, maita.downloadUrl)}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-3xl font-semibold mb-4">UTAUとは？</h2>
                    <p className="mb-4  px-10 text-xl">
                        飴屋／菖蒲（あめや・あやめ）氏制作の、歌声合成ソフトウェアです。
                        配布されている数多の音声ライブラリを導入することでお好みの音声で歌唱を作成することが出来ます。
                        VOCALOIDではありません。基本的にフリーソフトです。 当サイトで配布している音声ライブラリだけでは歌えませんので、こちらもDL下さい。
                    </p>

                    <a
                        href="http://utau2008.web.fc2.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-maitaPurple text-white font-semibold text-lg px-6 py-3 rounded-lg transition-colors hover:bg-maitaHoverPurple inline-block"
                    >
                        UTAU公式サイトを見る
                    </a>
                </div>
            </div>

            <Footer bgColor="bg-black" textColor="text-white" />

            {isModalOpen && selectedMaita && (
                <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                        <h3 className="text-2xl font-bold mb-4">
                            {lang === 'ja' ? `${selectedMaita.name}をダウンロード` : `Download ${selectedMaita.name}`}
                        </h3>
                        <p className="mb-4">{termMessage}</p>
                        <label className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={isAgreed}
                                onChange={handleAgreementChange}
                            />
                            {lang === 'ja' ? (
                                <>
                                    <NextLink href="/maita/term" className="text-mikuBlue underline hover:text-mikuPink transition-colors" target="_blank">
                                        利用規約
                                    </NextLink>
                                    に同意します
                                </>
                            ) : (
                                <>
                                    I agree to the
                                    <NextLink href="/maita/term" className="text-mikuBlue underline hover:text-mikuPink transition-colors ml-2" target="_blank">
                                        terms of use
                                    </NextLink>
                                </>
                            )}
                        </label>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-blue-500 rounded hover:bg-gray-200 transition-colors"
                            >
                                {lang === 'ja' ? '閉じる' : 'Close'}
                            </button>
                            <button
                                onClick={handleFinalDownload}
                                disabled={!isAgreed}
                                className={`px-4 py-2 rounded-lg transition-colors ${isAgreed
                                    ? "bg-maitaPurple text-white hover:bg-mikuPink"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                {lang === 'ja' ? 'ダウンロード' : 'Download'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}