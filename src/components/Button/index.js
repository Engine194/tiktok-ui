import { isEmpty, startsWith } from 'lodash';
import { Link } from 'react-router-dom';
import { useClassnames } from '~/hooks';
import styles from './Button.module.scss';

function Button({
  to,
  href,
  primary,
  secondary,
  text,
  rounded,
  sharpen,
  outlined,
  small,
  medium,
  large,
  disabled,
  children,
  ...props
}) {
  const cx = useClassnames({ styles });
  let RenderedComponent = 'button';
  const _props = {
    ...props,
  };
  if (!isEmpty(to)) {
    _props.to = to;
    RenderedComponent = Link;
  } else if (!isEmpty(href)) {
    _props.href = href;
    RenderedComponent = 'a';
  }

  if (disabled) {
    Object.keys(_props)?.forEach((key) => {
      if (typeof _props[key] === 'function' && startsWith(key, 'on')) {
        delete _props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    secondary,
    outlined,
    text,
    rounded,
    sharpen,
    small,
    medium,
    large,
    disabled,
  });
  return (
    <RenderedComponent {..._props} className={`${_props?.className} ${classes}`}>
      <div className={cx('content-button')}>{children}</div>
    </RenderedComponent>
  );
}

export default Button;
