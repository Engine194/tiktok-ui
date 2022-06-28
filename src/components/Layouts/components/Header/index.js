import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
  AlphabetIcon,
  ElipsisVerticalIcon,
  InboxIcon,
  KeyboardIcon,
  LogoIcon,
  LogoutIcon,
  PaperFlyIcon,
  PlusIcon,
  QuestionOutlinedIcon,
  SettingIcon,
  StyleLinkIcon,
  UserLinkIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import { Menu } from '~/components/Popper';
import Button from '~/components/Button';
import { useClassnames } from '~/hooks';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const menuItems = [
  {
    icon: AlphabetIcon,
    title: 'English',
    href: '',
    to: '',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en-En',
          title: 'English',
        },
        {
          code: 'vi-Vn',
          title: 'Tieng Viet',
        },
      ],
    },
  },
  {
    icon: QuestionOutlinedIcon,
    title: 'Feedback and Help',
    href: '',
    to: '/feedback',
  },
  {
    icon: KeyboardIcon,
    title: 'Keyboard shortcuts',
    href: '',
    to: '',
  },
];

const userMenu = [
  {
    icon: UserLinkIcon,
    title: 'View Profile',
    to: '/profile',
  },
  {
    icon: StyleLinkIcon,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: SettingIcon,
    title: 'Settings',
    to: '/settings',
  },
  ...menuItems,
  {
    icon: LogoutIcon,
    title: 'Log out',
    to: '/logout',
    separation: true,
  },
];

const currentUser = true;

const countMsg = 3;

function Header() {
  const cx = useClassnames({ styles });

  const handleSelectMenu = ({ menuItem }) => {
    console.log('menuItem...', menuItem);
  };

  const renderUploadButton = () => {
    return (
      <Button secondary sharpen className={cx('upload-button')} leftIcon={PlusIcon}>
        <span>Upload</span>
      </Button>
    );
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo')}>
          <LogoIcon alt="tiktok" width="120" height="45" />
        </Link>
        <div className={cx('search')}>
          <Search />
        </div>

        <div className={cx('header-actions')}>
          {currentUser ? (
            <>
              {renderUploadButton()}
              <Tippy delay="200" content="Message" placement="bottom">
                <Link className={cx('action-btn')} to="/message">
                  <PaperFlyIcon className={cx('action-icon')} height="26" width="26" />
                </Link>
              </Tippy>
              <Tippy delay="200" content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon className={cx('action-icon')} height="32" width="32" />
                  {countMsg && <sup className={cx('inbox-count')}>{countMsg}</sup>}
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {renderUploadButton()}
              <Button primary>Log in</Button>
            </>
          )}
          <Menu menuItems={currentUser ? userMenu : menuItems} onChange={handleSelectMenu}>
            {currentUser ? (
              <span className={cx('avatar-wrapper')}>
                <Image className={cx('avatar-img')} src="" alt="avatar" />
              </span>
            ) : (
              <button className={cx('more-info-button')}>
                <ElipsisVerticalIcon />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
