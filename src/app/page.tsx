"use client"; // これを追加

import { useState, useEffect } from 'react';
import Header from './base/Header';
import { groups } from './const/group/GroupList';
import Footer from './base/Footer';

export default function Home() {
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

  return (
    <>
      <Header bgColor="bg-black" textColor="text-white" />
      <div className="bg-black text-white flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest">
        <h1 className="text-3xl md:text-7xl text-center font-bold animate-fadeInUp delay-100">同志社大学VOCALOID研究会Arpeggio</h1>
        <p
          className="absolute bottom-10 text-lg animate-bouncePulse transition-opacity duration-500"
          style={{ opacity: scrollOpacity }}
        >
          ↓下にスクロール↓
        </p>
      </div>

      <div className="bg-black text-white flex flex-col items-center justify-center pb-10 tracking-wider pt-4 mx-12 ">
        <h2 className="text-4xl font-bold">Arpeggioって何をするサークル？</h2>

        <p className="text-xl mt-10 mx-10">
          ArpeggioはVOCALOIDをはじめ合成音声に関する創作活動をしているサークルです！
        </p>
        <p className="text-xl my-10 ">
          Arpeggioでは以下の8個の班に分かれて活動しています！
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {groups.map((group) => (
            <div key={group.id} className="bg-transparent border border-mikuBlue text-white rounded-lg p-6 text-center transition-transform">
              <h3 className="text-2xl font-semibold">{group.name}</h3>
            </div>
          ))} 
        </div>
        <a href="/activity" className="mt-10 bg-mikuBlue text-white font-semibold text-2xl px-10 py-4 rounded-lg transition-colors hover:scale-105">
          詳細な活動内容を見る
        </a>
      </div>

      <div className="bg-black text-white flex flex-col items-center justify-center py-10 tracking-wider mx-10">
        <h2 className="text-4xl font-bold">Arpeggioにはどんな人がいるの？？</h2>
        <p className="text-xl mt-5 mx-10 ">
          Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
        </p>
        <div className="flex space-x-4 mt-10">
          <a href="https://note.com/arpeggiovocaloid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mikuBlue text-2xl px-6 py-3 rounded-lg border-2 border-transparent hover:border-mikuPink transition-colors">
            noteブログ
          </a>
          <a href="http://arpeggiod.blog90.fc2.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mikuBlue text-2xl  px-6 py-3 rounded-lg border-2 border-transparent hover:border-mikuPink transition-colors">
            fc2ブログ
          </a>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col items-center justify-center py-10 tracking-wider mx-10">
        <h2 className="text-4xl font-bold">Arpeggioに興味がある！</h2>
        <p className="text-xl mt-5 mx-10">
          Arpeggioの活動詳細やコンタクトはX (Twitter)から受け付けています。ぜひDMにてご連絡ください！
        </p>
        <div className="flex space-x-4 mt-10">
          <a href="https://twitter.com/arpeggio_kouhou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mikuBlue text-2xl  px-6 py-3 rounded-lg border-2 border-transparent hover:border-mikuPink transition-colors">
            X (Twitter)を見る
          </a>
        </div>
      </div>
      <Footer bgColor="bg-black" textColor="text-white" />
    </>
  );
}