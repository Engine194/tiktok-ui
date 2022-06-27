import styles from './AccountItem.module.scss';
import { CircleCheckIcon } from '~/components/Icons';
import { useClassnames } from '~/hooks';
import Image from '~/components/Image';

function AccountItem() {
  const cx = useClassnames({ styles });
  return (
    <div className={cx('wrapper')}>
      <span className={cx('avater-wrapper')}>
        <Image className={cx('item-avatar')} src="" alt="avatar" />
      </span>
      <div className={cx('infor-wrapper')}>
        <h4 className={cx('title-wrapper')}>
          <span className={cx('item-title')}>tiin.vn</span>&nbsp;
          <span className={cx('checked-icon')}>
            <CircleCheckIcon />
          </span>
        </h4>
        <p className={cx('item-desc')}>description...</p>
      </div>
    </div>
  );
}

export default AccountItem;
