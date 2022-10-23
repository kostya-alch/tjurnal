import { UserApi } from './user';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import Cookies, { parseCookies } from 'nookies';
import axios from 'axios';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
};

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies._token;
  const instance = axios.create({
    baseURL: 'http://localhost:4200',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    user: UserApi(instance),
  };
};
