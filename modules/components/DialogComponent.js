import {
  Alert,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import WordContext from '@/context/WordContext'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'
import { Close, Save } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    buttonColor: {
      main: '#293462',
      contrastText: '#fff',
    },
  },
})

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#143F6B',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#143F6B',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#143F6B',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#143F6B',
    },
  },
  '& .MuiInputBase-input': {
    background: '#EEEEEE',
  },
})

function DialogComponent({
  openDialog,
  setOpenDialog,
  openAlert,
  setOpenAlert,
  dialogContent,
  name,
  setName,
  meaning,
  setMeaning,
  currentName,
}) {
  const { addNewWord, backDrop, status, editWord } = useContext(WordContext)

  const handleClose = () => {
    setOpenDialog(false)
    setName(null)
    setMeaning(null)
  }
  const handleSave = () => {
    if (dialogContent.content === 'add') {
      addNewWord(name, meaning)
    } else if (dialogContent.content === 'edit') {
      editWord(name, meaning, currentName)
    }
  }

  useEffect(() => {
    if (status !== false) {
      setName('')
      setMeaning('')
      setOpenAlert(true)
    }
  }, [status])

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={openDialog} onClose={handleClose} fullWidth='md'>
        <DialogTitle>
          {dialogContent.content === 'add' ? 'Add a New Word' : 'Edit the word'}
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do not forget practicing to learn the word
          </DialogContentText>
          <CustomTextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <CustomTextField
            autoFocus
            margin='dense'
            id='meaning'
            label='Meaning'
            type='text'
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            fullWidth
          />
          <Collapse in={openAlert} sx={{ mt: 2 }}>
            <Alert
              severity='info'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpenAlert(false)
                  }}
                >
                  <Close fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {status.data}
            </Alert>
          </Collapse>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            size='small'
            color='buttonColor'
            sx={{
              color: '#fff',
              px: 6,
              '&:hover': {
                backgroundColor: '#3c52b2',
                color: '#fff',
              },
            }}
            onClick={handleSave}
            loading={backDrop}
            loadingPosition='start'
            startIcon={<Save />}
            variant='contained'
          >
            <span>Save</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default DialogComponent
