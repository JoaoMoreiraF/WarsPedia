import React, { useEffect, useState } from "react";
import { alpha, InputBase } from '@mui/material'
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import { EmojiPeople } from "@mui/icons-material";
import { LocalMovies } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filmActionsFunctions } from '../../store/modules/film/actions'
import { peopleActionsFunctions } from '../../store/modules/people/actions'
import logo from "../../assets/logo.svg"
import reducedLogo from "../../assets/WP.svg"
import "./styles.scss";

const { getFilteredFilmsRequest } = filmActionsFunctions
const { getFilteredPeopleRequest, resetPeopleRequest, resetFilterRequest } = peopleActionsFunctions

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

type DimentionsType = {
  height: number
  width: number
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  "& .MuiToolbar-root": {
    width:  "100%",
    justifyContent: "space-between",
  },
  backgroundColor: "#F4F7F5",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  boxShadow: "0px 1px 12px 3px #d3d3d3b8",
  ...(!open && {
    width: `calc(100% - 64px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": {
    backgroundColor: "#002F4D"
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginRight: theme.spacing(2),
  marginLeft: "auto",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#002F4D"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#002F4D',
  '& .MuiInputBase-input': {
    border: "1px solid #002F4D",
    borderRadius: "0.5rem",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Sidebar() {
  const theme = useTheme()
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState<string>("")
  const [dimensions, setDimensions] = useState<DimentionsType>({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} id="app-bar">
        <Toolbar>
          {dimensions.width > 600 ? 
            <img src={logo} alt="WarsPedia logo" className="logo"/> : null
          }
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=> {
                if(location.pathname === '/peliculas') {
                  dispatch(getFilteredFilmsRequest(event.target.value))
                }

                if(location.pathname === '/personajes') {
                  dispatch(resetPeopleRequest())
                  if(event.target.value === '') {
                    dispatch(resetFilterRequest()) 
                    return
                  } 
                  dispatch(getFilteredPeopleRequest(event.target.value))
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <IconButton onClick={handleDrawerClose}
              sx={{
                color: "#FFC857"
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <>
                  {dimensions.width < 600 ? 
                    <img src={reducedLogo} alt="Logo reducida" /> :
                    null
                  }
                  
                  <ChevronLeftIcon />
                </>
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: "#FFC857"
              }}
            >
              {dimensions.width < 600 ? 
                <img src={reducedLogo} alt="Logo reducida" />
                :
                <MenuIcon />
              }
              
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {["Personajes", "Peliculas"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                setSelectedTab(text)
                history.push(`/${text.toLowerCase()}`)
              }}
              selected={selectedTab === text ? true : false}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFC857"
                }}
              >
                {text === "Personajes" ? <EmojiPeople /> : <LocalMovies />}
              </ListItemIcon>
              <ListItemText className="mustard-color" primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  )
}
