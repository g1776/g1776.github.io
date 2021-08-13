import { PieChart } from 'react-minimal-pie-chart';
import {
    Grid,
    Typography,
    FormControl,
    Container,
    Slider
} from '@material-ui/core';


const TeacherPie = (props) => {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                <Typography id="discrete-slider" gutterBottom>
                    How cool is this?
                </Typography>
                <Slider
                    defaultValue={10}
                
                    aria-labelledby="awesome-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                />
                </Grid>
                <Grid item xs={6}>
                <PieChart
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                />;
                </Grid>
            </Grid>
        </Container>
    )
}

export default TeacherPie