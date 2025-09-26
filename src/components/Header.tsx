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
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasExpanded, setHasExpanded] = useState(!expandFromZero);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const dropdown = document.getElementById('dropdown-menu');
            const blogMenuItem = document.getElementById('blog-menu-item');

            if (dropdown && blogMenuItem) {
                const rect = dropdown.getBoundingClientRect();
                const blogRect = blogMenuItem.getBoundingClientRect();

                if (
                    event.clientX < rect.left ||
                    event.clientX > rect.right ||
                    event.clientY < rect.top ||
                    event.clientY > rect.bottom
                ) {
                    if (
                        event.clientX < blogRect.left ||
                        event.clientX > blogRect.right ||
                        event.clientY < blogRect.top
                    ) {
                        setDropdownOpen(false);
                    }
                }
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDropdownOpen]);

    // 横幅0からの展開アニメーション（ページ限定で有効化される）
    useEffect(() => {
        if (expandFromZero) {
            // レイアウト確定後に発火してスムーズに遷移
            const id = requestAnimationFrame(() => setHasExpanded(true));
            return () => cancelAnimationFrame(id);
        }
    }, [expandFromZero]);

    return (
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
                className={`max-w-4xl mt-6 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50 relative overflow-hidden ${
                    isMenuOpen ? 'rounded-2xl' : 'rounded-full'
                }`}
                style={{
                    width: hasExpanded ? '91.6667%' : 0, // 11/12
                    opacity: hasExpanded ? 1 : 0,
                    height: isMenuOpen ? '320px' : '64px', // メニュー展開時に高さを増やす
                    transition: 'width 5000ms cubic-bezier(0.23, 1, 0.32, 1), opacity 3000ms cubic-bezier(0.23, 1, 0.32, 1), height 300ms ease-in-out, border-radius 300ms ease-in-out'
                }}
            >
                {/* Favicon - 左端に固定（展開時は非表示） */}
                <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}>
                    <Image
                        src="/icon.png"
                        alt="Arpeggio Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>

                {/* 閉じるボタン（展開時のみ表示） */}
                <div className={`lg:hidden absolute right-4 top-4 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    <button 
                        onClick={toggleMenu} 
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center focus:outline-none transition-colors"
                    >
                        <span className="text-gray-600 text-lg">×</span>
                    </button>
                </div>

                {/* モバイル版のメニューボタン（展開時は非表示） */}
                <div className={`lg:hidden flex justify-end items-center px-6 h-full transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                    <button onClick={toggleMenu} className="focus:outline-none flex items-center space-x-2">
                        <div className="text-lg font-light tracking-widest">メニュー</div>
                    </button>
                </div>

                {/* モバイル用の展開メニュー */}
                <div className={`lg:hidden absolute top-16 left-0 w-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    <div className="flex flex-col space-y-0 px-6 pb-6">
                        <button 
                            onClick={() => { window.location.href = '/'; toggleMenu(); }}
                            className="text-left text-lg font-light tracking-widest py-1 hover:text-mikuBlue transition-colors"
                        >
                            TOP
                        </button>
                        <button 
                            onClick={() => { window.location.href = '/activity'; toggleMenu(); }}
                            className="text-left text-lg font-light tracking-widest py-1 hover:text-mikuPink transition-colors"
                        >
                            活動内容
                        </button>
                        <div className="py-1">
                            <div className="text-lg font-light tracking-widest">BLOG</div>
                            <div className="ml-4 mt-0 space-y-0">
                                <button 
                                    onClick={() => { window.open('https://note.com/arpeggiovocaloid/', '_blank'); toggleMenu(); }}
                                    className="text-left text-base font-light tracking-widest py-0.5 hover:text-mikuBlue transition-colors block"
                                >
                                    note
                                </button>
                                <button 
                                    onClick={() => { window.open('http://arpeggiod.blog90.fc2.com/', '_blank'); toggleMenu(); }}
                                    className="text-left text-base font-light tracking-widest py-0.5 hover:text-mikuBlue transition-colors block"
                                >
                                    fc2
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => { window.location.href = '/maita'; toggleMenu(); }}
                            className="text-left text-lg font-light tracking-widest py-1 hover:text-mikuPink transition-colors"
                        >
                            琵音マイタ
                        </button>
                        <button 
                            onClick={() => { window.location.href = '/album'; toggleMenu(); }}
                            className="text-left text-lg font-light tracking-widest py-1 hover:text-mikuPink transition-colors"
                        >
                            ALBUM
                        </button>
                    </div>
                </div>

                {/* PC向けのメニュー */}
                <nav className="hidden lg:flex justify-center h-full">
                    <ul className="flex space-x-12 text-lg font-light relative tracking-widest items-center">
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/" className="hover:text-mikuBlue transition-colors">TOP</NextLink>
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/activity" className="hover:text-mikuPink transition-colors">活動内容</NextLink>
                        </li>
                        <li
                            id="blog-menu-item"
                            onMouseEnter={() => setDropdownOpen(true)}
                            className="relative"
                        >
                            <a href="#" className="hover:text-mikuBlue transition-colors">BLOG</a>
                            {isDropdownOpen && (
                                <div
                                    id="dropdown-menu"
                                    className="absolute top-full mt-2 bg-white/90 backdrop-blur-md text-gray-800 rounded-lg shadow-lg"
                                >
                                    <ul className="mt-5 space-y-2 pr-4 ml-4 mb-3">
                                        <li><a href="https://note.com/arpeggiovocaloid/" target="_blank" rel="noopener noreferrer" className="hover:text-mikuBlue block">note</a></li>
                                        <li><a href="http://arpeggiod.blog90.fc2.com/" target="_blank" rel="noopener noreferrer" className="hover:text-mikuBlue block">fc2</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/maita" className="hover:text-mikuPink transition-colors">琵音マイタ</NextLink>
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/album" className="hover:text-mikuBlue transition-colors">ALBUM</NextLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;