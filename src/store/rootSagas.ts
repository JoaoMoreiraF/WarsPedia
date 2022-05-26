import { all } from 'redux-saga/effects';
import peopleSagas from './modules/people/sagas';
import filmSagas from './modules/film/sagas';

export default function* rootSaga(): Generator {
  return yield all([peopleSagas(), filmSagas()])
}
