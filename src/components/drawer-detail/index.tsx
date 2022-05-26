import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { CloseOutlined } from '@mui/icons-material';
import { drawerActionsFunctions } from '../../store/modules/drawer/actions';
import DrawerContent from '../drawer-content';

import './styles.scss';

const {  setDrawerFalse } = drawerActionsFunctions

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function DrawerDetail() {
  const dispatch = useDispatch()
  const { open, content }: any = useSelector<any>((state: any) => state.drawer)
  const [openState, setOpenState] = useState(false)
  const [contentState, setContentState] = useState<any>({})

  const setDrawerStateFalse = () => {
    dispatch(setDrawerFalse())
  }

  useEffect(() => {
    setOpenState(open)
    setContentState(content)
  }, [open, content])

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }
  }

  return (
    <div className="dark-blue-background">
      <SwipeableDrawer 
        anchor="right" 
        open={openState} 
        onClose={toggleDrawer('right', false)} 
        onOpen={toggleDrawer('right', true)} 
        swipeAreaWidth={openState ? 800 : 0}
        id="swipeable-drawer"
      >
        <CloseOutlined onClick={setDrawerStateFalse} className="img-close" />
        <div id="drawer-detail-component">
          <DrawerContent data={contentState} />
        </div>
      </SwipeableDrawer>
    </div>
  )
}
