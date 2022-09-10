import { FC } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WrireForm.module.scss';

interface WriteFormProps {
  title?: string;
}

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

export const WriteForm: FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        fullWidth
        classes={{ root: styles.titleField }}
        placeholder={'Заголовок'}
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
