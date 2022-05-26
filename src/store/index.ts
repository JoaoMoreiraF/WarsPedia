import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';


const persistConfig = {
  key: 'React-Challenge',
  storage,
  whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares
})

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor };
