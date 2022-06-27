import { BackIcon } from '~/components/Icons';
import { useClassnames } from '~/hooks';
import styles from './Menu.module.scss';

function MenuHeader({ title, onBack }) {
  const cx = useClassnames({ styles });
  return (
    <header className={cx('menu-header')}>
      <button className={cx('back-button')} onClick={onBack}>
        <BackIcon className={cx('back-icon')} />
      </button>
      <p className={cx('menu-title')}>{title}</p>
    </header>
  );
}

export default MenuHeader;
