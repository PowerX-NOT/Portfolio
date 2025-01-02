import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mb-12">
      <a 
        href="https://github.com" 
        className="hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com" 
        className="hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://instagram.com" 
        className="hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
}