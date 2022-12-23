import HomeLayout from './components/layout/homeLayout';
import styles from './core-home.module.scss';

/* eslint-disable-next-line */
export interface CoreHomeProps {}

export function CoreHome(props: CoreHomeProps) {
  return (
    <div className={styles['container']}>
      <HomeLayout />
    </div>
  );
}

export default CoreHome;
