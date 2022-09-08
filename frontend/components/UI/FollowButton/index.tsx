import { Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { FC, useState } from 'react';
import { CheckOutlined } from '@material-ui/icons';

import styles from './FollowButton.module.scss';

export const FollowButton: FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Button onClick={() => setChecked(!checked)} variant={'contained'} className={styles.followBtn}>
      {checked ? (
        <CheckOutlined style={{ fontSize: 17 }} />
      ) : (
        <AddOutlined style={{ fontSize: 17 }} />
      )}
    </Button>
  );
};
