import React from 'react';

export function LogoSystemSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
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
            Logo System
          </h2>
          <div 
            className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
            }}
          />
        </div>
        
        {/* Logo variations grid */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Primary Logo */}
          <div 
            className="bg-white rounded-2xl p-12 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="flex-1 flex items-center justify-center">
              <div 
                className="relative bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-[60px] px-16 py-10"
                style={{
                  boxShadow: `
                    inset 0 -6px 15px rgba(0,0,0,0.3),
                    inset 0 3px 15px rgba(255,255,255,0.2),
                    0 15px 40px rgba(0,0,0,0.3)
                  `
                }}
              >
                <div 
                  className="bg-white rounded-[45px] px-12 py-8"
                  style={{
                    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15)'
                  }}
                >
                  <span 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '56px',
                      fontWeight: 900,
                      letterSpacing: '0.05em'
                    }}
                  >
                    KitKat
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Primary Logo
              </div>
              <div 
                className="text-gray-600"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Use on light backgrounds and marketing materials
              </div>
            </div>
          </div>
          
          {/* Logo on Dark Background */}
          <div 
            className="bg-[#4A1A03] rounded-2xl p-12 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex-1 flex items-center justify-center">
              <div 
                className="relative bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-[60px] px-16 py-10"
                style={{
                  boxShadow: `
                    inset 0 -6px 15px rgba(0,0,0,0.3),
                    inset 0 3px 15px rgba(255,255,255,0.2),
                    0 15px 40px rgba(0,0,0,0.5)
                  `
                }}
              >
                <div 
                  className="bg-white rounded-[45px] px-12 py-8"
                  style={{
                    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15)'
                  }}
                >
                  <span 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '56px',
                      fontWeight: 900,
                      letterSpacing: '0.05em'
                    }}
                  >
                    KitKat
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div 
                className="text-white mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Logo on Dark
              </div>
              <div 
                className="text-gray-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Use on dark backgrounds and chocolate packaging
              </div>
            </div>
          </div>
          
          {/* Wordmark Only */}
          <div 
            className="bg-white rounded-2xl p-12 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="flex-1 flex items-center justify-center">
              <span 
                className="text-[#D70000]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '72px',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  textShadow: '0 4px 15px rgba(215,0,0,0.2)'
                }}
              >
                KitKat
              </span>
            </div>
            <div className="mt-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Wordmark
              </div>
              <div 
                className="text-gray-600"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                For small spaces and digital applications
              </div>
            </div>
          </div>
          
          {/* Spacing Guidelines */}
          <div 
            className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-12 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="flex-1 flex items-center justify-center relative">
              {/* Logo with spacing guides */}
              <div className="relative">
                <div 
                  className="relative bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-[40px] px-10 py-6"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <div 
                    className="bg-white rounded-[30px] px-8 py-5"
                  >
                    <span 
                      className="text-[#D70000]"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '36px',
                        fontWeight: 900,
                        letterSpacing: '0.05em'
                      }}
                    >
                      KitKat
                    </span>
                  </div>
                </div>
                
                {/* Spacing guides */}
                <div 
                  className="absolute -top-8 left-0 right-0 h-6 border-2 border-dashed border-[#D70000]"
                  style={{ opacity: 0.5 }}
                />
                <div 
                  className="absolute -bottom-8 left-0 right-0 h-6 border-2 border-dashed border-[#D70000]"
                  style={{ opacity: 0.5 }}
                />
                <div 
                  className="absolute -left-8 top-0 bottom-0 w-6 border-2 border-dashed border-[#D70000]"
                  style={{ opacity: 0.5 }}
                />
                <div 
                  className="absolute -right-8 top-0 bottom-0 w-6 border-2 border-dashed border-[#D70000]"
                  style={{ opacity: 0.5 }}
                />
              </div>
            </div>
            <div className="mt-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Clear Space
              </div>
              <div 
                className="text-gray-600"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Minimum clearance equals the height of "K"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
