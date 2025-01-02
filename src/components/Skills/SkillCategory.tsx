import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export default function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-blue-500 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );
}