"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
  const pathname  = usePathname()

  return (
    <header>
      <div className="main-container flex justify-between items-center h-full">
        <Link href={"/"} className={"flex flex-col items-start"}>
          <Image
            src={"/coinpulse-logo.svg"}
            alt={"coinpulse-logo"}
            width={132}
            height={40}
          />
          <p className={"font-bold -ml-4"}>Coin <span className={"italic font-bold"}>Pulse</span></p>
        </Link>

        <nav className={"flex h-full items-center"}>
          <Link href={"/"} className={cn('px-6 py-5 flex items-center transition-all hover:text-white font-medium h-full text-purple-100 cursor-pointer', {
            'text-white': pathname === '/',
            'max-sm:hidden': true
          })}>
            Home
          </Link>

          <p>
            Search Modal
          </p>

          <Link href={"/coins"} className={cn('px-6 py-5 flex items-center transition-all hover:text-white font-medium h-full text-purple-100 cursor-pointer', {
            'text-white': pathname === '/coins',
          })}>
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
