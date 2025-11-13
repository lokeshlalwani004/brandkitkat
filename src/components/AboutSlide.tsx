import React from 'react';

export function AboutSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F9E5C8]">
      {/* Wafer texture background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1612565894226-2515de67df0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWZlciUyMGJpc2N1aXQlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzAzNzUwM3ww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-24 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="mb-16">
            <h2 
              className="text-[#D70000] mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '72px',
                fontWeight: 800,
                textShadow: '0 4px 12px rgba(215,0,0,0.15)'
              }}
            >
              About the Brand
            </h2>
            <div 
              className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
              style={{
                boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
              }}
            />
          </div>
          
          {/* Content card */}
          <div 
            className="bg-white rounded-3xl p-16"
            style={{
              boxShadow: `
                0 25px 60px rgba(0,0,0,0.12),
                0 10px 30px rgba(0,0,0,0.08),
                inset 0 1px 0 rgba(255,255,255,0.8)
              `
            }}
          >
            {/* Small logo accent */}
            <div 
              className="inline-block bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-full px-8 py-3 mb-8"
              style={{
                boxShadow: '0 4px 15px rgba(215,0,0,0.3)'
              }}
            >
              <span 
                className="text-white"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: 700
                }}
              >
                KitKat
              </span>
            </div>
            
            {/* About text */}
            <p 
              className="text-[#4A1A03] mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '28px',
                lineHeight: '1.7',
                fontWeight: 400
              }}
            >
              Since 1935, <strong style={{ fontWeight: 700 }}>KitKat</strong> has been bringing people together with the simple pleasure of a perfectly crafted chocolate-covered wafer bar. Our iconic four-finger format and unmistakable snap have made "Have a break, have a KitKat" more than just a tagline—it's a global invitation to pause, refresh, and enjoy life's small moments.
            </p>
            
            <p 
              className="text-[#4A1A03]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '28px',
                lineHeight: '1.7',
                fontWeight: 400
              }}
            >
              <strong style={{ fontWeight: 700 }}>Our Mission:</strong> To create delicious, high-quality chocolate experiences that encourage people everywhere to take meaningful breaks and share joyful moments with friends and family.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t-2 border-[#F9E5C8]">
              <div>
                <div 
                  className="text-[#D70000] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '48px',
                    fontWeight: 800
                  }}
                >
                  1935
                </div>
                <div 
                  className="text-[#4A1A03]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  Year Founded
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#D70000] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '48px',
                    fontWeight: 800
                  }}
                >
                  80+
                </div>
                <div 
                  className="text-[#4A1A03]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  Countries Worldwide
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#D70000] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '48px',
                    fontWeight: 800
                  }}
                >
                  #1
                </div>
                <div 
                  className="text-[#4A1A03]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  Wafer Chocolate Bar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
