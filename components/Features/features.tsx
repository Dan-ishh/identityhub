'use client';
import Image from 'next/image';
import React from 'react';

const features = [
  {
    id: 1,
    title: 'Protect Personal information',
    info: [
      {
        id: 1,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 2,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 3,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 4,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
    ],
    arrowImg: '/images/png/blue-line.png',
    image: '/images/png/information.png',
  },
  {
    id: 2,
    title: 'Detailed Reporting',
    info: [
      {
        id: 1,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 2,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 3,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 4,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
    ],
    arrowImg: '/images/png/purple-line.png',
    image: '/images/png/contact-info.png',
  },
  {
    id: 3,
    title: 'Secure All Data',
    info: [
      {
        id: 1,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 2,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 3,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
      {
        id: 4,
        des: 'The first step involves identifying all places where your personal information might be present.',
      },
    ],
    arrowImg: '/images/png/green-line.png',
    image: '/images/png/lock-password.png',
  },
];
const Features = () => {
  return (
    <div className="relative z-40 mx-auto mt-32 flex max-w-[1000px] items-center justify-center xl:max-w-[1330px]">
      <div className="w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Div with gradient border */}
          <div className="rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px]">
            {/* Inner content */}
            <div className="rounded-full bg-[#0F0B15] px-2">
              <p className="text-sm text-[#CAD1E9]">Features</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="hero-gradient-text mt-2 text-center text-[40px] font-bold leading-[11vw] text-white lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
          Why
          <span className="mx-2 bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] bg-clip-text text-transparent">
            choose
          </span>
          us
        </div>
        <div className="mx-auto mt-4 max-w-[573px] text-center text-xl text-[#CAC6DD]">
          Make your data invisible by generating unlimited identities. The
          next-level in privacy protection for online and travel.
        </div>

        {/* Features Section */}
        {features?.map((item, index) => {
          return (
            <>
              <div
                className="mt-4 flex flex-col-reverse items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-[#00000029] to-[#53546C29] p-6 xl:flex-row 2xl:p-10"
                key={index}
              >
                <div className="custom-xl:w-2/4 flex gap-4" key={index}>
                  <div className="image h-auto">
                    <Image
                      height={45}
                      width={45}
                      src={item?.arrowImg}
                      alt=""
                      className="h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-[32px] font-semibold text-[#CAD1E9]">
                      {item?.title}
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      {item?.info?.map((data, i) => {
                        return (
                          <div
                            className="mt-4 flex h-auto items-center justify-between gap-4"
                            key={i}
                          >
                            <Image
                              height={26}
                              width={26}
                              src={
                                item?.title === 'Protect Personal information'
                                  ? '/images/png/blue.png'
                                  : item?.title === 'Detailed Reporting'
                                    ? '/images/png/purple.png'
                                    : item?.title === 'Secure All Data'
                                      ? '/images/png/green.png'
                                      : ''
                              }
                              alt={item?.title}
                              className="rounded-full"
                            />
                            <div className="max-w-[400px] text-sm font-medium text-[#CAD1E9] lg:text-xl">
                              {data?.des}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="right w-2/4">
                  <Image
                    height={400}
                    width={250}
                    src={item?.image}
                    alt={item?.title}
                    // className="h-80 w-96"
                    className="w-full"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
