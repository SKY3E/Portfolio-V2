'use client';

import Navigation from './components/navigation.js';
import Header from './components/header.js';

export default function Home() {

  return (
    <main className='h-96'>
      <Navigation />
      <Header />
    </main>
  )
}
