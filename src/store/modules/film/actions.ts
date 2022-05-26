import type { Action } from '../../types';

import type { Film } from './types';
import { FilmsActions } from './types';
const {
  GET_ALL_FILMS_FAILURE,
  GET_ALL_FILMS_SUCCESS,
  GET_ALL_FILMS_REQUEST,
  GET_FILTERED_FILMS_REQUEST,
  GET_FILTERED_FILMS_SUCCESS,
  GET_FILTERED_FILMS_FAILURE,
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_FAILURE,
  GET_CHARACTERS_FILM_REQUEST,
	GET_CHARACTERS_FILM_SUCCESS,
	GET_CHARACTERS_FILM_FAILURE,
} = FilmsActions

function getFilmsRequest(page?: number): Action {
  return {
    type: GET_ALL_FILMS_REQUEST,
    payload: {
      page
    }
  }
}

function getFilmsSuccess(film: Film[], count: number, has_next: boolean): Action {
  return {
    type: GET_ALL_FILMS_SUCCESS,
    payload: {
      film,
      count,
      has_next
    }
  }
}

function getFilmsFailure(error: Error): Action {
  return {
    type: GET_ALL_FILMS_FAILURE,
    payload: {
      error
    }
  }
}

function getFilteredFilmsRequest(searchTerm: string, page?: number): Action {
  return {
    type: GET_FILTERED_FILMS_REQUEST,
    payload: {
      page,
      searchTerm
    }
  }
}

function getFilteredFilmsSuccess(films: Film[], count: number, has_next: boolean): Action {
  return {
    type: GET_FILTERED_FILMS_SUCCESS,
    payload: {
      films,
      count,
      has_next
    }
  }
}

function getFilteredFilmsFailure(error: Error): Action {
  return {
    type: GET_FILTERED_FILMS_FAILURE,
    payload: {
      error
    }
  }
}

function getFilmRequest(id: string): Action {
  return {
    type: GET_FILM_REQUEST,
    payload: {
      id
    }
  }
}

function getFilmSuccess(film: Film): Action {
  return {
    type: GET_FILM_SUCCESS,
    payload: {
      film
    }
  }
}

function getFilmFailure(error: Error): Action {
  return {
    type: GET_FILM_FAILURE,
    payload: {
      error
    }
  }
}

function getCharactersFilmsRequest(filmsUrls: string[]): Action {
  return {
    type: GET_CHARACTERS_FILM_REQUEST,
    payload: {
      filmsUrls
    }
  }
}

function getCharactersFilmsSuccess(charactersFilms: Film[]): Action {
  return {
    type: GET_CHARACTERS_FILM_SUCCESS,
    payload: {
      charactersFilms
    }
  }
}

function getCharactersFilmsFailure(error: Error): Action {
  return {
    type: GET_CHARACTERS_FILM_FAILURE,
    payload: {
      error
    }
  }
}

export const filmActionsFunctions = {
  getFilmsRequest,
  getFilmsSuccess,
  getFilmsFailure,
  getFilteredFilmsRequest,
  getFilteredFilmsSuccess,
  getFilteredFilmsFailure,
  getFilmSuccess,
  getFilmRequest,
  getFilmFailure,
  getCharactersFilmsRequest,
  getCharactersFilmsSuccess,
  getCharactersFilmsFailure,
}
