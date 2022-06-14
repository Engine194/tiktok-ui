import { isEmpty, isFunction, startsWith } from 'lodash';
import { Link } from 'react-router-dom';
import { useClassnames } from '~/hooks';
import styles from './Button.module.scss';

function Button({
  to,
  href,
  primary,
  secondary,
  textOnly,
  rounded,
  sharpen,
  outlined,
  small,
  medium,
  large,
  disabled,
  children,
  leftIcon,
  rightIcon,
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

  const renderLeftIcon = () => {
    if (isFunction(leftIcon)) {
      const Icon = leftIcon;
      return (
        <span className={cx('left-icon')}>
          <Icon />
        </span>
      );
    }
  };

  const renderRightIcon = () => {
    if (isFunction(rightIcon)) {
      const Icon = rightIcon;
      return (
        <span className={cx('right-icon')}>
          <Icon />
        </span>
      );
    }
  };

  const classes = cx('wrapper', {
    primary,
    secondary,
    outlined,
    textOnly,
    rounded,
    sharpen,
    small,
    medium,
    large,
    disabled,
  });
  return (
    <RenderedComponent {..._props} className={`${classes} ${_props?.className}`}>
      <div className={cx('content-button')}>
        {renderLeftIcon()}
        {children}
        {renderRightIcon()}
      </div>
    </RenderedComponent>
  );
}

export default Button;
