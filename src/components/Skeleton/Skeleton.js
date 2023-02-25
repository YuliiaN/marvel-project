import css from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <>
      <p className={css.select}>
        Please select a character to see more information
      </p>
      <div className={css.skeleton}>
        <div className={`${css.pulse} ${css.header}`}>
          <div className={`${css.pulse} ${css.circle}`}></div>
          <div className={`${css.pulse} ${css.mini}`}></div>
        </div>
        <div className={`${css.pulse} ${css.block}`}></div>
        <div className={`${css.pulse} ${css.block}`}></div>
        <div className={`${css.pulse} ${css.block}`}></div>
      </div>
    </>
  );
};

export default Skeleton;
