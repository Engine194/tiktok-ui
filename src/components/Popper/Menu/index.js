import { useState } from 'react';
import { isEmpty, isFunction } from 'lodash';
import Tippy from '@tippyjs/react/headless';

import { useClassnames } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

function Menu({ menuItems = [], hideOnClick = false, onChange, children }) {
  const cx = useClassnames({ styles });
  const [menuHistoryItems, setMenuHistoryItems] = useState([{ data: menuItems }]);
  const currentMenuItems = menuHistoryItems[menuHistoryItems.length - 1];
  const handleNextMenu = ({ menuItem }) => {
    const hasChild = !isEmpty(menuItem?.children);
    if (hasChild) {
      setMenuHistoryItems((prev) => [...prev, menuItem.children]);
    } else {
      if (isFunction(onChange)) {
        onChange({ menuItem });
      }
    }
  };
  const handleBackMenu = (e) => {
    setMenuHistoryItems((prev) => prev?.slice(0, prev?.length - 1));
  };
  const handleBackFirstMenu = () => {
    setMenuHistoryItems((prev) => [prev[0]]);
  };
  const renderItems = () => {
    return currentMenuItems?.data?.map((menuItem, index) => {
      return <MenuItem key={index} menuItem={menuItem} onClick={(e) => handleNextMenu({ menuItem })} />;
    });
  };

  return (
    <Tippy
      onClickOutside={handleBackFirstMenu}
      onHide={handleBackFirstMenu}
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 700]}
      offset={[20, 12]}
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {menuHistoryItems?.length > 1 && <MenuHeader title={currentMenuItems?.title} onBack={handleBackMenu} />}
              <div className={cx('menu-children')}>{renderItems()}</div>
            </PopperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
