import produce from 'immer';
import { Reducer } from 'redux';

import type { PeopleState } from './types';
import { PeopleActions } from './types';

const {
  GET_ALL_PEOPLE_FAILURE,
  GET_ALL_PEOPLE_REQUEST,
  GET_ALL_PEOPLE_SUCCESS,
  GET_FILTERED_PEOPLE_REQUEST,
  GET_FILTERED_PEOPLE_SUCCESS,
  GET_FILTERED_PEOPLE_FAILURE,
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
  RESET_PEOPLE_REQUEST,
  SET_SEARCH_TERM,
  RESET_FILTER_REQUEST,
} = PeopleActions

const initialState: PeopleState = {
  people: [],
  person: {
    name: '',
    height: 0,
    mass: 0,
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: ''
  },
  has_next: true,
  count: 0,
  searchTerm: '',
  page: 1,
  hasResetedFilter: false,
  disableObserver: false,
  lastAction: ''
}

export const peopleReducer: Reducer<PeopleState> = (
  state = initialState,
  action
) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_ALL_PEOPLE_REQUEST: {
        draft.lastAction = action.type
        break
      }
      

      case GET_ALL_PEOPLE_SUCCESS: {
        const { people, has_next, count, searchTerm } = action.payload

        draft.people = [...draft.people, ...people]
        draft.has_next = has_next
        draft.count = count
        draft.searchTerm = searchTerm
        draft.disableObserver = false

        break
      }

      case GET_ALL_PEOPLE_FAILURE: {
        draft.people = []

        break
      }

      case GET_FILTERED_PEOPLE_REQUEST: {
        draft.lastAction = action.type

        break
      }
      

      case GET_FILTERED_PEOPLE_SUCCESS: {
        const { people, has_next, count, searchTerm, page } = action.payload

        draft.people = people
        draft.has_next = has_next
        draft.count = count
        draft.searchTerm = searchTerm
        draft.page = page
        draft.hasResetedFilter = false
        draft.disableObserver = false

        break
      }

      case GET_FILTERED_PEOPLE_FAILURE: {
        draft.people = []

        break
      }

      case GET_PERSON_REQUEST: {

        break
      }

      case GET_PERSON_SUCCESS: {
        const { person } = action.payload
        
        draft.person = person

        break
      }

      case GET_PERSON_FAILURE: {
        draft.person = {
          name: '',
          height: 0,
          mass: 0,
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',
          homeworld: '',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '',
          edited: '',
          url: ''
        }

        break
      }

      case RESET_PEOPLE_REQUEST: {
        draft.people = []
        draft.has_next = true
        draft.disableObserver = true

        break
      }
      
      case SET_SEARCH_TERM: {
        const { searchTerm } = action.payload

        draft.searchTerm = searchTerm
        break
      }

      case RESET_FILTER_REQUEST: {
        draft.page = 1
        draft.searchTerm = ''
        draft.hasResetedFilter = true

        break
      }

      default: {
        return draft
      }
    }
  })
}