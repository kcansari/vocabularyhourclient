import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import React from 'react'

function TableComponent({ user }) {
  console.log(Object.entries(user.Words))
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Meaning</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(user.Words).map(([name, meaning], i) => (
            <TableRow
              key={i}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell component='th' scope='row'>
                {i + 1}
              </TableCell>
              <TableCell component='th' scope='row'>
                {name}
              </TableCell>
              <TableCell align='right'>{meaning}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
