import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, fallback: customFallback = images?.noImg, className, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  const handleErrorFetchSrc = () => {
    setFallback(customFallback);
  };
  return (
    <img
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      className={classNames(styles.wrapper, className)}
      onError={handleErrorFetchSrc}
    />
  );
}

export default forwardRef(Image);
