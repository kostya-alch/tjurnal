import { MainLayout } from '../layout/MainLayout';
import {
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@material-ui/core';
import { FollowButton } from '../components/UI/FollowButton';

export default function Rating() {
  return (
    <MainLayout hideComments>
      <Paper className={'p-20 p-20 pr-20 mb-20'} elevation={0}>
        <Typography
          variant={'h5'}
          style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '6px' }}
        >
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментариев за прошедшую неделю, а также всех, кто был к этому
          причастен! Мы победим! И сделаем блог!
        </Typography>
        <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>
      <Paper className={'p-20 p-20 pr-20'} elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <Button variant={'contained'} style={{ minWidth: 30, width: 30, height: 30 }}>
                  <FollowButton />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
