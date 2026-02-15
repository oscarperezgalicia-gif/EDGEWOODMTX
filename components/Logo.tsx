
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "#1A1A1A";
  const accentColor = light ? "#E5E7EB" : "#B89372";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylized 'E' */}
        <path d="M75 20H30V80H75" stroke={primaryColor} strokeWidth="8" strokeLinecap="round" />
        <path d="M30 50H65" stroke={primaryColor} strokeWidth="8" strokeLinecap="round" />
        
        {/* Stylized Tree Interwoven */}
        <path d="M45 80C45 60 35 50 35 35C35 25 45 15 55 20C65 25 60 40 50 45C40 50 45 65 45 80Z" fill={accentColor} opacity="0.8" />
        <path d="M42 65C38 60 30 62 25 55" stroke={accentColor} strokeWidth="2" />
        <path d="M48 60C52 55 60 58 65 50" stroke={accentColor} strokeWidth="2" />
        <path d="M45 40C40 35 35 38 30 32" stroke={accentColor} strokeWidth="2" />
        <path d="M45 35C50 30 55 33 60 27" stroke={accentColor} strokeWidth="2" />
        
        {/* Roots */}
        <path d="M45 80C40 85 30 85 25 90" stroke={accentColor} strokeWidth="2" />
        <path d="M45 80C50 85 60 85 65 90" stroke={accentColor} strokeWidth="2" />
      </svg>
      <div className="flex flex-col">
        <span className={`text-xl font-serif font-bold tracking-[0.1em] leading-none uppercase ${light ? 'text-white' : 'text-brand-charcoal'}`}>
          Edgewood
        </span>
        <span className={`text-[8px] tracking-[0.25em] uppercase font-medium mt-1 leading-none ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          Management & Consulting
        </span>
      </div>
    </div>
  );
};

export default Logo;
