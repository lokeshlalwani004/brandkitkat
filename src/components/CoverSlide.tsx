import React from 'react';

export function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Chocolate texture background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D70000] via-[#B80000] to-[#8B0000]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551529563-9dd66d188764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3NjMwMzYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Logo container with premium shadow */}
        <div 
          className="relative mb-12"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4)) drop-shadow(0 10px 25px rgba(0,0,0,0.3))'
          }}
        >
          {/* KitKat Logo */}
          <div 
            className="relative bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-[80px] px-24 py-16"
            style={{
              boxShadow: `
                inset 0 -8px 20px rgba(0,0,0,0.3),
                inset 0 4px 20px rgba(255,255,255,0.2),
                0 20px 60px rgba(0,0,0,0.5)
              `
            }}
          >
            <div className="relative">
              {/* Inner white oval */}
              <div 
                className="relative bg-white rounded-[60px] px-16 py-12"
                style={{
                  boxShadow: `
                    inset 0 2px 8px rgba(0,0,0,0.15),
                    0 4px 15px rgba(0,0,0,0.2)
                  `
                }}
              >
                <h1 
                  className="text-[#D70000] tracking-wider relative"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '120px',
                    fontWeight: 900,
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    letterSpacing: '0.05em'
                  }}
                >
                  KitKat
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div 
          className="text-white text-center"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
          }}
        >
          <p 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '42px',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}
          >
            Have a break, have a KitKat
          </p>
        </div>
        
        {/* Decorative line */}
        <div 
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '300px',
            opacity: 0.6,
            filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.4))'
          }}
        />
      </div>
      
      {/* Bottom glow effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
        }}
      />
    </div>
  );
}
