import {
  TextsmsOutlined as MessageIcon,
  PersonAddOutlined as PersonIcon,
} from '@material-ui/icons';
import { Button, Paper, Typography } from '@material-ui/core';
import { FC } from 'react';
import { PostIcons } from '../PostIcons';

import styles from './FullPost.module.scss';

export const FullPost: FC = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" className={styles.title}>
          Стало известно о переброске подкрепления для союзных войск к Купянску и Изюму
        </Typography>
        <div>
          <Typography>
            Союзные силы массово перебрасывают подкрепление к Купянску и Изюму. Об этом стало
            известно военному корреспонденту Евгению Поддубному, подробностями он поделился в своем
            Telegram-канале. «Коровы» (вертолеты Ми-26 — прим. «Ленты.ру») приземляются практически
            у ЛБС (линии боевого столкновения). Подготовлено несколько точек приземления», —
            рассказал военкор.
          </Typography>
          <Typography>
            По его словам, вертолеты доставляют бронетехнику и личный состав. «Бойцы направляются в
            бой, чтобы отбросить противника и не допустить дальнейших прорывов», — добавил он.
          </Typography>
          <Typography>
            Ранее сало известно о начале наступления Вооруженных сил Украины (ВСУ) в сторону городов
            Балаклея, Изюм и Купянск в Харьковской области. Украинские войска сходу попытались
            ворваться в Балаклею, но были остановлены подразделениями Росгвардии.
          </Typography>
          <Typography>
            В настоящее время бой идет под Купянском — украинские танки пытаются прорваться к
            городу, работает российская авиация.
          </Typography>
        </div>
        <div style={{ width: 300, marginLeft: -12 }}>
          <PostIcons />
        </div>
        <div className={'d-flex justify-between align-center mt-30 mb-30'}>
          <div className={styles.userInfo}>
            <img
              src="https://avatars.mds.yandex.net/i?id=5de932ba4afa5cba436e8de1c8144861-5882720-images-thumbs&n=13&exp=1"
              alt="avatar"
            />
            <b>Константин Романов</b>
            <span>+1985</span>
          </div>
          <div>
            <Button variant={'contained'} className={'mr-15'}>
              <MessageIcon />
            </Button>
            <Button variant={'contained'}>
              <PersonIcon />
              <b className={'ml-10'}>Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
