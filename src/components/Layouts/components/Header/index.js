import { useState } from 'react';
import { isEmpty } from 'lodash';
import Tippy from '@tippyjs/react/headless';

import {
  AlphabetIcon,
  CloseIcon,
  ElipsisVerticalIcon,
  KeyboardIcon,
  LoadingIconSpin,
  LogoIcon,
  PlusIcon,
  QuestionOutlinedIcon,
  SearchIcon,
} from '~/assets/images';
import styles from './Header.module.scss';
import { Menu, Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { useClassnames } from '~/hooks';

const menuItems = [
  {
    icon: AlphabetIcon,
    title: 'Language',
    href: '',
    to: '',
    subMenus: [],
  },
  {
    icon: QuestionOutlinedIcon,
    title: 'Feedback and Help',
    href: '',
    to: '/feedback',
    subMenus: [],
  },
  {
    icon: KeyboardIcon,
    title: 'Keyboard shortcuts',
    href: '',
    to: '',
    subMenus: [],
  },
];

function Header() {
  const cx = useClassnames({ styles });
  const [searchResult, setSearchResult] = useState([]);
  const [popperVisible, setPopperVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Todos submit query

    // example
    setSearchResult((prev) => {
      const next = [...prev, searchInput];
      return next;
    });
    setSearchInput('');
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <LogoIcon alt="tiktok" width="120" height="45" />
        </div>
        <div className={cx('search')}>
          <Tippy
            onClickOutside={() => setSearchResult([])}
            visible={!isEmpty(searchResult)}
            interactive={true}
            render={(attrs) => {
              return (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <div className={cx('search-title-container')}>Account</div>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                  </PopperWrapper>
                </div>
              );
            }}
          >
            <form onSubmit={handleSubmit} className={cx('search-container')}>
              <input
                className={cx('search-text')}
                type="text"
                spellCheck={false}
                value={searchInput}
                onChange={(e) => setSearchInput(e?.target?.value)}
                placeholder="Search accounts and videos"
              />
              <div className={cx('reset-or-loading', { reset: false }, { loading: false })}>
                <CloseIcon className={cx('reset-icon')} />
                <LoadingIconSpin className={cx('loading-icon')} />
              </div>
              <span className={cx('span-spliter')} />
              <button type="submit" className={cx('button-search')}>
                <SearchIcon className={cx('search-icon')} />
              </button>
            </form>
          </Tippy>
        </div>
        <div className={cx('header-actions')}>
          <Button secondary sharpen className={cx('upload-button')} leftIcon={PlusIcon}>
            {/* <PlusIcon className={cx('upload-icon')} /> */}
            <span>Upload</span>
          </Button>
          <Button primary>Log in</Button>
          <Menu menuItems={menuItems}>
            <button text className={cx('more-info-button')}>
              <ElipsisVerticalIcon />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
