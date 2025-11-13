import React from 'react';
import { Hexagon, Square, Circle } from 'lucide-react';

export function BrandElementsSlide() {
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
            Brand Elements
          </h2>
          <div 
            className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
            }}
          />
        </div>
        
        {/* Grid layout */}
        <div className="grid grid-cols-3 gap-8 flex-1">
          {/* Wafer Pattern */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Wafer Pattern
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Signature texture element
              </div>
            </div>
            
            <div 
              className="flex-1 rounded-xl overflow-hidden relative"
              style={{
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-8 gap-0">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div 
                    key={i}
                    className="border border-[#F9E5C8]"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#F9E5C8' : '#edddb5'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Brand Icons */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Graphic Elements
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Supporting visual shapes
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex gap-6">
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-lg flex items-center justify-center"
                  style={{
                    boxShadow: '0 8px 20px rgba(215,0,0,0.3)'
                  }}
                >
                  <Square className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-[#4A1A03] to-[#2d1002] rounded-full flex items-center justify-center"
                  style={{
                    boxShadow: '0 8px 20px rgba(74,26,3,0.3)'
                  }}
                >
                  <Circle className="w-10 h-10 text-[#F9E5C8]" strokeWidth={3} />
                </div>
              </div>
              <div 
                className="w-20 h-20 bg-gradient-to-br from-[#F9E5C8] to-[#edddb5] rounded-lg flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}
              >
                <Hexagon className="w-10 h-10 text-[#D70000]" strokeWidth={3} />
              </div>
            </div>
          </div>
          
          {/* Image Treatment */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Image Style
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Bright & saturated
              </div>
            </div>
            
            <div 
              className="flex-1 rounded-xl overflow-hidden relative"
              style={{
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1736788266119-aca33be88d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYXIlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzYzMDM3NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chocolate lifestyle"
                className="w-full h-full object-cover"
                style={{
                  filter: 'saturate(1.2) brightness(1.1) contrast(1.05)'
                }}
              />
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div 
            className="col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Gradient System
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Dynamic color transitions for depth and energy
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                <div 
                  className="flex-1 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #D70000 0%, #B80000 100%)',
                    boxShadow: '0 8px 20px rgba(215,0,0,0.3)'
                  }}
                />
                <div 
                  className="text-center text-[#4A1A03]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  Primary Red
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div 
                  className="flex-1 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #4A1A03 0%, #2d1002 100%)',
                    boxShadow: '0 8px 20px rgba(74,26,3,0.3)'
                  }}
                />
                <div 
                  className="text-center text-[#4A1A03]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  Chocolate Brown
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div 
                  className="flex-1 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #F9E5C8 0%, #edddb5 100%)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }}
                />
                <div 
                  className="text-center text-[#4A1A03]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  Cream Beige
                </div>
              </div>
            </div>
          </div>
          
          {/* Texture Samples */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Chocolate Texture
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Rich and premium
              </div>
            </div>
            
            <div 
              className="flex-1 rounded-xl overflow-hidden relative"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1551529563-9dd66d188764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3NjMwMzYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
