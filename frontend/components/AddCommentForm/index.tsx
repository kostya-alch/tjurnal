import { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';

export const AddCommentForm: FC = () => {
  const [clickedFormComment, setClickedFormComment] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState<string>('');

  const onAddComment = () => {
    setClickedFormComment(false);
    setCommentValue('');
  };

  return (
    <div className={styles.form}>
      <Input
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        onFocus={() => setClickedFormComment(true)}
        minRows={clickedFormComment ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder={'Написать комментарий...'}
        fullWidth
        multiline
      />
      {clickedFormComment && (
        <Button
          onClick={onAddComment}
          className={styles.addBtn}
          variant={'contained'}
          color={'primary'}
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
