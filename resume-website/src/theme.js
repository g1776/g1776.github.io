import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
palette: {
    common: {
        black: "rgb(35,31,32)",
        white: "whitesmoke"
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
    default: "whitesmoke",
    },
},
typography: {
    fontFamily: 'Poppins, sans-serif'
},
});

export default theme;