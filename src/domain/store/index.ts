import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/userSlice';
import { postReducer } from './postsSlice/postsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        posts: postReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
