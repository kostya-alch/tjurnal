import { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WrireForm.module.scss';

interface WriteFormProps {
  data?: any;
}

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

export const WriteForm: FC<WriteFormProps> = ({ data }) => {
  const [blocks, setBlocks] = useState([]);

  const [title, setTitle] = useState('');
  return (
    <div>
      <Input
        value={title}
        onChange={(event) => event.target.value}
        fullWidth
        classes={{ root: styles.titleField }}
        placeholder={'Заголовок'}
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
