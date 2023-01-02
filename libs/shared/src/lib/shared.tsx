import CheckOutFront from './components/checkoutFront/checkoutFront';
import styles from './shared.module.scss';
import CheckOutBg from './assets/homePageBg.jpg';


/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(props: SharedProps) {
  return (
    <div style={{backgroundImage: `url(${CheckOutBg})`} } className={styles['container']}>
      <CheckOutFront />
    </div>
  );
}

export default Shared;
