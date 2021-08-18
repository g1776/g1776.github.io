import React, { useState, useRef, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import {
    Grid,
    Typography,
    FormControl,
    Container,
    Box,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

const legend = {
    OP: {full: "Observations and practice", color: "#66cccc"},
    BL: {full: "Building-level score", color: "#ff6699"},
    TSD: {full: "Teacher-specific data", color: "#9900ff"},
    "TSD (2 or 3 Measures)": {full: "Teacher-specific data", color: "#da251c"},
    "TSD (1 Measure)": {full: "Teacher-specific data", color: "#012e67"}, 
    LEA: {full: "LEA Selected Measures", color: "#954f51"},
    PG: {full: "Performance Goals", color: "#ff7518"}

}

const Header = (props) => <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '100px'}}>{props.children}</Typography></Box>

const TeacherPie = (props) => {

    const pie = useRef([])
    const answers = useRef([])
    const [done, setDone] = useState(false)


    const Question = (props) => {
        const [answer, setAnswer] = useState()
        const [showError, setShowError] = useState(false)

        const handleChange = (newAnswer) => {
            if (newAnswer !== undefined) {
                setShowError(false)
            }
            setAnswer(newAnswer)
        }

        const handleClick = () => {
            console.log(answer)

            if (answer === undefined) {
                console.log("You must choose an answer!")
                setShowError(true)
            } else {
                // update list of answers
                answers.current = [{question: props.children, answer: answer},...answers.current]

                if (answer.slices !== undefined) {
                    // update pie
                    const newPie = answer.slices.map(slice => ({value: slice.value, label: slice.label, color: legend[slice.label].color}))
                    pie.current = pie.current.concat(newPie);
                }
                if (answer.question === undefined){
                    // No more questions to ask
                    console.log("Now time to display your pie...");
                    console.log(pie.current)
                    setDone(true)
                } else {
                    // next question
                    const oldAnswer = answer;
                    setAnswer(undefined) // fixes bug where answer is not undefined in next question
                    props.onClick(oldAnswer.question);
                }
            }
            
        }
        

        return (
            <>
            <Typography variant="h4" style={{marginBottom: '20px'}}>{props.children}</Typography>
            <FormControl style={{width: "50%"}}>
                <Select
                value={answer}
                onChange={e => handleChange(e.target.value)}
                >
                {props.options.map(o => o)}
                </Select>
                {showError && <Box style={{textAlign: "right"}}><Typography variant="body1" color="error"><i>Please select an option!</i></Typography></Box>}
            </FormControl>
            <Box style={{textAlign:"center", marginTop: '20px'}}>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                    onClick={handleClick}
                >
                    Next
                </Button>
            </Box>
            </>
        )
    }


    // Questions

    const QDataAvailableTeacherIEP = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Yes",
                    slices: [
                        {value: 10, label: "TSD (2 or 3 Measures)"},
                    ]
                }}>
                    Yes
                </MenuItem>,
                <MenuItem value={{
                    value: "No",
                    slices: [
                        {value: 10, label: "TSD (1 Measure)"},
                    ]
                }}>
                    No
                </MenuItem>
            ]}
        >
        Do you have n >= 11 students with similar IEP goals?
        </Question>


    const QTeacherOtherIEP = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Yes",
                    slices: [
                        {value: 10, label: "TSD"},
                        {value: 10, label: "LEA"},
                    ]
                }}>
                    Yes
                </MenuItem>,
                <MenuItem value={{
                    value: "No",
                    slices: [
                        {value: 20, label: "LEA"},
                    ]
                }}>
                    No
                </MenuItem>
            ]}
        >
        Do you have n >= 11 students with similar IEP goals?
        </Question>


    const QClassroomTeacherData = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Data-Available Teacher",
                    question: QDataAvailableTeacherIEP,
                    slices: [
                        {value: 10, label: "LEA"},
                        {value: 70, label: "OP"},
                        {value: 10, label: "BL"}
                    ]
                }}>
                    Data-Available Teacher
                </MenuItem>,
                <MenuItem value={{
                    value: "Non-Data-Available Teacher",
                    question: QTeacherOtherIEP,
                    slices: [
                        {value: 70, label: "OP"},
                        {value: 10, label: "BL"}
                    ]
                }}>
                    Non-Data-Available Teacher
                </MenuItem>
            ]}
        >
        What level of data do you have?
        </Question>


    const QRole = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Non-teaching Professional", 
                    slices: [
                        {value: 90, label: "OP"},
                        {value: 10, label: "BL"}
                            ]
                    }}>
                Non-teaching Professional
                </MenuItem>,
                <MenuItem value={{value: "Classroom Teacher", question: QClassroomTeacherData}}>Classroom Teacher</MenuItem>,
                <MenuItem value={{
                    value: "Principal", 
                    slices: [
                        {value: 70, label: "OP"},
                        {value: 20, label: "PG"},
                        {value: 10, label: "BL"}
                            ]
                    }}>
                        Principal
                </MenuItem>
            ]}
            >What is your role?
        </Question>


    const QTemp = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Yes",
                    slices: [
                        {value: 100, label: "OP"},
                    ]
                }}>
                    Yes
                </MenuItem>,
                <MenuItem value={{
                    value: "No",
                    question: QRole
                }}>
                    No
                </MenuItem>
            ]}
            >
            Are you a temporary employee?
        </Question>


    const [currentQ, setCurrentQ] = useState(QTemp)
    const [hovered, setHovered] = useState(null);

    return (
        <>
            {!done ?
            <>
                <div style={{backgroundColor:"white", height: "100%", paddingTop: '30px', textAlign: "center"}}>
                <Header>Build your evaluation pie chart</Header>
                {currentQ}
                </div>
            </>
            :
            <Box style={{backgroundColor: "white", height: "100%"}}>

                {/* Header */}
                <Box style={{textAlign: "center", backgroundColor: "white"}}>
                    <Typography variant="h3" style={{fontWeight: 1000, marginBottom: '10px'}}>Your Evaluation Pie Chart</Typography>
                    <Typography style={{marginBottom: '10px'}}>Need to change your answers?</Typography>
                    <Button onClick={() => window.location.reload(false)} variant="contained" color="primary"><b>Restart</b></Button>
                </Box>
                
                {/* Content */}
                <Grid container>
                    <Grid item xs={5} style={{backgroundColor: "white", float: "left", borderRight: "2px solid #333"}}>
                        <Container>            

                        {/* Legend */}
                        <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '30px'}}>Legend</Typography></Box>
                            {
                                pie.current.map(slice => {
                                    return (
                                        <>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <div style={{backgroundColor: slice.color, width: '100%', height: '70%'}}></div>
                                            </Grid>
                                            <Grid item container xs={6} >
                                            <Typography><sup><b>{slice.label} ({legend[slice.label].full})</b></sup></Typography>
                                            </Grid>
                                        </Grid>
                                        
                                        </>
                                    )
                                })
                            }
                            <hr />

                            {/* Answers */}
                            <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '30px'}}>Your Answers</Typography></Box>
                            {
                                answers.current.reverse().map(answer => {
                                return (
                                    <>
                                    <Typography variant="h5">{answer.question}</Typography>
                                    <Typography variant="body1" style={{marginBottom: '15px'}}>{answer.answer.value}</Typography>
                                    </>
                                )
                            })
                            }  
                        </Container>
                    </Grid>
                    <Grid item xs={7}>
                    <div style={{backgroundColor:"white", height: "80vh", textAlign: "center"}}>
                        <PieChart
                            data={
                                pie.current.map(slice => ({ title: slice.label, value: slice.value, color: slice.color}))
                                }
                            onMouseOver={(_, index) => {
                                setHovered(index);
                                }}
                                onMouseOut={() => {
                                setHovered(null);
                                }}
                            animate
                            animationDuration={1000}
                            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} % ${dataEntry.title}`}
                            labelStyle={{fontSize: '1px', fontFamily: 'sans-serif'}}
                            radius={12}
                            labelPosition={112}
                            center={[15,15]}
                            viewBoxSize={[30,30]}    
                        />
                        <ReactTooltip
                            getContent={() =>
                            hovered ? pie.current[hovered].label : null
                            }
                        />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            }
        </>
    )
}

export default TeacherPie