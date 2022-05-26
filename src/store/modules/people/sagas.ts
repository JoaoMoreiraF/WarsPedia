import { AxiosResponse } from 'axios';
import { PeopleActions } from './types';
import { peopleActionsFunctions } from './actions';
import { drawerActionsFunctions } from '../drawer/actions';
import { Action } from '../../types';
import { api } from '../../../services/api';

import type { People, PeopleResult } from './types';
import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

const { GET_ALL_PEOPLE_REQUEST, GET_FILTERED_PEOPLE_REQUEST, GET_PERSON_REQUEST } = PeopleActions

const { getPeopleSuccess, getPeopleFailure, getFilteredPeopleSuccess, getFilteredPeopleFailure, getPersonSuccess, getPersonFailure } = peopleActionsFunctions
const { setContentDrawer, setDrawerTrue } = drawerActionsFunctions

function* getPeopleRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const searchTerm = yield select((state) => state.people.searchTerm)
    const page = payload.page ?? 1 
    const path = `people/?page=${page}&search=${searchTerm}`
    const has_next = yield select((state) => state.people.has_next)
    const lastAction = yield select((state) => state.people.lastAction)

    if(!page) {
      return
    }

    if (has_next && lastAction === GET_ALL_PEOPLE_REQUEST) {
      const response: AxiosResponse<PeopleResult> | unknown = yield call(api, 'GET', path, {})

      const {
        data: { results, count, next },
      } = response as AxiosResponse<PeopleResult>

      yield put(getPeopleSuccess(results, count, !!next, String(searchTerm)))
    }
  } catch (error: any) {
    yield put(getPeopleFailure(error))
  }
}

function* getFilteredPeopleRequestSaga(action: Action): Generator { 
  try {
    const { payload } = action as any
    const searchTerm = payload.searchTerm
    const page = payload.page ?? 1
    const path = `people/?search=${searchTerm}&page=${page}`
    const has_next = yield select((state) => state.people.has_next)

    if (has_next) {
      const response: AxiosResponse<PeopleResult> | unknown = yield call(api, 'GET', path, {})

      const {
        data: { results, count, next },
      } = response as AxiosResponse<PeopleResult>

      yield put(getFilteredPeopleSuccess(results, count, !!next, searchTerm, page))
    }
  } catch (error: any) {
    yield put(getFilteredPeopleFailure(error))
  }
}

function* getPersonRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const path = `people/${payload.id}/`

    const response: AxiosResponse<People> | unknown = yield call(api, 'GET', path, {})

    const { data } = response as AxiosResponse<People>

    yield put(getPersonSuccess(data))
    yield put(setContentDrawer(data))
    yield put(setDrawerTrue())
  } catch (error: any) {
    yield put(getPersonFailure(error))
  }
}

export default function* peopleSagas() {
  yield all([takeEvery(GET_ALL_PEOPLE_REQUEST, getPeopleRequestSaga), takeLatest(GET_FILTERED_PEOPLE_REQUEST, getFilteredPeopleRequestSaga), takeLatest(GET_PERSON_REQUEST, getPersonRequestSaga)])
}
