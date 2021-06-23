import PDF from 'react-pdf-js-infinite';
import {
    Paper
} from '@material-ui/core'
import theme from '../theme';

const local = `http://localhost:3000/resume.pdf`

function Resume() {
    return (
    <div style={{backgroundColor: theme.palette.common.black, textAlign: "center", height: "100%"}}>
        <Paper style={{margin: "10%", padding: 10, textAlign: "center"}}>
            <PDF file={local} scale={1.5}/>
        </Paper>
    </div>
    );
}

export default Resume;
