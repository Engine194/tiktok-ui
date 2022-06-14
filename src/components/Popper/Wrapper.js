import { useClassnames } from '~/hooks';
import styles from './Popper.module.scss';

function Wrapper({ children, className }) {
  const cx = useClassnames({ styles });

  return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
