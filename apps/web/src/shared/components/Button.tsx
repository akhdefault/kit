import { ReactNode } from 'react';
import css from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={css.root}>
      {children}
      <svg></svg>
    </button>
  );
};

export default Button;
