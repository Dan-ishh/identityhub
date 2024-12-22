import Productivity from './productivity';
import Image from 'next/image';

export default function HeroCTA() {
  return (
    <>
      <div className="relative z-40 mx-auto flex h-[60vh] max-w-[950px] items-center justify-center lg:h-[80vh]">
        <div className="grid grid-cols-1 items-center justify-center gap-4 px-1 lg:gap-2 lg:pl-10 xl:pl-0">
          <div className="flex items-center justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {/* Div with gradient border */}
            <div className="rounded-full bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px]">
              {/* Inner content */}
              <div className="rounded-full bg-[#0F0B15] px-2">
                <p className="text-sm text-[#CAD1E9]">Secure your data</p>
              </div>
            </div>
          </div>
          <div className="hero-gradient-text relative text-center text-xl font-bold md:text-6xl xl:leading-tight">
            <span className="bg-gradient-to-r from-[#8D1EA2] via-[#8D1EA2] to-[#090EDB] bg-clip-text text-transparent shadow-zinc-900">
              Identity-hub is a better way to achieve privacy
            </span>
            <div className="absolute bottom-0 right-1/4">
              <Image
                height={10}
                width={200}
                src={'/images/png/underline.png'}
                alt={'underline'}
                // className="bottom-0"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[807px] text-center text-xl text-[#CAC6DD]">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </div>
          {/* <div className="grid grid-cols-2 justify-center gap-4"> */}
          <div className="mt-8 flex h-auto justify-center gap-4">
            <button className="relative inline-block cursor-pointer rounded-xl bg-gray-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px] opacity-100"></span>

              <span className="relative z-10 block rounded-xl bg-gray-950 px-5 py-1.5">
                <div className="relative z-10 flex items-center space-x-2 transition-all duration-500 group-hover:translate-x-1">
                  Start free trial
                </div>
              </span>
            </button>

            <button className="inline-block cursor-pointer rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] px-2 py-2 font-medium text-white shadow-2xl shadow-zinc-900 ring-1 ring-[#CAC6DD] transition-transform duration-300 ease-in-out hover:scale-105">
              Use it now
            </button>
          </div>

          {/* </div> */}
        </div>
      </div>
      <Productivity />
    </>
  );
}
