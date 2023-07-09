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

type additionalTypes = {
  variant?: AllowedVariant;
  text: string;
  icon?: AllowedIcons;
  link: string;
};
export type buttonType = additionalTypes &
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
  }

  return '';
};

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton {...props} className={`btn-outline ${props.className}`} />
);

export const BaseButton: React.FC<buttonType> = ({
  variant = 'neutral',
  type,
  className = '',
  icon,
  text,
  link,
  ...props
}) => (
  <Link to={link} target='_blank'>
    <button
      type={type}
      className={`btn ${computeClassFromProps({ variant })} ${className} text-white`}
      {...props}
    >
      {icon && <Icon name={icon} className='text-inherit' size={24} />}
      {text}
    </button>
  </Link>
);
