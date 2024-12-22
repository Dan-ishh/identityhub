import React from 'react';
import Image from 'next/image';

const Future = () => {
  // bg-[url('/images/png/banner_cirlce.png'),_url('/images/png/blur_background.png')]
  //   bg-[url('/images/png/banner_cirlce.png')]
  return (
    // <div className="bg-url('/images/png/bg-grad.png') h-full bg-cover bg-no-repeat md:bg-contain">
    <div className="mt-4 flex h-[100vh] flex-col items-center justify-center bg-[url('/images/png/banner_cirlce.png'),_url('/images/png/bg-grad.png')] bg-cover bg-bottom bg-no-repeat sm:bg-contain">
      <div className="hero-gradient-text relative mx-auto mt-2 max-w-[650px] text-center text-[40px] font-bold leading-[11vw] text-white lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
        Be the part of future of IdentityHub
        <div className="top-30 absolute right-1/4">
          <Image
            height={8}
            width={350}
            src={'/images/png/underline.png'}
            alt={'underline'}
            // className="bottom-0"
          />
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-[573px] text-center text-xl text-[#CAC6DD]">
        Unleash the power of AI within Brainware. Upgrade your productivity with
        Brainware, the Open AI chat app.
      </div>

      <div className="mt-6 flex justify-center">
        <button className="relative inline-block cursor-pointer rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] px-2 py-2 font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 ring-1 ring-white transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
          Start free trial
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Future;
