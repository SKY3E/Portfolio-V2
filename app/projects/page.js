'use client';

import Navigation from '../components/navigation.js';
import Projects from '../components/projects.js';

export default function projects() {
  return (
    <div className='mt-32'>
      <Navigation />
      <Projects />
    </div>
  );
}