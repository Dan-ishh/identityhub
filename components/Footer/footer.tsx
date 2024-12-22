import React from 'react';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import InstagramLogo from '@/public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TiktokLogo from '@/public/images/svg/Tiktok-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '@/public/images/svg/Youtube-Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-default px-4 py-8 text-white">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-start gap-4 border-b-2 border-[#FFFFFF1A] pb-4 lg:flex-row lg:justify-between">
          <Link className="tracking-wide" href="/">
            <Image
              src="/images/png/logo.png"
              alt="Logo"
              height={120}
              width={150}
              className="cursor-pointer"
            />
          </Link>

          <nav className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-xs text-[#CAC6DD] transition-colors hover:text-gray-300"
            >
              FEATURES
            </Link>
            <Link
              href="/"
              className="text-xs text-[#CAC6DD] transition-colors hover:text-gray-300"
            >
              SERVICES
            </Link>
            <Link
              href="/"
              className="text-xs text-[#CAC6DD] transition-colors hover:text-gray-300"
            >
              PRICING
            </Link>
            <Link
              href="/"
              className="text-xs text-[#CAC6DD] transition-colors hover:text-gray-300"
            >
              HOW TO USE
            </Link>
          </nav>
        </div>

        <div className="mt-4 flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between">
          <p className="text-center text-sm text-[#CAC6DD]">
            © identityhub 2024. All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="grid items-center">
              <Image
                src={'/images/png/twitter.png'}
                alt="twitter"
                width={40}
                height={40}
              />
            </Link>
            <Link href="/" className="grid items-center">
              <Image
                src={'/images/png/insta.png'}
                alt="insta"
                width={40}
                height={40}
              />
            </Link>
            <Link href="/" className="grid items-center">
              <Image
                src={'/images/png/telegram.png'}
                alt="telegram"
                width={40}
                height={40}
              />
            </Link>
            <Link href="/" className="grid items-center">
              <Image
                src={'/images/png/facebook.png'}
                alt="facebook"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
