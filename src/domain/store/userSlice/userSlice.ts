import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../user/model';

export interface IPostsScheme {
    users: IUser[];
}

const initialState: IPostsScheme = {
    users: [],
};

const userSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setUsers(state: IPostsScheme, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
