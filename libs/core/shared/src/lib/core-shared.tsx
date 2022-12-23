import styles from './core-shared.module.scss';

/* eslint-disable-next-line */
export interface CoreSharedProps {}

export function CoreShared(props: CoreSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreShared!</h1>
    </div>
  );
}

export default CoreShared;
