'use client'

import { useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  animationType: 'fadeInDown' | 'fadeInUp'
  delay?: number
  characterDelay?: number
  onComplete?: () => void
}

const AnimatedText = ({ 
  text, 
  className = '', 
  animationType, 
  delay = 0, 
  characterDelay = 0.1,
  onComplete
}: AnimatedTextProps) => {
  useEffect(() => {
    if (!onComplete) return
    // Tailwind 側のアニメーション時間（fadeInUp/fadeInDown は 1s）に合わせる
    const animationDurationSec = 1
    const totalDurationSec = delay + (text.length - 1) * characterDelay + animationDurationSec
    const timer = setTimeout(() => onComplete(), totalDurationSec * 1000)
    return () => clearTimeout(timer)
  }, [text, delay, characterDelay, onComplete])

  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block animate-${animationType}`}
          style={{
            opacity: 0,
            animationDelay: `${delay + index * characterDelay}s`,
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText
