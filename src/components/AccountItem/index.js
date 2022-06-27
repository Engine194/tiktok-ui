import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { CircleCheckIcon } from '~/components/Icons';
import { useClassnames } from '~/hooks';
import Image from '~/components/Image';

function AccountItem({ data, onReset }) {
  const cx = useClassnames({ styles });
  return (
    <Link to={`/@${data.nickname}`} onClick={onReset} className={cx('wrapper')}>
      <span className={cx('avater-wrapper')}>
        <Image className={cx('item-avatar')} src={data.avatar} alt="avatar" />
      </span>
      <div className={cx('infor-wrapper')}>
        <h4 className={cx('title-wrapper')}>
          <span className={cx('item-title')}>{data.full_name}</span>&nbsp;
          {data.tick && (
            <span className={cx('checked-icon')}>
              <CircleCheckIcon />
            </span>
          )}
        </h4>
        <p className={cx('item-desc')}>{data.nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
