import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { epicMiddleware } from './middleware/epicMiddleware';
import { rootEpic } from './rootEpic';

const storeActivate = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
  });
  epicMiddleware.run(rootEpic);
  return store;
};

export const store = storeActivate();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
