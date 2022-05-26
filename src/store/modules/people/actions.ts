import type { Action } from '../../types';

import type {
  People
} from './types';
import { PeopleActions } from './types';
const {
  GET_ALL_PEOPLE_FAILURE,
  GET_ALL_PEOPLE_SUCCESS,
  GET_ALL_PEOPLE_REQUEST,
  GET_FILTERED_PEOPLE_FAILURE,
  GET_FILTERED_PEOPLE_SUCCESS,
  GET_FILTERED_PEOPLE_REQUEST,
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
  RESET_PEOPLE_REQUEST,
  RESET_FILTER_REQUEST,
  SET_SEARCH_TERM,
} = PeopleActions

function getPeopleRequest(page?: number, searchTerm?: string): Action {
  return {
    type: GET_ALL_PEOPLE_REQUEST,
    payload: {
      page,
      searchTerm,
    }
  }
} 

function getPeopleSuccess(people: People[], count: number, has_next: boolean, searchTerm: string): Action {
  return {
    type: GET_ALL_PEOPLE_SUCCESS,
    payload: {
      people,
      count,
      has_next,
      searchTerm,
    }
  }
}

function getPeopleFailure(error: Error): Action {
  return {
    type: GET_ALL_PEOPLE_FAILURE,
    payload: {
      error,
    }
  }
}

function getFilteredPeopleRequest(searchTerm: string, page?: number): Action {
  return {
    type: GET_FILTERED_PEOPLE_REQUEST,
    payload: {
      page,
      searchTerm,
    }
  }
} 

function getFilteredPeopleSuccess(people: People[], count: number, has_next: boolean, searchTerm: string, page: number): Action {
  return {
    type: GET_FILTERED_PEOPLE_SUCCESS,
    payload: {
      people,
      count,
      has_next,
      searchTerm,
      page
    }
  }
}

function getFilteredPeopleFailure(error: Error): Action {
  return {
    type: GET_FILTERED_PEOPLE_FAILURE,
    payload: {
      error,
    }
  }
}

function getPersonRequest(id: number): Action {
  return {
    type: GET_PERSON_REQUEST,
    payload: {
      id
    }
  }
} 

function getPersonSuccess(person: People): Action {
  return {
    type: GET_PERSON_SUCCESS,
    payload: {
      person
    }
  }
}

function getPersonFailure(error: Error): Action {
  return {
    type: GET_PERSON_FAILURE,
    payload: {
      error,
    }
  }
}

function resetPeopleRequest(): Action {
  return {
    type: RESET_PEOPLE_REQUEST,
  }
}

function resetFilterRequest(): Action {
  return {
    type: RESET_FILTER_REQUEST,
  }
}

function setSearchTerm(searchTerm: string): Action {
  return {
    type: SET_SEARCH_TERM,
    payload: {
      searchTerm,
    }
  }
}


export const peopleActionsFunctions = {
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleFailure,
  getFilteredPeopleRequest,
  getFilteredPeopleSuccess,
  getFilteredPeopleFailure,
  getPersonRequest,
  getPersonSuccess,
  getPersonFailure,
  resetPeopleRequest,
  setSearchTerm,
  resetFilterRequest
}