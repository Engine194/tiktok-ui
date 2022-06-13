import classNames from 'classnames/bind';

function useClassnames({ styles }) {
  const cx = classNames.bind(styles);
  return cx;
}

export default useClassnames;
