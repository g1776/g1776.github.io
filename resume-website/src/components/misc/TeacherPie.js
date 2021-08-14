import { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {
    Grid,
    Typography,
    FormControl,
    Container,
    Box,
    Select,
    MenuItem
} from '@material-ui/core';

const Header = (props) => <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '30px', marginTop: '20px'}}>{props.children}</Typography></Box>

const Question = (props) => {
    const [answer, setAnswer] = useState(false)
    return (
        <>
        <Typography variant="h4">{props.children}</Typography>
        <FormControl style={{width: "50%"}}>
            
            <Select
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            >
            {
                props.options ?
                props.options.map((option, i) => <MenuItem key={i} value={option}>{option}</MenuItem>)
                :
                <>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
                </>
            }
            </Select>
        </FormControl>
        </>
    )
}


const TeacherPie = (props) => {

    const pie = [] // {title, value, color}


    return (
            <Grid container spacing={10} >
                <Grid item xs={6} style={{backgroundColor: "white"}}>
                    <Container>
                        <Header>Build your pie chart</Header>
                        <Question>Who am I?</Question>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                <PieChart
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                    style={{padding: '100px'}}
                />;
                </Grid>
            </Grid>
    )
}

export default TeacherPie