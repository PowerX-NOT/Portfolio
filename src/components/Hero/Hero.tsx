import React from 'react';
import SocialLinks from './SocialLinks';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Pugal!</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          And I'm debugging my way to something massive.
        </p>
        <SocialLinks />
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
}