import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apies/albumApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]:albumsApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware()
    .concat(albumsApi.middleware)
  }
});
setupListeners(store.dispatch)
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export{useFetchAlbumsQuery} from './apies/albumApi'
