import { MainLayout } from '../../layout/MainLayout';
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant={'h6'}>Основные настройки</Typography>
        <Divider className={'mt-20 mb-30'} />
        <form>
          <TextField
            className={'mb-10'}
            required
            variant={'outlined'}
            fullWidth
            size={'small'}
            label={'Никнейм'}
          />
          <TextField
            className={'mb-15'}
            required
            variant={'outlined'}
            fullWidth
            type={'email'}
            size={'small'}
            label={'Email'}
          />
          <TextField
            className={'mb-15'}
            required
            variant={'outlined'}
            fullWidth
            type={'password'}
            size={'small'}
            label={'Пароль'}
          />
          <Divider className={'mt-15 mb-20'} />
          <Button color={'primary'} variant={'contained'}>
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
