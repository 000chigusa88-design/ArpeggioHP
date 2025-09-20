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
    <>
      <Header 
        bgColor={animationComplete ? "bg-white" : "bg-black"} 
        textColor="text-black"
      />
      <div 
        className="flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest transition-colors duration-5000 ease-in-out"
        style={{
          backgroundColor: animationComplete ? 'white' : 'black',
          color: animationComplete ? 'black' : 'white',
          transition: 'background-color 1s ease-in-out, color 1s ease-in-out'
        }}
      >
          <AnimatedText
            text="同志社大学VOCALOID研究会"
            className={`text-2xl md:text-4xl text-center font-bold mt-4 transition-colors duration-1000 ${
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
            className={`text-4xl md:text-8xl text-center font-bold mt-4 transition-colors duration-1000 ${
              animationComplete ? 'text-black' : 'text-white'
            }`}
            animationType="fadeInUp"
            delay={1}
            characterDelay={0.08}
            onComplete={() => setShowLogo(true)}
          />
        </div>
        <p
          className={`absolute bottom-10 text-lg animate-bouncePulse transition-colors duration-1000 ${
            animationComplete ? 'text-gray-600' : 'text-white'
          }`}
          style={{ opacity: scrollOpacity }}
        >
          ↓下にスクロール↓
        </p>
      </div>

      <Footer 
        bgColor={animationComplete ? "bg-white" : "bg-black"} 
        textColor={animationComplete ? "text-black" : "text-white"} 
      />
    </>
  );
}