import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseCreateUser } from '../../../api/userApi/types';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  data: ResponseCreateUser | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserData: (state, action: PayloadAction<ResponseCreateUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.user.data;
      return { ...state, ...action.payload.user };
    },
  },
});

export const { setUserData } = userSlice.actions;

export const userReducer = userSlice.reducer;
