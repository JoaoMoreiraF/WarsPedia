import produce from 'immer';
import { Reducer } from 'redux';

import type { LoadingState } from './types';
import { LoadingActions } from './types';

const {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} = LoadingActions

const initialState: LoadingState = {
  isLoading: false,
}

export const loadingReducer: Reducer<LoadingState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_TRUE: {
        draft.isLoading = true
        break
      }

      case SET_LOADING_FALSE: {
        draft.isLoading = false
        break
      }
      
      default: {
        return draft
      }
    }
  })
}
