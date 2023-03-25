import {
  AddCircleOutline,
  BorderColorOutlined,
  DeleteOutlineOutlined,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  TablePagination,
  TableFooter,
  Tooltip,
  Typography,
  Container,
} from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import DialogComponent from './DialogComponent'
import WordContext from '@/context/WordContext'

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  )
}

function TableComponent({ user }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState({ content: 'empty' })
  const [openAlert, setOpenAlert] = useState(false)
  const [name, setName] = useState('')
  const [meaning, setMeaning] = useState('')
  const [currentName, setCurrentName] = useState(null)

  const { deleteWord } = useContext(WordContext)

  const handleClickOpen = () => {
    setOpenDialog(true)
    setDialogContent({ content: 'add' })
    setName('')
    setMeaning('')
    setOpenAlert(false)
  }
  const handleClickEdit = (e) => {
    setOpenDialog(true)
    setCurrentName(e.currentTarget.name)
    setName(e.currentTarget.name)
    setMeaning(e.currentTarget.id)
    setDialogContent({
      content: 'edit',
    })
    setOpenAlert(false)
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - Object.entries(user.Words).length
        )
      : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleClickDelete = (e) => {
    e.preventDefault()
    deleteWord(e.currentTarget.id)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  // console.log(Object.entries(user.Words))

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label='custom pagination table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Number</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Meaning</TableCell>
              <TableCell align='center'>
                {' '}
                <Tooltip title={<Typography variant='caption'>Add</Typography>}>
                  <IconButton aria-label='add' onClick={handleClickOpen}>
                    <AddCircleOutline />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? Object.entries(user.Words).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : Object.entries(user.Words)
            ).map(([name, meaning], i) => (
              <TableRow key={i} sx={{}}>
                <TableCell
                  align='center'
                  component='th'
                  scope='row'
                  // style={{ width: 1 }}
                >
                  {i + 1}
                </TableCell>
                <TableCell align='center'>{name}</TableCell>
                <TableCell align='center'>{meaning}</TableCell>
                <TableCell align='center'>
                  <Tooltip
                    title={<Typography variant='caption'>Edit</Typography>}
                  >
                    <IconButton
                      aria-label='edit'
                      name={name}
                      id={meaning}
                      onClick={handleClickEdit}
                    >
                      <BorderColorOutlined />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    title={<Typography variant='caption'>Delete</Typography>}
                  >
                    <IconButton
                      aria-label='delete'
                      id={name}
                      onClick={handleClickDelete}
                    >
                      <DeleteOutlineOutlined />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 15, 25, { label: 'All', value: -1 }]}
                colSpan={4}
                count={Object.entries(user.Words).length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <DialogComponent
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        dialogContent={dialogContent}
        name={name}
        setName={setName}
        meaning={meaning}
        setMeaning={setMeaning}
        currentName={currentName}
      />
    </div>
  )
}

export default TableComponent
