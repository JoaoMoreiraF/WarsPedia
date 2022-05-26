import type { Action } from '../../types';
import { LoadingActions } from './types';

const { SET_LOADING_TRUE, SET_LOADING_FALSE} = LoadingActions

function setLoadingTrue(): Action {
  return {
    type: SET_LOADING_TRUE,
  }
}

function setLoadingFalse(): Action {
  return {
    type: SET_LOADING_FALSE,
  }
}

export const loadingActionsFunctions = {
  setLoadingTrue,
  setLoadingFalse,
}