import produce from 'immer';
import { Reducer } from 'redux';

import { DrawerActions, DrawerState } from './types';

const { SET_OPEN_DRAWER_FALSE, SET_OPEN_DRAWER_TRUE, SET_CONTENT, RESET_DRAWER } = DrawerActions

const initialState: DrawerState = {
  open: false,
  content: {}
}

export const drawerReducer: Reducer<DrawerState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_OPEN_DRAWER_TRUE: {
        draft.open = true

        break
      }
      case SET_OPEN_DRAWER_FALSE: {
        draft.open = false

        break
      }

      case SET_CONTENT: {
        draft.content = action.payload

        break
      }

      case RESET_DRAWER: {
        draft.content = {}
        draft.open = false

        break
      }
    }
  })
}
