import produce from 'immer';
import { Reducer } from 'redux';

import type { FilmState } from './types';
import { FilmsActions } from './types';

const {
  GET_ALL_FILMS_FAILURE,
  GET_ALL_FILMS_REQUEST,
  GET_ALL_FILMS_SUCCESS,
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

const initialState: FilmState = {
  films: [],
  film: {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: '',
    edited: '',
    url: ''
  },
  has_next: true,
  count: 0,
  charactersFilms: []
}

export const filmReducer: Reducer<FilmState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_FILMS_REQUEST: {
        break
      }

      case GET_ALL_FILMS_SUCCESS: {
        const { film, has_next, count } = action.payload

        draft.films = film
        draft.has_next = has_next
        draft.count = count

        break
      }

      case GET_ALL_FILMS_FAILURE: {
        draft.films = []

        break
      }

      case GET_FILTERED_FILMS_REQUEST: {
        break
      }

      case GET_FILTERED_FILMS_SUCCESS: {
        const { films, has_next, count } = action.payload

        draft.films = films
        draft.has_next = has_next
        draft.count = count

        break
      }

      case GET_FILTERED_FILMS_FAILURE: {
        draft.films = []

        break
      }

      case GET_FILM_REQUEST: {
        break
      }

      case GET_FILM_SUCCESS: {
        const { film } = action.payload

        draft.film = film

        break
      }

      case GET_FILM_FAILURE: {
        draft.film = {
          title: '',
          episode_id: 0,
          opening_crawl: '',
          director: '',
          producer: '',
          release_date: '',
          characters: [],
          planets: [],
          starships: [],
          vehicles: [],
          species: [],
          created: '',
          edited: '',
          url: ''
        }

        break
      }

      case GET_CHARACTERS_FILM_REQUEST: {
        break
      }

      case GET_CHARACTERS_FILM_SUCCESS: {
        const { charactersFilms } = action.payload

        draft.charactersFilms = charactersFilms
        
        break
      }

      case GET_CHARACTERS_FILM_FAILURE: {
        draft.charactersFilms = []
        
        break
      }

      default: {
        return draft
      }
    }
  })
}
