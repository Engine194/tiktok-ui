import Button from '~/components/Button';
import { useClassnames } from '~/hooks';

import styles from './Menu.module.scss';

function MenuItem({ menuItem, onClick }) {
  const cx = useClassnames({ styles });
  const classes = cx('menu-item', {
    separation: menuItem?.separation,
  });
  return (
    <Button className={classes} onClick={onClick} leftIcon={menuItem?.icon} to={menuItem?.to} href={menuItem?.href}>
      {menuItem?.title}
    </Button>
  );
}

export default MenuItem;
