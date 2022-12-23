import styles from './core--layout.module.scss';
import AppLayout from './layout/layout/layout';

/* eslint-disable-next-line */
export interface CoreLayoutProps {}

export function CoreLayout(props: CoreLayoutProps) {
  return (
    <div className={styles['container']}>
      <AppLayout />
    </div>
  );
}

export default CoreLayout;
