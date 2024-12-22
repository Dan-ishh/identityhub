'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content:
      'This platform has transformed how we handle our business processes. The efficiency gains have been remarkable.',
    image: '/images/png/david.png',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Startup Founder',
    content:
      "The features and capabilities offered here are unmatched. It's been a game-changer for our startup.",
    image: '/images/png/david.png',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Product Manager',
    content:
      "I've worked with many similar platforms, but this one stands out for its intuitive design and powerful features.",
    image: '/images/png/david.png',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlides = () => {
    // Create a circular array that repeats the testimonials
    const slides = [...testimonials, ...testimonials, ...testimonials];
    const start = activeIndex;
    const end = activeIndex + 1; // Only show 1 testimonial at a time
    return slides.slice(start, end);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      if (next >= testimonials.length) {
        return 0;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return testimonials.length - 1;
      }
      return next;
    });
  };

  return (
    <section id="testimonials" className="">
      <div className="container mx-auto mt-24 max-w-[1200px]">
        <div className="flex items-center justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Div with gradient border */}
          <div className="rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px]">
            {/* Inner content */}
            <div className="rounded-full bg-[#0F0B15] px-2">
              <p className="text-sm text-[#CAD1E9]">Testimonials</p>
            </div>
          </div>
        </div>

        {/* <h2 className="mb-12 text-center text-3xl font-bold">
          What’s our user
        </h2> */}
        <div className="hero-gradient-text mx-auto mt-10 max-w-[475px] text-center text-4xl font-bold text-white">
          What’s our user
          <span className="mx-2 bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] bg-clip-text text-transparent">
            says
          </span>
          about us
        </div>
        <div className="relative mt-14">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#00000029] to-[#53546C29] px-8 py-8">
            {/* Desktop View (1 testimonial) */}
            <div className="">
              <div className="grid grid-cols-1 gap-6">
                {getSlides().map((testimonial, index) => (
                  <Card
                    key={`${testimonial.name}-${index}`}
                    className="bg-gradient-to-r from-[#27283499] to-[#27283499] p-6 backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-1"
                  >
                    <div className="flex gap-2">
                      <div className="h-full w-full sm:h-auto sm:w-auto">
                        <Image
                          height={45}
                          width={45}
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-lg font-medium text-[#9D9BA6]">
                          {testimonial.role}
                        </p>
                        <p className="mb-4 text-lg font-medium text-[#CAC6DD]">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SVGGradientBg /> */}
    </section>
  );
};

export default Testimonials;
