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

const badgeLabel: AllowedBadgeLabel[] = [
  'api platform',
  'docker',
  'javascript',
  'next js',
  'php',
  'react js',
  'symfony',
  'tailwind',
  'typescript',
  'vite',
];

const badgeColor = [
  'blue',
  'gray',
  'purple',
  'emerald',
  'pink',
  'green',
  'red',
  'violet',
  'indigo',
  'teal',
];

type BadgePropsType = {
  label: AllowedBadgeLabel;
};

export const Badge: React.FC<BadgePropsType> = ({ label }) => {
  const color = badgeColor[badgeLabel.indexOf(label)];
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300 w-fit`}
    >
      {label}
    </span>
  );
};
