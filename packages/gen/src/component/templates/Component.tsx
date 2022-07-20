import css from './Component.module.scss';

type ComponentProps = {};

const Component = ({}: ComponentProps) => {
  return <div className={css.root}>Component</div>;
};

export default Component;
