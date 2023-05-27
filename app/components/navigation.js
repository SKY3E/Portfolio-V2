'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Navigation() {
  
  return (
    <nav className="fixed z-10 top-0 left-0 right-0 h-16 bg-gray-100 border-gray-200 border-2 rounded flex items-center justify-between text-gray-200 p-4 m-2">
      <Link href={'/'}>
        <button className="flex items-center justify-center w-10 h-10 rounded-full border-gray-200 border-2 bg-white font-extrabold">
          R
        </button>
      </Link>
    </nav>
  )
}