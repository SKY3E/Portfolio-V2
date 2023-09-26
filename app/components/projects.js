'use client';

import { useState } from 'react';

export default function Projects() {
  const [projectTab, setProjectTab] = useState('featured');
  const [showText, setShowText] = useState({});

  const handleTabChange = (e) => {
    setProjectTab(e.target.id);
  };

  const handleSeeMore = (projectId) => {
    setShowText((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'The Ocean Scout',
      image: '/projects/OceanScout.png',
      skills: ['nextjs.png', 'js.png', 'tailwind.png', 'firebase.png', 'vercel.png'],
      description: 'The Ocean Scout is a scouting tool for FIRST Tech Challenge allowing for efficient collection, analysis, and reviewal of data to gain a competitive edge.',
      featured: true,
      type: 'web',
    },
    {
      id: 2,
      title: 'Ecosim',
      image: null,
      skills: ['unity.png'],
      description: 'Ecosim is a Unity environment simulation project I created to observe species evolving, passing on genes, & surviving in a competitive environment.',
      featured: true,
      type: 'game',
    },
    {
      id: 3,
      title: 'Personal Website (V2.0)',
      image: '/projects/PersonalWebsite.png',
      skills: ['nextjs.png', 'js.png', 'tailwind.png', 'vercel.png'],
      description: 'A website I created to showcase my skills, projects and goals for the future as I start to look at opportunities for me to develop my skills, except version 2.',
      featured: true,
      type: 'web',
    },
    {
      id: 4,
      title: 'Personal Website (V1.0)',
      image: '/projects/PersonalWebsiteOld.png',
      skills: ['html.png', 'css.png', 'js.png'],
      description: 'A website I created to showcase my skills, projects and goals for the future as I start to look at opportunities for me to develop my skills.',
      featured: false,
      type: 'web',
    },
    {
      id: 5,
      title: 'Open Calendar',
      image: '/projects/CalendarWebsite.png',
      skills: ['nextjs.png', 'js.png', 'tailwind.png', 'firebase.png', 'vercel.png'],
      description: 'A website to view (by day, week, or month) tasks, edit them, create new ones and delete them all in an integrated calendar.',
      featured: false,
      type: 'web',
    },
    {
      id: 6,
      title: 'Study Tab',
      image: '/projects/StudyTab.png',
      skills: ['html.png', 'css.png', 'js.png'],
      description: 'A website to maximaze your efficiency, productivity, & work day with various widgets, which are all fully customizable through a menu.',
      featured: false,
      type: 'web',
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (projectTab === 'featured') {
      return project.featured;
    } else {
      return project.type === projectTab;
    }
  });

  return (
    <section id='projects-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)] mb-36'>
      <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
      <article className="">
        <div className="px-2 gap-2 flex flex-wrap justify-center bg-white border-gray-200 border-2 rounded mb-4">
          <button
            onClick={handleTabChange}
            id='featured'
            className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base ${projectTab === 'featured' ? 'text-blue-500' : ''}`}
          >
            Featured
          </button>
          <button
            onClick={handleTabChange}
            id='web'
            className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base ${projectTab === 'web' ? 'text-blue-500' : ''}`}
          >
            Web Dev
          </button>
          <button
            onClick={handleTabChange}
            id='game'
            className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 text-xs md:text-base ${projectTab === 'game' ? 'text-blue-500' : ''}`}
          >
            Game Dev
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-1">
          {filteredProjects.map((project) => (
            <div key={project.id} className='flex flex-row hover:shadow-lg bg-white border-gray-200 border-2 rounded p-4 mb-4'>
              <div className="w-full md:w-1/3 mr-8">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <div className='h-44'>
                  {project.image && (
                    <img className="rounded mb-1 h-full object-cover" src={project.image} alt={project.title} />
                  )}
                </div>
              </div>
              <div className='w-full md:w-2/3'>
                <h3 className='mb-2 mt-2 text-xl font-semibold'>Description</h3>
                <p className="text-gray-700 text-opacity-60 font-semibold">{project.description}</p>
                <h3 className='mb-2 mt-2 text-xl font-semibold'>Technologies</h3>
                <div className='flex items-center space-x-2'>
                  {project.skills.length > 0 && project.skills.map((skill, index) => (
                    <div key={index} className="w-8 h-8 overflow-hidden">
                      <img className='w-full h-full object-cover' src={`/skills/${skill}`} alt={skill} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
