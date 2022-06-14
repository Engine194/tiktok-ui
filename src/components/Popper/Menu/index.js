import Tippy from '@tippyjs/react/headless';

import { useClassnames } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

function Menu({ menuItems = [], children }) {
  const cx = useClassnames({ styles });
  const renderItems = () => {
    return menuItems?.map((menuItem, index) => {
      return <MenuItem key={index} menuItem={menuItem} />;
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
