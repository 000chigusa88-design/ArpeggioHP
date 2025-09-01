"use client";

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Link from 'next/link';

type HeaderProps = {
    bgColor: string;
    textColor: string;
};

const Header: React.FC<HeaderProps> = ({ bgColor, textColor }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (
        <header className={`${bgColor} ${textColor} fixed top-0 left-0 w-full p-7 z-50`}>
            {/* モバイル版のハンバーガーメニュー */}
            <div className="custom:hidden flex justify-between items-center">
                <button onClick={toggleMenu} className="focus:outline-none flex items-center space-x-2">
                    <div className="text-lg font-light tracking-widest">メニュー</div>
                    <div className="hamburger-icon flex flex-col justify-between w-6 h-6">
                        <span className="block w-full h-0.5 bg-current"></span>
                        <span className="block w-full h-0.5 bg-current"></span>
                        <span className="block w-full h-0.5 bg-current"></span>
                    </div>
                </button>
            </div>

            {/* モバイル用のサイドバーメニュー */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-right text-2xl mb-4 focus:outline-none"
                >
                    &times;
                </button>
                <ul className="flex flex-col space-y-4 text-lg font-light tracking-widest">
                    <li><NextLink href="/" className="hover:text-mikuBlue transition-colors" onClick={toggleMenu}>TOP</NextLink></li>
                    <li><Link href="/activity" className="hover:text-mikuPink transition-colors" onClick={toggleMenu}>活動内容</Link></li>
                    <li className="relative">
                        <div className="flex items-center">
                            BLOG
                        </div>
                        <ul className="mt-2 ml-4 space-y-2">
                            <li>
                                <a
                                    href="https://note.com/arpeggiovocaloid/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-mikuBlue block transition-colors"
                                >
                                    note
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://arpeggiod.blog90.fc2.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-mikuBlue block transition-colors"
                                >
                                    fc2
                                </a>
                            </li>
                        </ul>

                    </li>
                    <li><NextLink href="/maita" className="hover:text-mikuPink transition-colors" onClick={toggleMenu}>琵音マイタ</NextLink></li>
                    <li><NextLink href="/album" className="hover:text-mikuPink transition-colors" onClick={toggleMenu}>ALBUM</NextLink></li>
                </ul>
            </div>

            {/* PC向けのメニュー */}
            <nav className="hidden custom:flex justify-center">
                <ul className="flex space-x-12 text-lg font-light relative tracking-widest">
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
                                className="absolute top-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg"
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
        </header>
    );
};

export default Header;