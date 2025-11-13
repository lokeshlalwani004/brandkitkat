import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CoverSlide } from './components/CoverSlide';
import { AboutSlide } from './components/AboutSlide';
import { LogoSystemSlide } from './components/LogoSystemSlide';
import { ColorPaletteSlide } from './components/ColorPaletteSlide';
import { TypographySlide } from './components/TypographySlide';
import { BrandElementsSlide } from './components/BrandElementsSlide';
import { MockupsSlide } from './components/MockupsSlide';
import { ToneSlide } from './components/ToneSlide';
import { ThankYouSlide } from './components/ThankYouSlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  const slides = [
    { component: CoverSlide, name: 'Cover' },
    { component: AboutSlide, name: 'About' },
    { component: LogoSystemSlide, name: 'Logo System' },
    { component: ColorPaletteSlide, name: 'Color Palette' },
    { component: TypographySlide, name: 'Typography' },
    { component: BrandElementsSlide, name: 'Brand Elements' },
    { component: MockupsSlide, name: 'Applications' },
    { component: ToneSlide, name: 'Tone & Personality' },
    { component: ThankYouSlide, name: 'Thank You' }
  ];
  
  const CurrentSlideComponent = slides[currentSlide].component;
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Main slide container */}
      <div className="absolute inset-0">
        <CurrentSlideComponent />
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div 
          className="bg-black/80 backdrop-blur-md rounded-full px-6 py-4 flex items-center gap-6"
          style={{
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Previous button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            style={{
              boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          
          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div 
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-12 bg-[#D70000]' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  style={{
                    boxShadow: index === currentSlide ? '0 2px 8px rgba(215,0,0,0.5)' : 'none'
                  }}
                />
                
                {/* Tooltip */}
                <div 
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: 'white'
                  }}
                >
                  {slide.name}
                </div>
              </button>
            ))}
          </div>
          
          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            style={{
              boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      
      {/* Slide counter */}
      <div 
        className="absolute top-8 right-8 z-50 bg-black/60 backdrop-blur-sm rounded-full px-6 py-3"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
          color: 'white'
        }}
      >
        {currentSlide + 1} / {slides.length}
      </div>
      
      {/* Keyboard navigation hint - shows only on first slide */}
      {currentSlide === 0 && (
        <div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-40 text-white/60 text-center animate-pulse"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px'
          }}
        >
          Use arrow keys or click to navigate
        </div>
      )}
    </div>
  );
}
