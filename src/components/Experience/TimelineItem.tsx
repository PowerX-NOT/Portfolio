import React from 'react';

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
}

export default function TimelineItem({ title, period, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
      <div className="mb-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm text-gray-600">{period}</span>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}