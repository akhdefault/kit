import css from './Home.module.scss';
import Heart from 'assets/img/like.svg';

const Home = () => {
  return (
    <div className={css.root}>
      <p className={css.title}>Мы старались!</p>
      <div className={css.heart}>
        {/* This is how we import svgs; use 'fill' or 'stroke' props to change the color */}
        <Heart />
      </div>
    </div>
  );
};

export default Home;
