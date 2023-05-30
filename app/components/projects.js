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
      image: 'OceanScout.png',
      description: 'The Ocean Scout is a scouting tool for FIRST Tech Challenge allowing for efficient collection, analysis, and reviewal of data to gain a competitive edge.',
      featured: true,
      type: 'web',
    },
    {
      id: 2,
      title: 'Ecosim',
      image: null,
      description: 'Ecosim is a Unity environment simulation project I created to observe species evolving as time goes by.',
      featured: true,
      type: 'game',
    },
    {
      id: 3,
      title: 'Personal Website (V2.0)',
      image: 'PersonalWebsite.png',
      description: 'A website I created to showcase my skills, projects and goals for the future as I start to look at opportunities for me to develop my skills.',
      featured: true,
      type: 'web',
    },
    {
      id: 4,
      title: '',
      image: '',
      description: '',
      featured: false,
      type: '',
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
    <section id='projects-section' className='-mt-24 lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)] h-vh-screen'>
      <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
      <article className="">
        <div className="px-2 flex space-x-4 justify-center bg-white border-gray-200 border-2 rounded">
          <button onClick={handleTabChange} id='featured' className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 ${projectTab === 'featured' ? 'text-blue-500' : ''}`}>Featured</button>
          <button onClick={handleTabChange} id='web' className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 ${projectTab === 'web' ? 'text-blue-500' : ''}`}>Web Dev</button>
          <button onClick={handleTabChange} id='game' className={`hover:shadow-lg bg-gray-100 border-gray-200 border-2 rounded px-4 py-2 mt-2 mb-2 ${projectTab === 'game' ? 'text-blue-500' : ''}`}>Game Dev</button>
        </div>
        <div className="w-full flex items-center justify-center grid grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border-gray-200 border-2 rounded p-4 my-2">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <img className="rounded mb-1" src={project.image} alt={project.title}></img>
              {showText[project.id] ? (
                <div>
                  <p className="text-gray-700 text-opacity-60 font-semibold">{project.description}</p>
                  <button onClick={() => handleSeeMore(project.id)} className="text-blue-500 hover:underline">See Less</button>
                </div>
              ) : (
                <button onClick={() => handleSeeMore(project.id)} className="text-blue-500 hover:underline">See More</button>
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
