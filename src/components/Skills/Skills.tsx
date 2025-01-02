import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>My Skills</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}