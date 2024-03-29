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
            size='large'
            sx={{ ml: 2 }}
            onClick={onDelete}
            disabled={deletAble}
            aria-pressed={deletAble}
            startIcon={<DeleteIcon />}
          >
            {deletAble === true ? (
              <>
                <CircularProgress style={{ width: '20px', height: '20px' }} />
                <div className='visually-hidden'>
                  Deleting
                </div>
              </>
            ) : (
              'Delete'
            )}
          </Button>
          <Button
            size='large'
            sx={{ ml: 2 }}
            onClick={onSend}
            disabled={sendable}
            aria-pressed={sendable}
            endIcon={<SendIcon />}
          >
            {sendable === true ? (
              <>
                <CircularProgress style={{ width: '20px', height: '20px' }} />
                <div className='visually-hidden'>
                  Sending
                </div>
              </>
            ) : (
              'Send'
            )}
          </Button>
          <Button
            aria-pressed={likeable}
            size='large'
            sx={{ ml: 2 }}
            disabled={likeable}
            onClick={onLike}
            startIcon={<ThumbUpOffAltIcon />}
          >
            {likeable === true ? (
              <>
                <CircularProgress style={{ width: '20px', height: '20px' }} />
                <div className='visually-hidden'>Liking</div>
              </>
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
