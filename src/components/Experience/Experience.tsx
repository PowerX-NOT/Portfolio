import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from './TimelineItem';
import { experiences } from './experienceData';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>What I've done so far</SectionTitle>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}