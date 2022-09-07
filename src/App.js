import * as React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { MyButtonTheme } from './components/MyButtonTheme'
import './App.css'

function App() {
// set state for the button props
  const [deletAble, setDeleteAble] = React.useState(false)
  const [sendable, setSendable] = React.useState(false)
  const [likeable, setLikeable] = React.useState(false)

// event handlers for each button
  const onDelete = () => {
    setDeleteAble(true)
    setTimeout(() => {
      setDeleteAble(false)
    }, 5000)
  }
  const onSend = () => {
    setSendable(true)
    setTimeout(() => {
      setSendable(false)
    }, 5000)
  }
  const onLike = () => {
    setLikeable(true)
    setTimeout(() => {
      setLikeable(false)
      }, 5000)
  }
  return (
    <Stack sx={{ padding: '2rem' }} direction='row' spacing={2}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={MyButtonTheme}>
          <Button
            variant='bold'
            size='large'
            sx={{ mt: 2, ml: 2 }}
            onClick={onDelete}
            disabled={deletAble}
            aria-pressed={deletAble}
            startIcon={<DeleteIcon />}
          >
            {deletAble === true ? (
              <CircularProgress style={{ width: '20px', height: '20px' }} />
            ) : (
              'Delete'
            )}
          </Button>
          <Button
            variant='bold'
            size='large'
            sx={{ mt: 2, ml: 2 }}
            onClick={onSend}
            disabled={sendable}
            aria-pressed={sendable}
            endIcon={<SendIcon />}
          >
            {sendable === true ? (
              <CircularProgress style={{ width: '20px', height: '20px' }} />
            ) : (
              'Send'
            )}
          </Button>
          <Button
            aria-pressed={likeable}
            variant='bold'
            size='large'
            sx={{ mt: 2, ml: 2 }}
            // href='/#'
            // classes
            // component="div"
            // fullWidth={true}
            disabled={likeable}
            onClick={onLike}
            startIcon={<ThumbUpOffAltIcon />}
          >
            {likeable === true ? (
              <CircularProgress style={{ width: '20px', height: '20px' }} />
            ) : (
              'Like'
            )}
          </Button>
        </ThemeProvider>
      </StyledEngineProvider>
    </Stack>
  )
}

export default App;
