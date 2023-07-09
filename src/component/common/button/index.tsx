import React from 'react';
import { Link } from 'react-router-dom';
import { AllowedIcons, Icon } from '../icon';

export type AllowedVariant =
  | 'success'
  | 'danger'
  | 'ghost'
  | 'info'
  | 'warning'
  | 'neutral'
  | 'primary';

type AdditionalTypes = {
  variant?: AllowedVariant;
  text: string;
  icon?: AllowedIcons;
};

export type ButtonType = AdditionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const computeClassFromProps = ({ variant }: { variant: AllowedVariant }): string => {
  switch (variant) {
    case 'info':
      return 'btn-info';
    case 'danger':
      return 'btn-error';
    case 'success':
      return 'btn-success';
    case 'warning':
      return 'btn-warning';
    case 'ghost':
      return 'btn-ghost';
    case 'neutral':
      return 'btn-neutral';
    case 'primary':
      return 'btn-primary';
    default:
      return '';
  }
};

export const OutlinedButton: React.FC<ButtonType> = (props) => (
  <BaseButton {...props} className={`btn-outline ${props.className}`} />
);

export const LinkButton: React.FC<ButtonType & { blank?: boolean; link: string }> = ({
  blank,
  link,
  ...props
}) => {
  const target = blank ? '_blank' : undefined;
  return (
    <Link to={link} target={target}>
      <BaseButton {...props} />
    </Link>
  );
};

export const BaseButton: React.FC<ButtonType> = ({
  variant = 'neutral',
  type,
  className = '',
  icon,
  text,
  ...props
}) => (
  <button
    type={type}
    className={`btn ${computeClassFromProps({ variant })} ${className} text-white`}
    {...props}
  >
    {icon && <Icon name={icon} className='text-inherit' size={24} />}
    {text}
  </button>
);
