import React from 'react'

interface LogoProps {
  className?: string
  style?: React.CSSProperties
}

export const Logo: React.FC<LogoProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ aspectRatio: '1/1', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Dark background circle */}
      <circle cx="100" cy="100" r="100" fill="#2B3440" />
      
      {/* Hands design */}
      <g transform="translate(100, 100)">
        {/* Left hand - teal */}
        <path
          d="M -30 -10 
             L -30 -40 
             Q -28 -42 -26 -40 
             L -26 -35
             L -22 -38
             Q -20 -40 -18 -38
             L -18 -33
             L -14 -36
             Q -12 -38 -10 -36
             L -10 -31
             L -6 -34
             Q -4 -36 -2 -34
             L -2 -29
             L 0 -30
             L 0 20
             Q -15 25 -30 15
             Z"
          fill="#20C9B6"
          opacity="0.9"
        />
        
        {/* Right hand - green */}
        <path
          d="M 30 -10 
             L 30 -40 
             Q 28 -42 26 -40 
             L 26 -35
             L 22 -38
             Q 20 -40 18 -38
             L 18 -33
             L 14 -36
             Q 12 -38 10 -36
             L 10 -31
             L 6 -34
             Q 4 -36 2 -34
             L 2 -29
             L 0 -30
             L 0 20
             Q 15 25 30 15
             Z"
          fill="#4ADE80"
          opacity="0.9"
        />
      </g>
      
      {/* Text - PRISTINE 36 in circular arrangement */}
      <g transform="translate(100, 100)">
        <defs>
          <path
            id="circle-text-top"
            d="M -70 0 A 70 70 0 0 1 70 0"
          />
          <path
            id="circle-text-bottom"
            d="M -70 0 A 70 70 0 0 0 70 0"
          />
        </defs>
        
        {/* Top text: PRISTINE 36 */}
        <text fill="white" fontSize="16" fontWeight="600" letterSpacing="4">
          <textPath href="#circle-text-top" startOffset="50%" textAnchor="middle">
            PRISTINE 36
          </textPath>
        </text>
        
        {/* Bottom text: REACTIVE RESULTS, SPECIALIST */}
        <text fill="white" fontSize="8" fontWeight="400" letterSpacing="2">
          <textPath href="#circle-text-bottom" startOffset="50%" textAnchor="middle">
            REACTIVE RESULTS, SPECIALIST
          </textPath>
        </text>
      </g>
    </svg>
  )
}

export const LogoSimple: React.FC<LogoProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Simplified version for smaller displays */}
      <circle cx="30" cy="30" r="30" fill="#2B3440" />
      
      {/* Hands design simplified */}
      <g transform="translate(30, 30)">
        <path
          d="M -8 -5 L -8 -15 Q -7 -16 -6 -15 L -6 -10 L -4 -12 Q -3 -13 -2 -12 L -2 -7 L 0 -8 L 0 8 Q -4 10 -8 7 Z"
          fill="#20C9B6"
        />
        <path
          d="M 8 -5 L 8 -15 Q 7 -16 6 -15 L 6 -10 L 4 -12 Q 3 -13 2 -12 L 2 -7 L 0 -8 L 0 8 Q 4 10 8 7 Z"
          fill="#4ADE80"
        />
      </g>
    </svg>
  )
}
