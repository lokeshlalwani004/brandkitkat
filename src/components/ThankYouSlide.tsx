import React from 'react';

export function ThankYouSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Red gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D70000] via-[#B80000] to-[#8B0000]"
      />
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Main message */}
        <div 
          className="text-white text-center mb-16"
          style={{
            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))'
          }}
        >
          <h1 
            className="mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '96px',
              fontWeight: 800,
              letterSpacing: '0.02em'
            }}
          >
            Thank You
          </h1>
          <p 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '32px',
              fontWeight: 600,
              opacity: 0.95
            }}
          >
            Have a break, have a KitKat
          </p>
        </div>
        
        {/* Logo container */}
        <div 
          className="relative"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))'
          }}
        >
          <div 
            className="relative bg-white rounded-[70px] px-20 py-14"
            style={{
              boxShadow: `
                inset 0 -6px 20px rgba(0,0,0,0.1),
                inset 0 2px 10px rgba(255,255,255,0.5),
                0 20px 60px rgba(0,0,0,0.4)
              `
            }}
          >
            <span 
              className="text-[#D70000]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '80px',
                fontWeight: 900,
                letterSpacing: '0.05em',
                textShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              KitKat
            </span>
          </div>
        </div>
        
        {/* Brand info */}
        <div 
          className="absolute bottom-16 text-white text-center"
          style={{
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
          }}
        >
          <div 
            className="mb-2"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              opacity: 0.9
            }}
          >
            Brand Guidelines 2025
          </div>
          <div 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              opacity: 0.8
            }}
          >
            © KitKat • All Rights Reserved
          </div>
        </div>
      </div>
      
      {/* Bottom shadow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
        }}
      />
    </div>
  );
}
