'use client';

import Navigation from '../components/navigation.js';
import About from '../components/about.js';

export default function about() {
  return (
    <div className='mt-32'>
      <Navigation />
      <About />
    </div>
  );
}