import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function MockupsSlide() {
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
            Brand Applications
          </h2>
          <div 
            className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
            }}
          />
        </div>
        
        {/* Mockups grid */}
        <div className="grid grid-cols-3 gap-8 flex-1">
          {/* Product Wrapper */}
          <div 
            className="bg-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-4">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                Product Wrapper
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Packaging design
              </div>
            </div>
            
            {/* Wrapper mockup */}
            <div 
              className="flex-1 rounded-xl overflow-hidden relative"
              style={{
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
              }}
            >
              {/* Wrapper design */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#D70000] to-[#B80000] p-6 flex flex-col justify-between"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551529563-9dd66d188764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3NjMwMzYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                  backgroundSize: 'cover',
                  backgroundBlendMode: 'overlay',
                  opacity: 0.95
                }}
              >
                {/* Logo on wrapper */}
                <div 
                  className="bg-white rounded-full px-6 py-3 self-start"
                  style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                >
                  <span 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '20px',
                      fontWeight: 900
                    }}
                  >
                    KitKat
                  </span>
                </div>
                
                {/* Product name */}
                <div className="text-white">
                  <div 
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: 800,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    ORIGINAL
                  </div>
                  <div 
                    className="mt-1"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      opacity: 0.9
                    }}
                  >
                    Crispy Wafer
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Post */}
          <div 
            className="bg-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-4">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                Social Media
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Instagram post template
              </div>
            </div>
            
            {/* Phone mockup */}
            <div 
              className="flex-1 flex items-center justify-center"
            >
              <div 
                className="w-full max-w-[200px] bg-black rounded-3xl p-3"
                style={{
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-full" />
                    <div 
                      className="text-[#4A1A03]"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      @kitkat
                    </div>
                  </div>
                  
                  {/* Post image */}
                  <div 
                    className="relative bg-gradient-to-br from-[#D70000] to-[#B80000] aspect-square flex items-center justify-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1758613172020-5d45a6252213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwxfHx8fDE3NjMwMzc1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                      opacity: 0.95
                    }}
                  >
                    <div 
                      className="text-white text-center"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '18px',
                        fontWeight: 800,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                      }}
                    >
                      Have a<br/>Break
                    </div>
                  </div>
                  
                  {/* Icons */}
                  <div className="flex gap-3 p-3">
                    <Instagram className="w-5 h-5 text-[#4A1A03]" />
                    <div 
                      className="text-[#4A1A03]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: 500
                      }}
                    >
                      #HaveABreak
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Billboard Ad */}
          <div 
            className="bg-white rounded-2xl p-8 flex flex-col"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
            }}
          >
            <div className="mb-4">
              <div 
                className="text-[#4A1A03] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                Billboard
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Outdoor advertising
              </div>
            </div>
            
            {/* Billboard mockup */}
            <div 
              className="flex-1 rounded-xl overflow-hidden relative"
              style={{
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
              }}
            >
              {/* Billboard design */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#D70000] via-[#B80000] to-[#8B0000] flex flex-col items-center justify-center p-6"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1676491405940-9cd5d8cbf954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsYm9hcmQlMjBhZHZlcnRpc2luZyUyMHVyYmFufGVufDF8fHx8MTc2MzAzNzUwM3ww&ixlib=rb-4.1.0&q=80&w=1080)',
                  backgroundSize: 'cover',
                  backgroundBlendMode: 'overlay',
                  opacity: 0.95
                }}
              >
                {/* Logo */}
                <div 
                  className="bg-white rounded-full px-8 py-4 mb-4"
                  style={{
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                  }}
                >
                  <span 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '24px',
                      fontWeight: 900
                    }}
                  >
                    KitKat
                  </span>
                </div>
                
                {/* Message */}
                <div 
                  className="text-white text-center"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '20px',
                    fontWeight: 800,
                    textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  HAVE A BREAK
                </div>
              </div>
            </div>
          </div>
          
          {/* Brand Collateral */}
          <div 
            className="col-span-3 bg-white rounded-2xl p-10"
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
                Digital Assets
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              >
                Social media icon variations
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Social icons */}
              <div 
                className="w-24 h-24 bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 25px rgba(215,0,0,0.3)'
                }}
              >
                <Instagram className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              
              <div 
                className="w-24 h-24 bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 25px rgba(215,0,0,0.3)'
                }}
              >
                <Facebook className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              
              <div 
                className="w-24 h-24 bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 25px rgba(215,0,0,0.3)'
                }}
              >
                <Twitter className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              
              <div className="flex-1 ml-8">
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>Consistent branding</strong> across all digital platforms ensures recognition and builds trust with our audience. Use these standardized social media assets for official KitKat channels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
