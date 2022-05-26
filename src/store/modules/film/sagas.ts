import { AxiosResponse } from 'axios';
import { Film, FilmsActions } from './types';
import { filmActionsFunctions } from './actions';
import { drawerActionsFunctions } from '../drawer/actions';
import { Action } from '../../types';
import { api } from '../../../services/api';

import type { FilmsResult } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

const { GET_ALL_FILMS_REQUEST, GET_FILTERED_FILMS_REQUEST, GET_FILM_REQUEST, GET_CHARACTERS_FILM_REQUEST } = FilmsActions

const { getFilmsSuccess, getFilmsFailure, getFilteredFilmsSuccess, getFilteredFilmsFailure, getFilmSuccess, getFilmFailure, getCharactersFilmsSuccess, getCharactersFilmsFailure } = filmActionsFunctions

const { setContentDrawer, setDrawerTrue } = drawerActionsFunctions

function* getFilmsRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const page = payload.page
    const path = `films/?page=${page}`

    const response: AxiosResponse<FilmsResult> | unknown = yield call(api, 'GET', path, {})
      const {
        data: { results, count, next },
      } = response as AxiosResponse<FilmsResult>

      yield put(getFilmsSuccess(results, count, !!next))
  } catch (error: any) {
    yield put(getFilmsFailure(error))
  }
}

function* getFilteredFilmsRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const page = payload.page ?? 1
    const path = `films/?search=${payload.searchTerm}&page=${page}`

    const response: AxiosResponse<FilmsResult> | unknown = yield call(api, 'GET', path, {})

      const {
        data: { results, count, next },
      } = response as AxiosResponse<FilmsResult>

      yield put(getFilteredFilmsSuccess(results, count, !!next))
  } catch (error: any) {
    yield put(getFilteredFilmsFailure(error))
  }
}

function* getFilmRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const path = `films/${payload.id}/`

    const response: AxiosResponse<Film> | unknown = yield call(api, 'GET', path, {})

    const { data } = response as AxiosResponse<Film>

    yield put(getFilmSuccess(data))
    yield put(setContentDrawer(data))
    yield put(setDrawerTrue())
  } catch (error: any) {
    yield put(getFilmFailure(error))
  }
}

function* getCharactersFilmsRequestSaga(action: Action): Generator {
  try {
    const { payload } = action as any
    const filmsUrls = payload.filmsUrls
    let charactersFilms = [] as any

    const response: AxiosResponse<Film[]> | unknown | any =  yield all(filmsUrls.map((url: any) => {
      const id = url.match(/\d+/)[0];
      const path = `films/${id}/`
      return call(api, 'GET', path, {})
    }))

    response.map((response: any) => 
      charactersFilms.push(response.data)
    )
      
    yield put(getCharactersFilmsSuccess(charactersFilms))
  } catch (error: any) {
    yield put(getCharactersFilmsFailure(error))
  }
}

export default function* filmSagas() {
  yield all(
    [
      takeLatest(GET_ALL_FILMS_REQUEST, getFilmsRequestSaga), 
      takeLatest(GET_FILTERED_FILMS_REQUEST, getFilteredFilmsRequestSaga), 
      takeLatest(GET_FILM_REQUEST, getFilmRequestSaga),
      takeLatest(GET_CHARACTERS_FILM_REQUEST, getCharactersFilmsRequestSaga)
    ])
}
