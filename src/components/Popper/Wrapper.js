import { useClassnames } from '~/hooks';
import styles from './Popper.module.scss';

function Wrapper({ children }) {
  const cx = useClassnames({ styles });

  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
