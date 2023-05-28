'use client';

import Navigation from './components/navigation.js';
import Header from './components/header.js';

import { useRef } from 'react';

export default function Home() {
  const handleScroll = (id) => {
    console.log(id);
    const targetElement = document.getElementById(id + '-section');
    if (targetElement) {
      console.log(targetElement);
      const targetPosition = targetElement.getBoundingClientRect().top;
      console.log(targetPosition);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className='h-96'>
      <Navigation handleScroll={handleScroll}/>
      <Header />
      <h1 className='mt-96 mb-96'>Hello</h1>
      <h1 className='mt-96 mb-96'>Hello</h1>
    </main>
  )
}
