import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseCreateUser } from '../../../api/types';

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
});

export const { setUserData } = userSlice.actions;

export const userReducer = userSlice.reducer;
