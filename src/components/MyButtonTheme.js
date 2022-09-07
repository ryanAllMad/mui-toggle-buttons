import { createTheme } from '@mui/material'

const MyButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'bold' },
          style: {
            fontWeight: 'bold',
            border: '4px solid black',
            color: 'black',
            boxShadow: '0.125em 0.125em 0 #fff, 0.25em 0.25em #000',
          },
        },
      ],
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true
      },
    },
  },
})
export { MyButtonTheme }