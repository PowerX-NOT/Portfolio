import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Case Studies</SectionTitle>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto text-center">
          These projects demonstrate my expertise with practical examples of some of my work, 
          including brief descriptions and links to code repositories and live demos. They showcase 
          my ability to tackle intricate challenges, adapt to various technologies, and efficiently 
          oversee projects.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}