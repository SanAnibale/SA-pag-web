import React from 'react';

interface BrandLogoProps {
  className?: string;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '',
  id = 'brand-logo',
  size = 'md',
}) => {
  // Configured dimensions for each size variant
  const sizeConfig = {
    sm: {
      box: 'w-9 h-9 min-w-9 min-h-9 rounded-lg',
      saText: 'text-base font-extrabold tracking-tight',
      title: 'text-sm font-bold leading-tight tracking-tight',
      subtitle: 'text-xs font-normal leading-tight tracking-tight',
      gap: 'gap-2.5',
    },
    md: {
      // Default: Larger, generous and prominent for Navbar
      box: 'w-11 h-11 min-w-11 min-h-11 sm:w-12 sm:h-12 sm:min-w-12 sm:min-h-12 rounded-[11px] sm:rounded-xl shadow-xs',
      saText: 'text-lg sm:text-xl font-black tracking-tight',
      title: 'text-base sm:text-lg lg:text-[18px] font-extrabold leading-none tracking-tight',
      subtitle: 'text-xs sm:text-sm lg:text-[14.5px] font-normal leading-none tracking-tight mt-1 sm:mt-1.5',
      gap: 'gap-3 sm:gap-3.5',
    },
    lg: {
      // Hero or showcase size
      box: 'w-14 h-14 min-w-14 min-h-14 sm:w-16 sm:h-16 sm:min-w-16 sm:min-h-16 rounded-2xl shadow-sm',
      saText: 'text-2xl sm:text-3xl font-black tracking-tight',
      title: 'text-xl sm:text-2xl font-black leading-none tracking-tight',
      subtitle: 'text-base sm:text-lg font-normal leading-none tracking-tight mt-1.5',
      gap: 'gap-4',
    },
  }[size];

  return (
    <div
      id={id}
      className={`inline-flex items-center select-none text-[#1b4970] transition-transform duration-150 ${sizeConfig.gap} ${className}`}
      aria-label="SA Business Analytics & Consulting"
    >
      {/* Centered SA Brand Icon */}
      <div
        className={`${sizeConfig.box} bg-[#1b4970] flex items-center justify-center shrink-0 transition-colors`}
        style={{
          backgroundColor: '#1b4970',
        }}
      >
        {/*
          Precise optical centering:
          Capital S and A have no descenders, so -translate-y-[0.5px] provides
          mathematically and optically true center alignment inside the box.
        */}
        <span
          className={`text-white leading-none ${sizeConfig.saText} transform -translate-y-[0.5px] text-center`}
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          SA
        </span>
      </div>

      {/* Wordmark Two-Line Typography */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`text-[#1b4970] ${sizeConfig.title} antialiased`}
          style={{
            color: '#1b4970',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Business Analytics
        </span>
        <span
          className={`text-[#1b4970] ${sizeConfig.subtitle} antialiased opacity-95`}
          style={{
            color: '#1b4970',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          &amp; Consulting
        </span>
      </div>
    </div>
  );
};
