import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Film } from "../../store/modules/film/types";
import { People } from "../../store/modules/people/types";
import { filmActionsFunctions } from "../../store/modules/film/actions";
import { peopleActionsFunctions } from "../../store/modules/people/actions";
import { useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";
import "./styles.scss";

const { getFilmRequest } = filmActionsFunctions
const { getPersonRequest } = peopleActionsFunctions

type ContentListProps = {
  data?: Film[] | People[] | any
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d7d8d7",
    color: "#002F4D",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export default function ContentList({ data }: ContentListProps) {
  const dispatch = useDispatch()

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ 
          width: 1000,
          boxShadow: '0px 6px 12px 3px #d3d3d3b8'
        }}
        id="table-container"
      >
        <Table
          sx={{
            minWidth: 700,
          }}
          aria-label="customized table"
          className="table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>
                {data[0]?.name ? "Personajes" : "Películas"}
              </StyledTableCell>
              <StyledTableCell> Acciones </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: any, index: number) => (
              <TableRow key={index} className="table-row">
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {item.name ? item.name : item.title}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  <Tooltip title="Ver Detalles">
                    <IconButton
                      onClick={() => {
                        const id = item.url.match(/\d+/)[0]
                        item?.name
                          ? dispatch(getPersonRequest(id))
                          : dispatch(getFilmRequest(id))
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
