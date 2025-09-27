"use client"; // これを追加

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { groups } from '../const/group/GroupList';

import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import AnimatedLogo from '@/components/AnimatedLogo';

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [showLogo, setShowLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

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
    <div 
      className="min-h-screen transition-colors duration-1000"
      style={{
        backgroundColor: animationComplete ? 'white' : 'black',
        color: animationComplete ? 'black' : 'white',
        transition: 'background-color 1s ease-in-out, color 1s ease-in-out'
      }}
    >
      <Header 
        bgColor={animationComplete ? "bg-white" : "bg-black"} 
        textColor="text-black"
      />
      <div 
        className="flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest"
      >
          <AnimatedText
            text="同志社大学VOCALOID研究会"
            className={`text-lg sm:text-2xl md:text-4xl text-center font-bold mt-4 transition-colors duration-1000 ${
              animationComplete ? 'text-black' : 'text-white'
            }`}
            animationType="fadeInUp"
            delay={0}
            characterDelay={0.08}
            onComplete={() => setShowLogo(true)}
          />
        <div className="flex items-center justify-center">
          <AnimatedLogo
            src="/clearLogo.png"
            alt="Arpeggio Logo"
            className="mr-4 mt-4"
            show={showLogo}
            delay={0}
            onComplete={() => setAnimationComplete(true)}
          />
          <AnimatedText
            text="Arpeggio"
            className={`text-4xl text-center font-bold mt-4 transition-colors duration-1000 ${
              animationComplete ? 'text-black' : 'text-white'
            }`}
            animationType="fadeInUp"
            delay={1}
            characterDelay={0.08}
            onComplete={() => setShowLogo(true)}
          />
        </div>
        <p
          className={`absolute bottom-10 text-sm sm:text-lg animate-bouncePulse transition-colors duration-1000 ${
            animationComplete ? 'text-gray-600' : 'text-white'
          }`}
          style={{ opacity: scrollOpacity }}
        >
          ↓下にスクロール↓
        </p>
      </div>

      {/* Arpeggioって何をするサークル？ */}
      <div 
        className="flex flex-col items-center justify-center pb-10 tracking-wider pt-4 px-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioって何をするサークル？</h2>
        
        <p className="text-base sm:text-lg md:text-xl mt-10">
          ArpeggioはVOCALOIDをはじめ合成音声に関する創作活動をしているサークルです！
        </p>
        <p className="text-base sm:text-lg md:text-xl my-10">
          Arpeggioでは以下の8個の班に分かれて活動しています！
        </p>
        <div className="grid grid-cols-2 gap-6 mt-5">
          {groups.map((group) => (
            <div 
              key={group.id} 
              className={`border text-center rounded-lg p-6 transition-all duration-500 ${
                animationComplete 
                  ? 'border-mikuBlue bg-gray-50' 
                  : 'border-mikuBlue bg-transparent'
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{group.name}</h3>
            </div>
          ))} 
        </div>
        <a 
          href="/activity" 
          className={`mt-10 font-semibold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-all duration-500 hover:scale-105 ${
            animationComplete
              ? 'bg-mikuBlue text-white hover:bg-mikuPink'
              : 'bg-mikuBlue text-white hover:bg-mikuPink'
          }`}
        >
          詳細な活動内容を見る
        </a>
      </div>

      {/* Arpeggioにはどんな人がいるの？？ */}
      <div 
        className="flex flex-col items-center justify-center py-10 tracking-wider px-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioにはどんな人がいるの？？</h2>
        <p className="text-base sm:text-lg md:text-xl mt-5">
          Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
        </p>
        <div className="flex space-x-4 mt-10">
          <a 
            href="https://note.com/arpeggiovocaloid/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border-2 transition-all duration-500 hover:scale-105 ${
              animationComplete
                ? 'text-mikuBlue border-transparent hover:border-mikuPink'
                : 'text-mikuBlue border-transparent hover:border-mikuPink'
            }`}
          >
            noteブログ
          </a>
          <a 
            href="http://arpeggiod.blog90.fc2.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border-2 transition-all duration-500 hover:scale-105 ${
              animationComplete
                ? 'text-mikuBlue border-transparent hover:border-mikuPink'
                : 'text-mikuBlue border-transparent hover:border-mikuPink'
            }`}
          >
            fc2ブログ
          </a>
        </div>
      </div>

      {/* Arpeggioに興味がある！ */}
      <div 
        className="flex flex-col items-center justify-center py-10 tracking-wider px-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioに興味がある！</h2>
        <p className="text-base sm:text-lg md:text-xl mt-5">
          Arpeggioの活動詳細やコンタクトはXから受け付けています。ぜひDMにてご連絡ください！
        </p>
        <div className="flex space-x-4 mt-10">
          <a 
            href="https://twitter.com/arpeggio_kouhou"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border-2 transition-all duration-500 hover:scale-105 ${
              animationComplete
                ? 'text-mikuBlue border-transparent hover:border-mikuPink'
                : 'text-mikuBlue border-transparent hover:border-mikuPink'
            }`}
          >
            Xを見る
          </a>
        </div>
      </div>

      <Footer 
        bgColor={animationComplete ? "bg-white" : "bg-black"} 
        textColor={animationComplete ? "text-black" : "text-white"} 
      />
    </div>
  );
}