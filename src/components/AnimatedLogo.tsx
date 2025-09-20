'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface AnimatedLogoProps {
  src: string
  alt: string
  className?: string
  show: boolean
  delay?: number
  onComplete?: () => void
}

const AnimatedLogo = ({ 
  src, 
  alt, 
  className = '', 
  show, 
  delay = 0,
  onComplete
}: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        // ロゴのアニメーション完了後にコールバックを実行
        if (onComplete) {
          setTimeout(onComplete, 1000) // 1秒後にコールバック実行
        }
      }, delay * 1000)

      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [show, delay, onComplete])

  return (
    <div 
      className={`transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  )
}

export default AnimatedLogo
