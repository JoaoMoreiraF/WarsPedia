import type { Action } from '../../types';
import { DrawerActions } from './types';

const { SET_OPEN_DRAWER_FALSE, SET_OPEN_DRAWER_TRUE, SET_CONTENT, RESET_DRAWER } = DrawerActions

function setDrawerTrue(): Action {
  return {
    type: SET_OPEN_DRAWER_TRUE
  }
}

function setDrawerFalse(): Action {
  return {
    type: SET_OPEN_DRAWER_FALSE
  }
}

function setContentDrawer(content: any): Action {
  return {
    type: SET_CONTENT,
    payload: content
  }
}

function resetDrawer(): Action {
  return {
    type: RESET_DRAWER,
  }
}

export const drawerActionsFunctions = {
  setDrawerTrue,
  setDrawerFalse,
  setContentDrawer,
  resetDrawer
}
