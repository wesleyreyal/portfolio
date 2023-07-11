import React from 'react';

export type AllowedBadgeLabel =
  | 'api platform'
  | 'docker'
  | 'javascript'
  | 'next js'
  | 'php'
  | 'react js'
  | 'symfony'
  | 'tailwind'
  | 'typescript'
  | 'vite';

type BadgePropsType = {
  label: AllowedBadgeLabel;
};

const mapColor = (label: AllowedBadgeLabel): string => {
  switch (label) {
    case 'api platform':
      return `bg-blue-100 text-blue-800`;
    case 'docker':
      return `bg-gray-100 text-gray-800`;
    case 'javascript':
      return `bg-purple-100 text-purple-800`;
    case 'next js':
      return `bg-emerald-100 text-emerald-800`;
    case 'php':
      return `bg-pink-100 text-pink-800`;
    case 'react js':
      return `bg-green-100 text-green-800`;
    case 'symfony':
      return `bg-red-100 text-red-800`;
    case 'tailwind':
      return `bg-violet-100 text-violet-800`;
    case 'typescript':
      return `bg-indigo-100 text-indigo-800`;
    case 'vite':
      return `bg-teal-100 text-teal-800`;
    default:
      return '';
  }
};

export const Badge: React.FC<BadgePropsType> = ({ label }) => {
  const addedClass = mapColor(label);
  return (
    <span className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded w-fit ${addedClass}`}>
      {label}
    </span>
  );
};
