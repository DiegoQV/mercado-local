"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  src: string;
  alt: string;
  priority?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    src: "/images/banner-mercado-digital-v2.png",
    alt: "Banner de abarrotes y supermercado",
    priority: true,
  },
  {
    id: 2,
    src: "/images/banner-tecnologia-smartphones.png",
    alt: "Banner de tecnología y smartphones",
  },
  {
    id: 3,
    src: "/images/banner-repuestos-herramientas.png",
    alt: "Banner de repuestos y herramientas",
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 segundos

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) {
      resetTimeout();
      return;
    }

    timeoutRef.current = setTimeout(nextSlide, AUTO_PLAY_INTERVAL);

    return () => resetTimeout();
  }, [currentIndex, isPaused, nextSlide, resetTimeout]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full relative"
          >
            <div className="relative w-full overflow-hidden bg-blue-900" style={{ aspectRatio: '16/9' }}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.priority}
                className={slide.id === 1 ? "object-cover object-center" : "object-contain"}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8 rounded-full"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
