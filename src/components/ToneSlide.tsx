import React from 'react';
import { Smile, Sparkles, Zap, Heart } from 'lucide-react';

export function ToneSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background with lifestyle image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758613172020-5d45a6252213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwxfHx8fDE3NjMwMzc1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(215,0,0,0.8) 0%, rgba(74,26,3,0.85) 100%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col px-24 py-16">
        {/* Section title */}
        <div className="mb-12">
          <h2 
            className="text-white mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '64px',
              fontWeight: 800,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            Tone & Personality
          </h2>
          <div 
            className="h-2 w-32 bg-white rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(255,255,255,0.5)'
            }}
          />
        </div>
        
        {/* Content grid */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Keywords */}
          <div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-10"
            style={{
              boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)'
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
                Brand Keywords
              </div>
              <div 
                className="text-gray-600"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                Core personality traits
              </div>
            </div>
            
            {/* Keyword cards */}
            <div className="space-y-4">
              <div 
                className="bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-xl p-6 flex items-center gap-4"
                style={{
                  boxShadow: '0 8px 20px rgba(215,0,0,0.3)'
                }}
              >
                <Smile className="w-10 h-10 text-white" strokeWidth={2.5} />
                <div 
                  className="text-white"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '28px',
                    fontWeight: 800
                  }}
                >
                  Playful
                </div>
              </div>
              
              <div 
                className="bg-gradient-to-br from-[#4A1A03] to-[#2d1002] rounded-xl p-6 flex items-center gap-4"
                style={{
                  boxShadow: '0 8px 20px rgba(74,26,3,0.3)'
                }}
              >
                <Sparkles className="w-10 h-10 text-[#F9E5C8]" strokeWidth={2.5} />
                <div 
                  className="text-[#F9E5C8]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '28px',
                    fontWeight: 800
                  }}
                >
                  Fun
                </div>
              </div>
              
              <div 
                className="bg-gradient-to-br from-[#D70000] to-[#B80000] rounded-xl p-6 flex items-center gap-4"
                style={{
                  boxShadow: '0 8px 20px rgba(215,0,0,0.3)'
                }}
              >
                <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
                <div 
                  className="text-white"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '28px',
                    fontWeight: 800
                  }}
                >
                  Energetic
                </div>
              </div>
              
              <div 
                className="bg-gradient-to-br from-[#4A1A03] to-[#2d1002] rounded-xl p-6 flex items-center gap-4"
                style={{
                  boxShadow: '0 8px 20px rgba(74,26,3,0.3)'
                }}
              >
                <Heart className="w-10 h-10 text-[#F9E5C8]" strokeWidth={2.5} />
                <div 
                  className="text-[#F9E5C8]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '28px',
                    fontWeight: 800
                  }}
                >
                  Modern
                </div>
              </div>
            </div>
          </div>
          
          {/* Voice guidelines */}
          <div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-10"
            style={{
              boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)'
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
                Brand Voice
              </div>
              <div 
                className="text-gray-600"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                How we communicate
              </div>
            </div>
            
            {/* Voice attributes */}
            <div className="space-y-6">
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600
                  }}
                >
                  Friendly & Approachable
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  We speak in a warm, conversational tone that feels like chatting with a good friend. Always welcoming and inclusive.
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600
                  }}
                >
                  Optimistic & Upbeat
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  Our messaging radiates positivity and encourages people to take joyful breaks from their busy day.
                </div>
              </div>
              
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600
                  }}
                >
                  Simple & Clear
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  We keep it straightforward and easy to understand. No complicated language—just authentic, relatable communication.
                </div>
              </div>
            </div>
          </div>
          
          {/* Messaging examples */}
          <div 
            className="col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-10"
            style={{
              boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <div className="mb-6">
              <div 
                className="text-[#D70000] mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '24px',
                  fontWeight: 600
                }}
              >
                Example Messaging
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div 
                  className="bg-[#F9E5C8] rounded-lg p-6 mb-3"
                  style={{
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <div 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '18px',
                      fontWeight: 800,
                      lineHeight: '1.4'
                    }}
                  >
                    "Take a moment. You deserve it."
                  </div>
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Campaign headline
                </div>
              </div>
              
              <div>
                <div 
                  className="bg-[#F9E5C8] rounded-lg p-6 mb-3"
                  style={{
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <div 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '18px',
                      fontWeight: 800,
                      lineHeight: '1.4'
                    }}
                  >
                    "Break time = best time"
                  </div>
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Social media caption
                </div>
              </div>
              
              <div>
                <div 
                  className="bg-[#F9E5C8] rounded-lg p-6 mb-3"
                  style={{
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <div 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '18px',
                      fontWeight: 800,
                      lineHeight: '1.4'
                    }}
                  >
                    "Snap into happiness"
                  </div>
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Product tagline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
