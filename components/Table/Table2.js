import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useTheme } from "@mui/styles";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

export default function MuiTable2({ rows, coloms }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const { palette } = useTheme();
  const { purple } = palette;

  const handleClick = () => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 550 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <TableHead>
            <TableRow>
              {coloms?.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{ borderBottom: `2px solid ${purple.main}` }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => {
              return (
                <TableRow hover onClick={handleClick} key={index}>
                  <TableCell sx={{ display: "flex"}}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox color="purple" />} />
                    </FormGroup>
                    <Box sx={{ minWidth: "25px", mr: 2 }}>
                      <Image
                        alt="table-img"
                        src={row.img}
                        width={100}
                        height={100}
                        quality={100}
                        objectFit="cover"
                        className="bar-img"
                      />
                    </Box>
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.views}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3,5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ borderTop: `2px solid ${purple.main}` }}
      />
    </Box>
  );
}
