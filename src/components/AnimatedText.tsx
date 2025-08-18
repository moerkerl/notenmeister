'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  onAnimationComplete?: () => void
}

export default function AnimatedText({ text, className = '', onAnimationComplete }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setIsInView(true)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate once when element comes into view
          if (entry.isIntersecting && !hasAnimated) {
            // Delay the animation start to give time for reading
            setTimeout(() => {
              setIsInView(true)
              setHasAnimated(true)
              // Trigger callback after animation completes
              if (onAnimationComplete) {
                setTimeout(onAnimationComplete, 900) // 0.9s animation duration
              }
            }, 600) // 600ms delay before animation starts
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: '0px'
      }
    )

    const element = textRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasAnimated, onAnimationComplete])

  return (
    <>
      <style jsx>{`
        @keyframes fillText {
          from {
            background-position: 100% 0;
          }
          to {
            background-position: 0% 0;
          }
        }

        @keyframes drawUnderline {
          from {
            stroke-dashoffset: 150;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animated-text-wrapper {
          position: relative;
          display: inline-block;
        }

        .animated-text-gradient {
          background: linear-gradient(
            90deg,
            #059669 0%,
            #059669 50%,
            #000000 50%,
            #000000 100%
          );
          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
          position: relative;
        }

        .animated-text-gradient.animate {
          animation: fillText 0.68s ease-out forwards;
        }

        .underline-svg {
          position: absolute;
          left: -2%;
          right: -2%;
          bottom: -12px;
          width: 104%;
          height: 20px;
          pointer-events: none;
        }

        .underline-path {
          stroke: #059669;
          stroke-width: 3;
          fill: none;
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          stroke-linecap: round;
          opacity: 0;
        }

        .animate .underline-path {
          animation: drawUnderline 1.05s ease-out forwards;
          animation-delay: 0s;
          opacity: 1;
        }

        /* Fallback for browsers that don't support background-clip: text */
        @supports not (-webkit-background-clip: text) {
          .animated-text-gradient {
            background: none;
            -webkit-text-fill-color: #059669;
            color: #059669;
          }
        }

        /* Accessibility: respect user preferences */
        @media (prefers-reduced-motion: reduce) {
          .animated-text-gradient {
            animation: none;
            background-position: 0% 0;
          }
          .underline-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }

        /* Ensure text remains selectable and accessible */
        .animated-text-gradient::selection {
          background: rgba(16, 185, 129, 0.3);
          -webkit-text-fill-color: #059669;
        }
      `}</style>
      
      <span className="animated-text-wrapper">
        <span
          ref={textRef}
          className={`animated-text-gradient ${isInView ? 'animate' : ''} ${className}`}
          style={{
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
        </span>
        <svg 
          className={`underline-svg ${isInView ? 'animate' : ''}`}
          viewBox="0 0 100 20" 
          preserveAspectRatio="none"
        >
          <path
            className="underline-path"
            d="M 0,13 Q 35,6 66,7 T 100,17"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: 150
            }}
          />
        </svg>
      </span>
    </>
  )
}