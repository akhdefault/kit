import css from './Button.module.scss';

type ButtonProps = {};

const Button = ({}: ButtonProps) => {
  return <div className={css.root}>Button</div>;
};

export default Button;
