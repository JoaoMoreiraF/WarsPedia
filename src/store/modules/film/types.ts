export enum FilmsActions {
  GET_ALL_FILMS_REQUEST = 'GET_ALL_FILMS_REQUEST',
  GET_ALL_FILMS_SUCCESS = 'GET_ALL_FILMS_SUCCESS',
  GET_ALL_FILMS_FAILURE = 'GET_ALL_FILMS_FAILURE',
	GET_FILTERED_FILMS_REQUEST = 'GET_FILTERED_FILMS_REQUEST',
  GET_FILTERED_FILMS_SUCCESS = 'GET_FILTERED_FILMS_SUCCESS',
  GET_FILTERED_FILMS_FAILURE = 'GET_FILTERED_FILMS_FAILURE',
	GET_FILM_REQUEST = 'GET_FILM_REQUEST',
	GET_FILM_SUCCESS = 'GET_FILM_SUCCESS',
	GET_FILM_FAILURE = 'GET_FILM_FAILURE',
	GET_CHARACTERS_FILM_REQUEST = 'GET_CHARACTERS_FILM_REQUEST',
	GET_CHARACTERS_FILM_SUCCESS = 'GET_CHARACTERS_FILM_SUCCESS',
	GET_CHARACTERS_FILM_FAILURE = 'GET_CHARACTERS_FILM_FAILURE',
}

export type FilmsResult = {
  count: number
	next: string
	previous: string
  results: Film[]
}

export type Film = {
  title: string
	episode_id: Number
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	characters: Array<string>[]
	planets: Array<string>[]
	starships: Array<string>[]
	vehicles: Array<string>[]
	species: Array<string>[]
	created: string
	edited: string
	url: string
}

export type FilmState = {
  films: Film[]
	film: Film
  has_next: boolean
  count: number
	charactersFilms: Film[]
}