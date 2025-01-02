import React from 'react';
import { Code2, Palette, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Code2 size={40} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">
              Passionate about building scalable applications with clean, efficient code.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Palette size={40} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-600">
              Creating beautiful, intuitive interfaces that users love to interact with.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Brain size={40} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              Turning complex problems into simple, elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}