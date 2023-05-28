'use client';

import Navigation from './components/navigation.js';
import Header from './components/header.js';
import About from './components/about.js';

export default function Home() {
  const handleScroll = (id) => {
    console.log(id);
    const targetElement = document.getElementById(id + '-section');
    if (targetElement) {
      console.log(targetElement);
      const targetPosition = targetElement.getBoundingClientRect().top;
      console.log(targetPosition);
      window.scrollTo({
        top: targetPosition - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className='h-96'>
      <Navigation handleScroll={handleScroll}/>
      <Header />
      <About />
    </main>
  )
}
