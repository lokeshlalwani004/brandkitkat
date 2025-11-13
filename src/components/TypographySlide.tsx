import React from 'react';

export function TypographySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col px-24 py-16">
        {/* Section title */}
        <div className="mb-12">
          <h2 
            className="text-[#4A1A03] mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '64px',
              fontWeight: 800
            }}
          >
            Typography
          </h2>
          <div 
            className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
            }}
          />
        </div>
        
        {/* Typography showcase */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Poppins - Headings */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-8">
              <div 
                className="text-[#D70000] mb-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '28px',
                  fontWeight: 800
                }}
              >
                Poppins ExtraBold
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Primary Heading Font
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '48px',
                    fontWeight: 800,
                    lineHeight: '1.2'
                  }}
                >
                  Have a Break
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  48px / ExtraBold
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '36px',
                    fontWeight: 800,
                    lineHeight: '1.2'
                  }}
                >
                  Enjoy Every Bite
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  36px / ExtraBold
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '24px',
                    fontWeight: 800,
                    lineHeight: '1.3'
                  }}
                >
                  Sweet Moments Matter
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  24px / ExtraBold
                </div>
              </div>
            </div>
            
            {/* Font specimen */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div 
                className="text-[#4A1A03]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '18px',
                  letterSpacing: '0.05em'
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
              </div>
            </div>
          </div>
          
          {/* Montserrat - Subheadings */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-8">
              <div 
                className="text-[#D70000] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '28px',
                  fontWeight: 600
                }}
              >
                Montserrat SemiBold
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Subheading & Emphasis Font
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.3'
                  }}
                >
                  Classic Chocolate Experience
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  32px / SemiBold
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '1.4'
                  }}
                >
                  Irresistibly Crispy Wafers
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  24px / SemiBold
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '1.5'
                  }}
                >
                  Perfect for sharing and snacking
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  18px / SemiBold
                </div>
              </div>
            </div>
            
            {/* Font specimen */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div 
                className="text-[#4A1A03]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  letterSpacing: '0.02em'
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
              </div>
            </div>
          </div>
          
          {/* Inter - Body Text */}
          <div 
            className="col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-8">
              <div 
                className="text-[#D70000] mb-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '28px',
                  fontWeight: 400
                }}
              >
                Inter Regular
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Body Copy & Paragraph Text
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div 
                  className="text-[#4A1A03] mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.7'
                  }}
                >
                  Since 1935, KitKat has been the world's favorite chocolate-covered wafer bar. Our commitment to quality and taste has made us a household name across the globe.
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  18px / Regular / Line height 1.7
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  Experience the perfect combination of smooth chocolate and crispy wafer in every bite. KitKat is the ideal treat for any moment of your day.
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  16px / Regular / Line height 1.6
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}
                >
                  Perfect for sharing with friends, enjoying during a break, or satisfying your chocolate cravings. Available in multiple delicious flavors and formats.
                </div>
                <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  14px / Regular / Line height 1.6
                </div>
              </div>
            </div>
            
            {/* Font specimen */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div 
                className="text-[#4A1A03]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px'
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
