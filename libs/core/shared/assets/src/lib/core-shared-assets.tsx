import styles from './core-shared-assets.module.scss';

/* eslint-disable-next-line */
export interface CoreSharedAssetsProps {}

export function CoreSharedAssets(props: CoreSharedAssetsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreSharedAssets!</h1>
    </div>
  );
}

export default CoreSharedAssets;
