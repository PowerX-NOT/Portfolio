import React from 'react';
import SectionTitle from '../common/SectionTitle';

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>What do I do?</SectionTitle>
        <p className="text-lg text-gray-700 leading-relaxed">
          Currently pursuing my degree in BCA at Jain University, I'm a tech enthusiast and developer 
          with a passion for software engineering and Android development. I specialize in creating 
          innovative solutions, building custom ROMs, and working on Android kernel development. 
          With a keen interest in programming, system-level projects, and automation, I enjoy exploring 
          how technology can solve real-world problems.
        </p>
      </div>
    </section>
  );
}