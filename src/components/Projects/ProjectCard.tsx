import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, github, demo, tags }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={github}
            className="flex items-center text-gray-700 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="mr-2" />
            Code
          </a>
          {demo && (
            <a 
              href={demo}
              className="flex items-center text-gray-700 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}