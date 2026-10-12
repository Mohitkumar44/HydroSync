import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  className?: string;
  isDark?: boolean;
}

export default function Logo({ variant = 'full', className = '', isDark = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Stylized Logo Icon: H with Leaf & Hydro-Wave */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="hydroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20A7D7" />
              <stop offset="100%" stopColor="#12345B" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          
          {/* Left Vertical Bar of H - Hydro Wave shape */}
          <path
            d="M20 20 C20 15, 32 15, 32 20 L32 80 C26 78, 20 84, 20 80 Z"
            fill="url(#hydroGrad)"
          />
          
          {/* Wave crossbar connecting left to right */}
          <path
            d="M26 50 C40 38, 55 62, 70 50 L70 60 C55 72, 40 48, 26 60 Z"
            fill="#20A7D7"
          />

          {/* Right stem with stylized organic leaf curve */}
          <path
            d="M68 40 L68 80 C68 85, 78 85, 78 80 L78 50 C78 45, 68 35, 68 40 Z"
            fill="url(#hydroGrad)"
          />

          {/* Eco Leaf sprouting from the upper right representing Healthier Tomorrow */}
          <path
            d="M58 35 C58 15, 75 10, 85 15 C85 30, 72 40, 58 35 Z"
            fill="url(#leafGrad)"
          />
          <path
            d="M62 30 C70 24, 76 20, 82 17"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Small Hydro droplet */}
          <circle cx="50" cy="24" r="4.5" fill="#20A7D7" opacity="0.9" />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
            <span className="text-[#12345B] dark:text-[#E2E8F0]">Hydro</span>
            <span className="text-[#20A7D7]">Sync</span>
          </div>
          <div className="text-[9px] font-bold tracking-[0.2em] text-[#1769AA] dark:text-[#60A5FA] uppercase mt-0.5">
            Innovations LLP
          </div>
          {variant === 'full' && (
            <div className="text-[7.5px] font-medium tracking-wider text-[#66778A] dark:text-[#94A3B8] uppercase mt-0.5">
              Innovation for a Healthier Tomorrow
            </div>
          )}
        </div>
      )}
    </Link>
  );
}
