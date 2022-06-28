import { useClassnames } from '~/hooks';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const cx = useClassnames({ styles });

  return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
