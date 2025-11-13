import React from 'react';

export function ColorPaletteSlide() {
  const colors = [
    {
      name: 'KitKat Red',
      hex: '#D70000',
      rgb: 'RGB 215, 0, 0',
      usage: 'Primary brand color for logos, headers, and CTAs'
    },
    {
      name: 'Chocolate Brown',
      hex: '#4A1A03',
      rgb: 'RGB 74, 26, 3',
      usage: 'Secondary color for text and chocolate elements'
    },
    {
      name: 'Cream Beige',
      hex: '#F9E5C8',
      rgb: 'RGB 249, 229, 200',
      usage: 'Background color for warmth and contrast'
    },
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      rgb: 'RGB 255, 255, 255',
      usage: 'Backgrounds, text on dark colors, and clean spaces'
    }
  ];
  
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
            Color Palette
          </h2>
          <div 
            className="h-2 w-32 bg-gradient-to-r from-[#D70000] to-[#B80000] rounded-full"
            style={{
              boxShadow: '0 4px 12px rgba(215,0,0,0.3)'
            }}
          />
        </div>
        
        {/* Color swatches grid */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)'
              }}
            >
              {/* Color swatch with gradient and shadow */}
              <div 
                className="relative rounded-xl overflow-hidden mb-6"
                style={{
                  height: '180px',
                  boxShadow: `
                    0 20px 40px rgba(0,0,0,0.15),
                    0 8px 20px rgba(0,0,0,0.1),
                    inset 0 -4px 12px rgba(0,0,0,0.15),
                    inset 0 2px 8px rgba(255,255,255,${color.hex === '#FFFFFF' ? '0' : '0.3'})
                  `
                }}
              >
                {/* Main color with gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${color.hex} 0%, ${color.hex}${color.hex === '#FFFFFF' ? '' : 'dd'} 100%)`
                  }}
                />
                
                {/* Glossy overlay effect */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                  }}
                />
                
                {/* Top shine */}
                <div 
                  className="absolute top-0 left-0 right-0 h-12"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                    borderRadius: '12px 12px 0 0'
                  }}
                />
              </div>
              
              {/* Color information */}
              <div>
                <div 
                  className="text-[#4A1A03] mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '26px',
                    fontWeight: 600
                  }}
                >
                  {color.name}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="text-[#D70000]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700
                    }}
                  >
                    {color.hex}
                  </div>
                  <div 
                    className="text-gray-500"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px'
                    }}
                  >
                    {color.rgb}
                  </div>
                </div>
                
                <div 
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  {color.usage}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Color harmony section */}
        <div className="mt-8">
          <div 
            className="bg-white rounded-2xl p-8 flex items-center gap-4"
            style={{
              boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
            }}
          >
            <div 
              className="text-[#4A1A03]"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                fontWeight: 600
              }}
            >
              Color Harmony:
            </div>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <div 
                  key={index}
                  className="w-16 h-16 rounded-lg"
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 -2px 6px rgba(0,0,0,0.2)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
