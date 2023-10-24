'use client';

import { useMediaQuery } from '@react-hook/media-query';
import { useState, useEffect } from "react";

export default function About() {
  const isXLargeScreen = useMediaQuery('(min-width: 1280px)');
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
      {domLoaded && (
        <section id='about-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)]'>
          <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
          <div className="xl:flex text-sm md:text-base">
            <article className="xl:w-6/12 font-semibold">
              <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-4 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Programming :</h3>
                  <a className='bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base' target="_blank" href="https://github.com/SKY3E">Learn more &rarr;</a>
              </div>
              <p className="p-2 bg-white border-gray-200 border-2 rounded mb-4">
                I first started coding in 2021, at 14 years old. I started with a python course. However, I quickly moved on to work on my own projects, and started learning Unity & C# to make games. A bit later I decided to go into Web Development, and since then I've worked on over 10 projects, learned various languages, and decided to pursue Computer Science as a career.
              </p>
              <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-4 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Activities :</h3>
                  <div className='flex flex-row gap-2'>
                    <a className='flex items-center justify-center' target="_blank" href="https://www.instagram.com/fasnybvs/"><img className='rounded h-10' src='/icons/soccer_team.jpg'></img></a>
                    <a className='flex items-center justify-center' target="_blank" href="https://friend.chess.com/4UU56"><img className='rounded h-10' src='/icons/chess.png'></img></a>
                  </div>
              </div>
              <p className="p-2 bg-white border-gray-200 border-2 rounded mb-4">
                Apart from programming, I also love to play <span className='font-bold'>soccer</span> with my school, go <span className='font-bold'>skiing</span> with my family or friends, or just play <span className='font-bold'>chess</span> or <span className='font-bold'>solitaire</span> alone. 
              </p>
              <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-4 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Education :</h3>
                  <a className='bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base' target="_blank" href="https://www.linkedin.com/in/raphael-bessin/">Learn more &rarr;</a>
              </div>
              <p className="p-2 bg-white border-gray-200 border-2 rounded mb-4">
                I'm currently in 11th grade at the French American School of New York (FASNY), pursuing an education following the BFI track, an international version of the French Bac. However, before arriving at FASNY in 2015, I lived in London where I went to WIX, another international school. Currently, I've chosen to specialize myself in Physics & Chemistry, Mathematics, and Economics & Socioligy, hoping to gain the skills to enter a university in the US, France, or Canada to pursue a Computer Science degree.
              </p>
            </article>
            {isXLargeScreen && 
              <article className="xl:w-6/12 font-semibold flex justify-center items-center">
                <img src="ProfilePic.jpg" alt="Profile Picture" className="h-4/6 hover:shadow-lg rounded-full border-gray-200 border-4 rounded" />
              </article>
            }
          </div>
          <div className="text-sm md:text-base">
            <article className='font-semibold'>
             <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-4 justify-between">
                <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Skills :</h3>
                <a className='bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base' target="_blank" href="https://github.com/SKY3E">Learn more &rarr;</a>
              </div>
              <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-4 justify-between">
                <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Tech Stack :</h3>
                <div className='flex items-center justify-center gap-2'>
                  <img className='rounded h-10' src='/skills/nextjs.png'></img>
                  <img className='rounded h-10' src='/skills/js.png'></img>
                  <img className='rounded h-10' src='/skills/firebase.png'></img>
                  <img className='rounded h-10' src='/skills/tailwind.png'></img>
                  <img className='rounded h-10' src='/skills/vercel.png'></img>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2 mb-2'>
                <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-2 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Systems :</h3>
                  <div className='flex items-center justify-center gap-2'>
                    <img className='rounded h-10' src='/skills/windows.png'></img>
                    <img className='rounded h-10' src='/skills/vscode.png'></img>
                    <img className='rounded h-10' src='/skills/npm.png'></img>
                    <img className='rounded h-10' src='/skills/postman.png'></img>
                  </div>
                </div>
                <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-2 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Databases :</h3>
                  <div className='flex items-center justify-center gap-2'>
                    <img className='rounded h-10' src='/skills/firebase.png'></img>
                    <img className='rounded h-10' src='/skills/mongodb.png'></img>
                  </div>
                </div>
                <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-2 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Languages :</h3>
                  <div className='flex items-center justify-center gap-2'>
                    <img className='rounded h-10' src='/skills/js.png'></img>
                    <img className='rounded h-10' src='/skills/csharp.png'></img>
                    <img className='rounded h-10' src='/skills/python.png'></img>
                  </div>
                </div>
                <div className="px-2 flex bg-white border-gray-200 border-2 rounded mb-2 justify-between">
                  <h3 className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base'>Version Control :</h3>
                  <div className='flex items-center justify-center gap-2'>
                    <img className='rounded h-10' src='/skills/github.png'></img>
                    <img className='rounded h-10' src='/skills/git.png'></img>
                  </div>
                </div>
              </div>
              <p className="p-2 bg-white border-gray-200 border-2 rounded mb-4">
                Other technologies I use include <span className='font-bold'>prettier</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/prettier.png'></img></span> and <span className='font-bold'>figma</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/figma.png'></img></span> to organize my code and design, <span className='font-bold'>github pages</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/githubactions.png'></img></span> and <span className='font-bold'>vercel</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/vercel.png'></img></span> to deploy, <span className='font-bold'>blender</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/blender.png'></img></span> and <span className='font-bold'>aseprite</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/aseprite.png'></img></span> for artwork, and finally <span className='font-bold'>unity</span> <span className='inline-block align-text-bottom'><img className='h-4 rounded' src='/skills/unity.png'></img></span> for game design.
              </p>
            </article>
          </div>
        </section>
      )}
    </>
  )
}