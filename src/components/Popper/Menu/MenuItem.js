import Button from '~/components/Button';
import { useClassnames } from '~/hooks';

import styles from './Menu.module.scss';

function MenuItem({ menuItem }) {
  console.log('menuItem...', menuItem);

  const cx = useClassnames({ styles });
  return (
    <Button className={cx('menu-item')} leftIcon={menuItem?.icon} to={menuItem?.to} href={menuItem?.href}>
      {menuItem?.title}
    </Button>
  );
}

export default MenuItem;
