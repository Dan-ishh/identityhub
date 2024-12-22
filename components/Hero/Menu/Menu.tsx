'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SVGGradientBg from '../SVGGradientBg';
import clsx from 'clsx';
import Link from 'next/link';

const inActiveStyle = 'text-white/50 hover:underline';
const activeStyle = 'underline bg-gradient-to-b';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Services', href: '/#services', isActive: false },
    { name: 'Features', href: '/#features', isActive: false },
    { name: 'Pricing', href: '/#pricing', isActive: false },
    { name: 'Partners', href: '/#partners', isActive: false },
    { name: 'About', href: '/#about', isActive: false },
  ]);

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };
  const setInactiveNavItem = () => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: false,
      })),
    );
  };

  return (
    <div className="mx-auto max-w-[1920px]">
      <header className="inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto mt-4 flex w-[95%] max-w-[1200px] items-center justify-between rounded-xl bg-black/20 p-2 ring-1 ring-slate-800 lg:px-3"
        >
          <div className="flex lg:flex-1">
            <Link
              className="tracking-wide"
              href="/"
              onClick={setInactiveNavItem}
            >
              <Image
                src="/images/png/logo.png"
                alt="Logo"
                height={120}
                width={150}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="hidden gap-2 px-5 py-2 text-white lg:flex lg:w-full lg:flex-1 lg:items-center lg:gap-x-6">
            {/* Desktop Mobile menu */}
            {navMenu.map((item) => (
              <span key={item.name} onClick={() => setActiveNavItem(item.name)}>
                <a
                  className={clsx({
                    'flex-2 relative rounded-full px-4 py-1 text-[#CAD1E9] transition-all':
                      true,
                    [activeStyle]: item.isActive,
                    [inActiveStyle]: !item.isActive,
                  })}
                  href={item.href}
                >
                  {item.name}
                </a>
              </span>
            ))}
          </div>
          <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center justify-center">
              <div className="group relative">
                <button className="relative inline-block cursor-pointer rounded-xl bg-gray-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px] opacity-100"></span>

                  <span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        Start free trial
                      </span>
                      <svg
                        className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-default px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="relative z-50">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">0xAquaWolf</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/png/logo.png"
                      alt="Logo"
                      height={120}
                      width={150}
                      className="cursor-pointer"
                    />
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-10 w-10 text-white"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navMenu.map((item) => (
                      <a
                        key={item.name + 1}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* Seperator */}
                  <div className="flex flex-1 items-center justify-center">
                    <div className="h-[2px] w-[70vw] bg-white/100"></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="group relative">
                        <button className="relative inline-block cursor-pointer rounded-xl bg-gray-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[2px] opacity-100"></span>

                          <span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                            <div className="relative z-10 flex items-center space-x-2">
                              <span className="transition-all duration-500 group-hover:translate-x-1">
                                Start free trial
                              </span>
                              <svg
                                className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
                                data-slot="icon"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <SVGGradientBg /> */}
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
