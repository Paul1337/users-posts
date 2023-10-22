import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../post/model';

export interface IPostsScheme {
    posts: IPost[];
}

const initialState: IPostsScheme = {
    posts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state: IPostsScheme, action: PayloadAction<IPost[]>) {
            state.posts = action.payload;
        },
    },
});

export const { actions: postsActions } = postsSlice;
export const { reducer: postReducer } = postsSlice;
