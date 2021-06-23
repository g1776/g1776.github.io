import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
palette: {
    common: {
        black: "rgb(35,31,32)"
    },
    primary: {
    main: '#556cd6',
    },
    secondary: {
    main: '#19857b',
    },
    error: {
    main: red.A400,
    },
    background: {
    default: '#fff',
    },
},
typography: {
    fontFamily: 'Poppins, sans-serif'
},
});

export default theme;