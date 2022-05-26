import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ExpandLess } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { sanitizeContent } from '../../helpers/sanitizeContent';
import { filmsOptions, charactersOptions } from '../../helpers/intl'
import { filmActionsFunctions } from "../../store/modules/film/actions";
import { drawerActionsFunctions } from '../../store/modules/drawer/actions'

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

const { getCharactersFilmsRequest, getFilmRequest } = filmActionsFunctions
const { resetDrawer } = drawerActionsFunctions

type formatedContent = {
  properties: Object
  films?: Object[]
}

type DrawerContentProps = {
  data: any
}

export default function DrawerContent({ data }: DrawerContentProps) {
  const dispatch = useDispatch()
  const { charactersFilms }: any = useSelector<any>((state: any) => state.film)
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<formatedContent>({
    properties: {},
    films: [{}],
  })

  const handleClick = () => {
    setOpen(!open)
  }

  const handleGetSelectedFilm = (url: any) =>{
    const id = url.match(/\d+/)[0]
    dispatch(resetDrawer())
    dispatch(getFilmRequest(id))
  }

  useEffect(() => {
    if(data?.name) {
      dispatch(getCharactersFilmsRequest(data.films))
    }
    const sanitizedContent = sanitizeContent(data)
    setContent(sanitizedContent)
  }, [])

  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      id="drawer-content-component"
    >
      {Object.entries(content.properties).map((item, index) => (
        <ListItemText
          key={index}
          primary={
            <>
              {item[0] === "name" || item[0] === "title" ? (
                <b>{item[1]}</b>
              ) : (
                <>
                  <b>{Object.keys(content.properties).includes("name") ? 
                    (charactersOptions.ES.find((translatedItem) => 
                      translatedItem.label === item[0]
                    )?.value)
                    :
                    (filmsOptions.ES.find((translatedItem) => 
                      translatedItem.label === item[0]
                    )?.value)
                  }:</b> {item[1]}
                </>
              )}
            </>
          }
          className={
            item[0] === "name" || item[0] === "title"
              ? "content-header"
              : undefined
          }

          sx={{
            padding: "4px 15px"
          }}
        />
      ))}

      {content?.films?.length && (
        <ListItemButton onClick={handleClick}>
          <ListItemText disableTypography primary="Películas" sx={{fontWeight: 'bold'}} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {charactersFilms &&
            charactersFilms.map((item: any, index: number) => (
              <ListItemButton sx={{ pl: 4 }} key={index}>
                <Link onClick={() => {handleGetSelectedFilm(item.url)}} to={`/peliculas`} className="films-link">
                  {item.title}
                </Link>
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </List>
  )
}
