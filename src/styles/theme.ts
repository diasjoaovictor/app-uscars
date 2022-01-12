import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    blue: {
      "800": "#1C2043"
    },
    gray:{
      "200": "#E5E4E2",
      "300": "#D3D3D3",
      "500": "#C4C4C4"
    },
    white: {
      "200": "#E5E5E5"
    },
    black: {
      "900" : "@262626"
    }
  },
  fonts: {
     heading: 'Bree Serif',
     body: 'Bree Serif',
     login: 'Ubuntu'
  },
  global: {
    body: {
      color: "#fff"
    }
  }
})
