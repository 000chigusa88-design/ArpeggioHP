"use client";

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
    bgColor: string;
    textColor: string;
    /** このヘッダーを横幅0から展開アニメーションさせる場合にtrue */
    expandFromZero?: boolean;
};

const Header: React.FC<HeaderProps> = ({ bgColor, textColor, expandFromZero }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasExpanded, setHasExpanded] = useState(!expandFromZero);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    // 横幅0からの展開アニメーション（ページ限定で有効化される）
    useEffect(() => {
        if (expandFromZero) {
            // レイアウト確定後に発火してスムーズに遷移
            const id = requestAnimationFrame(() => setHasExpanded(true));
            return () => cancelAnimationFrame(id);
        }
    }, [expandFromZero]);

    return (
        <>
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 backdrop-blur-sm transition duration-300" />
            )}
            <header 
                className="fixed top-0 left-0 w-full z-50 flex justify-center"
                style={{
                    backgroundColor: bgColor === 'bg-transparent' ? 'transparent' : 
                                    bgColor === 'bg-white' ? 'white' : 
                                    bgColor === 'bg-pink-50' ? '#fdf2f8' : 'transparent',
                    color: textColor === 'text-white' ? 'white' : 'black',
                    transition: 'background-color 1s ease-in-out, color 1s ease-in-out'
                }}
            >
                {/* 横細長い四角形（角丸）のヘッダー */}
                <div
                    className={`max-w-4xl mt-6 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50 relative overflow-hidden rounded-3xl transition-all duration-300 ${
                        hasExpanded ? 'w-[91.6667%] opacity-100' : 'w-0 opacity-0'
                    } ${isMenuOpen ? 'h-[320px]' : 'h-16'}`}
                    style={{
                        transition: hasExpanded ? 'width 5000ms cubic-bezier(0.23, 1, 0.32, 1), opacity 3000ms cubic-bezier(0.23, 1, 0.32, 1), height 300ms ease-in-out' : 'width 5000ms cubic-bezier(0.23, 1, 0.32, 1), opacity 3000ms cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                >
                {/* ヘッダー内容 */}
                <div className="flex items-center justify-between px-6 py-3 h-16">
                    {/* ロゴ部分 */}
                    <NextLink href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="/clearLogo.png"
                            alt="Arpeggio Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="text-lg font-light tracking-widest text-black">Arpeggio</span>
                    </NextLink>

                    {/* PC向けのメニュー */}
                    <nav className="hidden lg:flex space-x-4">
                        <NextLink href="/" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">TOP</NextLink>
                        <NextLink href="/activity" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">活動内容</NextLink>
                        <a href="https://note.com/arpeggiovocaloid/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">note</a>
                        <a href="http://arpeggiod.blog90.fc2.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">fc2</a>
                        <NextLink href="/maita" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">琵音マイタ</NextLink>
                        <NextLink href="/album" className="px-4 py-2 text-black hover:text-pink-500 rounded-lg transition-all font-light tracking-widest">ALBUM</NextLink>
                    </nav>

                    {/* モバイルメニューボタン */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-black focus:outline-none p-2 -m-2"
                        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* モバイル用の展開メニュー */}
                {isMenuOpen && (
                    <div className="mt-4 flex flex-col items-start space-y-3 px-6 pb-6 lg:hidden">
                        <button 
                            onClick={() => { window.location.href = '/'; toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            TOP
                        </button>
                        <button 
                            onClick={() => { window.location.href = '/activity'; toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            活動内容
                        </button>
                        <button 
                            onClick={() => { window.open('https://note.com/arpeggiovocaloid/', '_blank'); toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            note
                        </button>
                        <button 
                            onClick={() => { window.open('http://arpeggiod.blog90.fc2.com/', '_blank'); toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            fc2
                        </button>
                        <button 
                            onClick={() => { window.location.href = '/maita'; toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            琵音マイタ
                        </button>
                        <button 
                            onClick={() => { window.location.href = '/album'; toggleMenu(); }}
                            className="text-black hover:text-pink-500 text-lg font-light tracking-widest transition-colors"
                        >
                            ALBUM
                        </button>
                    </div>
                )}

            </div>
        </header>
        </>
    );
};

export default Header;