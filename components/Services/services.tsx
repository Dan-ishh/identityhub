'use client';
import React from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    name: 'Personal Information removal',
    content:
      'Lets users quickly find answers to their questions without having to search through multiple sources.',
    image: '/images/png/personal-info.png',
  },
  {
    id: 2,
    name: 'Cloaking Alias Profiles',
    content:
      'Lets users quickly find answers to their questions without having to search through multiple sources.',
    image: '/images/png/clocking-alias.png',
  },
  {
    id: 3,
    name: 'Virtual identities Security',
    content:
      'Lets users quickly find answers to their questions without having to search through multiple sources.',
    image: '/images/png/virtual.png',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto mt-24 max-w-[1200px]">
      <div className="flex items-center justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        {/* Div with gradient border */}
        <div className="rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px]">
          {/* Inner content */}
          <div className="rounded-full bg-[#0F0B15] px-2">
            <p className="text-sm text-[#CAD1E9]">Services</p>
          </div>
        </div>
      </div>

      <div className="hero-gradient-text mx-auto mt-2 max-w-[650px] text-center text-[40px] font-bold leading-[11vw] text-white lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
        See our services for secure your
        <span className="mx-2 bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] bg-clip-text text-transparent">
          Data
        </span>
      </div>
      <div className="mx-auto mt-5 max-w-[573px] text-center text-xl text-[#CAC6DD]">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-4 shadow-lg lg:flex-row">
        {services?.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative w-[360px] max-w-sm rounded-2xl bg-gradient-to-r from-[#090EDBA8] to-[#E73DC4A8] p-[2px]"
            >
              {/* Angled Border */}
              <div className="clip-right absolute inset-0 -z-10 h-full w-full rounded-2xl"></div>

              {/* Inner Content */}
              <div className="rounded-2xl bg-[#0E0C15] px-6 py-8 text-white">
                {/* Icon */}
                <div className="mb-4 h-full w-full sm:h-auto sm:w-auto">
                  <Image
                    height={45}
                    width={45}
                    src={item?.image}
                    alt={item?.name}
                    className="rounded-full"
                  />
                </div>

                {/* Title */}
                <h2 className="max-w-[240px] text-2xl font-semibold">
                  {item?.name}
                </h2>
                {/* Description */}
                <p className="mt-2 text-sm text-gray-400">{item?.content}</p>

                {/* Explore More */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="group inline-flex items-center text-sm font-medium text-white"
                  >
                    Explore More
                    <Image
                      height={14}
                      width={20}
                      src={'/images/png/arrow-right.png'}
                      alt={item?.name}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Add Clip-Path Style */}
        {/* <style jsx>{`
        .clip-right {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
        }
      `}</style> */}
      </div>
    </div>
  );
};

export default Services;
