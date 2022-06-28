import { debounce, isEmpty } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { useClassnames } from '~/hooks';
import styles from './Search.module.scss';
import HeadLessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { CloseIcon, LoadingIconSpin, SearchIcon } from '~/components/Icons';
import * as searchService from '~/utils/api-services/search-service';

function Search() {
  const cx = useClassnames({ styles });
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const fetchSearch = useCallback(
    debounce(async (query) => {
      if (!isEmpty(query)) {
        setSearchLoading(true);
        const response = await searchService.search({
          query,
        });
        setSearchResult(response.data);
        setSearchLoading(false);
      } else {
        setSearchResult([]);
      }
    }, 250),
    [],
  );

  useEffect(() => {
    fetchSearch(searchInput);
  }, [searchInput]);

  const handleChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchInput(searchValue);
    }
  };

  const handleResetInput = () => {
    setSearchInput('');
    setSearchResult([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Todos submit query
  };
  return (
    <HeadLessTippy
      onClickOutside={() => setShowResult(false)}
      visible={showResult && !isEmpty(searchResult)}
      interactive={true}
      render={(attrs) => {
        return (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx('search-title-container')}>Account</div>
              {!isEmpty(searchResult) &&
                searchResult?.map((result) => {
                  return <AccountItem key={result.id} data={result} onReset={handleResetInput} />;
                })}
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
          onChange={handleChangeInput}
          placeholder="Search accounts and videos"
          onFocus={() => setShowResult(true)}
        />
        <div
          className={cx('reset-or-loading', { reset: !!searchInput && !searchLoading }, { loading: searchLoading })}
          onClick={!!searchInput && !searchLoading ? handleResetInput : (e) => {}}
        >
          <CloseIcon className={cx('reset-icon')} />
          <LoadingIconSpin className={cx('loading-icon')} />
        </div>
        <span className={cx('span-spliter')} />
        <button type="submit" className={cx('button-search')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon className={cx('search-icon')} />
        </button>
      </form>
    </HeadLessTippy>
  );
}

export default Search;
