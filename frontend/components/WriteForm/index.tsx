import { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './WrireForm.module.scss';
import { Api } from '../../api';

interface WriteFormProps {
  data?: any;
}

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

export const WriteForm: FC<WriteFormProps> = ({ data }) => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const post = await Api().post.create({
        title,
        body: blocks,
      });
    } catch (e) {
      console.warn('Create post', e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        fullWidth
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading}
        onClick={onAddPost}
        style={{ height: 42 }}
        variant="contained"
        color="primary"
      >
        Опубликовать
      </Button>
    </div>
  );
};
