export enum DrawerActions {
  SET_OPEN_DRAWER_TRUE = 'SET_OPEN_DRAWER_TRUE',
  SET_OPEN_DRAWER_FALSE = 'SET_OPEN_DRAWER_FALSE',
  SET_CONTENT = 'SET_CONTENT',
  RESET_DRAWER = 'RESET_DRAWER'
}

export type DrawerState = {
  open: boolean
  content: any
}
