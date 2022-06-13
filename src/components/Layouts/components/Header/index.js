import classNames from 'classnames/bind';

import { CloseIcon, LoadingIconSpin, LogoIcon, SearchIcon } from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <LogoIcon alt="tiktok" width="120" height="45" />
        </div>
        <div className={cx('search')}>
          <div className={cx('search-container')}>
            <input
              className={cx('search-text')}
              type="text"
              spellCheck={false}
              placeholder="Search accounts and videos"
            />
            <div className={cx('reset-or-loading', { reset: false }, { loading: false })}>
              <CloseIcon className={cx('reset-icon')} />
              <LoadingIconSpin className={cx('loading-icon')} />
            </div>
            <span className={cx('span-spliter')} />
            <button className={cx('button-search')}>
              <SearchIcon className={cx('search-icon')} />
            </button>
          </div>
        </div>
        <div className={cx('header-actions')}></div>
      </div>
    </header>
  );
}

export default Header;
