export enum PeopleActions {
  GET_ALL_PEOPLE_REQUEST = 'GET_ALL_PEOPLE_REQUEST',
  GET_ALL_PEOPLE_SUCCESS = 'GET_ALL_PEOPLE_SUCCESS',
  GET_ALL_PEOPLE_FAILURE = 'GET_ALL_PEOPLE_FAILURE',
  GET_FILTERED_PEOPLE_REQUEST = 'GET_FILTERED_PEOPLE_REQUEST',
  GET_FILTERED_PEOPLE_SUCCESS = 'GET_FILTERED_PEOPLE_SUCCESS',
  GET_FILTERED_PEOPLE_FAILURE = 'GET_FILTERED_PEOPLE_FAILURE',
  GET_PERSON_REQUEST = 'GET_PERSON_REQUEST',
	GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS',
	GET_PERSON_FAILURE = 'GET_PERSON_FAILURE',
	RESET_PEOPLE_REQUEST = 'RESET_PEOPLE_REQUEST',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
  RESET_FILTER_REQUEST = 'RESET_FILTER_REQUEST'
}

export type PeopleResult = {
  count: number,
	next: string,
	previous: string,
  results: People[]
}

export type People = {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: Array<string>[],
  species: Array<any>[],
  vehicles: Array<string>[],
  starships: Array<string>[],
  created: string,
  edited: string,
  url: string
}

export type PeopleState = {
  people: People[]
  person: People
  has_next: boolean
  count: number
  searchTerm: string
  page: number
  hasResetedFilter: boolean
  disableObserver: boolean
  lastAction: string
}