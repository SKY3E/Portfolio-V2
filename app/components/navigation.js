'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Navigation() {
  
  return (
    <section className=''>
      {/* Navbar */}
      <nav className="fixed z-10 top-0 left-0 h-16 w-full bg-blue-900 flex items-center text-white pl-4">
        <Link href={'/'}>
          <button className="flex items-center justify-center w-10 h-10 rounded-full border-white border-2 font-extrabold">
            R
          </button>
        </Link>
      </nav>
    </section>
  )
}