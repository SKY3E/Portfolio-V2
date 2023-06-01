'use client';

import { useMediaQuery } from '@react-hook/media-query';
import { useState, useEffect } from "react";
import { tiltSection, resetSection } from '../lib/ui';

export default function About() {
  const isXLargeScreen = useMediaQuery('(min-width: 1280px)');
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
      {domLoaded && (
        <section id='about-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)] mb-36'>
          <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
          <div className="xl:flex">
            <article className="xl:w-6/12 font-semibold">
              <p className="mb-4">
                I first started coding in 2021, at 14 years old. I started with a python course. However, I quickly moved on to work on my own projects, and started learning Unity & C# to make games. A bit later I decided to go into Web Development, and since then I've worked on over 10 projects, learned various languages, and decided to pursue Computer Science as a career.
              </p>
              <div className="mb-4 flex space-x-2">
                <div 
                  id='nat-languages-article'
                  className="w-1/2 h-36 px-4 py-2 bg-white hover:shadow-lg border-gray-200 border-2 rounded"
                  onMouseMove={(e) => tiltSection(e, 'nat-languages-article')}
                  onMouseLeave={() => resetSection('nat-languages-article')}
                >
                  Natural Languages: <br />
                  <ul className="list-disc list-inside">
                    <li>French</li>
                    <li>English</li>
                    <li>German (Limited Proficiency)</li>
                  </ul>
                </div>
                <div
                  id='prog-languages-article'
                  className="w-1/2 h-36 px-4 py-2 bg-white hover:shadow-lg border-gray-200 border-2 rounded"
                  onMouseMove={(e) => tiltSection(e, 'prog-languages-article')}
                  onMouseLeave={() => resetSection('prog-languages-article')}
                >
                  Programming Languages: <br />
                  <ul className="list-disc list-inside">
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>C#</li>
                  </ul>
                </div>
              </div>
              <div 
                id='stack-article'
                className="w-full h-36 px-4 py-2 bg-white hover:shadow-lg border-gray-200 border-2 rounded"
                onMouseMove={(e) => tiltSection(e, 'stack-article')}
                onMouseLeave={() => resetSection('stack-article')}
              >
                Personal Tech Stack: <br />
                <ul className="list-disc list-inside">
                  <li>Next.js</li>
                  <li>Javascript</li>
                  <li>Firebase -&gt; Postgres</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </article>
            {isXLargeScreen && 
              <article className="xl:w-6/12 font-semibold flex justify-center items-center">
                <img src="ProfilePic.jpg" alt="Profile Picture" className="h-5/6 hover:shadow-lg rounded-full border-gray-200 border-4 rounded" />
              </article>
            }
          </div>
        </section>
      )}
    </>
  )
}