import React, { useState, useRef } from 'react'
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
    OP: "Observations and practice",
    BL: "Building-level score",
    TSD: "Teacher-specific data",
    "TSD (2 or 3 Measures)": "Teacher-specific data",
    "TSD (1 Measure)": "Teacher-specific data",
    LEA: "LEA Selected Measures",
    PG: "Performance Goals"

}

const Header = (props) => <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '100px'}}>{props.children}</Typography></Box>


const colors = {
    beige: "#f5f5dc",
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    khaki: "#f0e68c",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    pink: "#ffc0cb",
    purple: "#800080",
    violet: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
};

const randomColor = () => {
    var result;
    var count = 0;
    for (var prop in colors)
        if (Math.random() < 1/++count)
        result = prop;
    return { name: result, rgb: colors[result]};
    };

const TeacherPie = (props) => {

    const pie = useRef([])
    const answers = useRef([])
    const [done, setDone] = useState(false)


    const Question = (props) => {
        const [answer, setAnswer] = useState()

        const handleChange = (newAnswer) => {
            setAnswer(newAnswer)
        }

        const handleClick = () => {
            // update list of answers
            answers.current = [{question: props.children, answer: answer},...answers.current]

            if (answer.slices !== undefined) {
                const existingColors = pie.current.map(slice => slice.color)
                const newPie = answer.slices.map(slice => {
                    // get unique color for each slice
                    let color = randomColor();
                    while (existingColors.findIndex(c => c === color) !== -1) {
                        color = randomColor()
                    }
                    return {value: slice.value, label: slice.label, color: color}
                })

                pie.current = pie.current.concat(newPie);
            }
            if (answer.question === undefined){
                console.log("Now time to display your pie...");
                console.log(pie.current)
                setDone(true)
            } else {
                props.onClick(answer.question);
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
        Do you have IEP Goals?
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
        Do you have IEP Goals?
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
                </MenuItem>,
                <MenuItem value={{
                    value: "Teacher Without Building-level Data",
                    question: QTeacherOtherIEP,
                    slices: [
                        {value: 80, label: "OP"}
                    ]
                }}>
                    Teacher Without Building-level Data
                </MenuItem>
            ]}
        >
        What level of data do you have?
        </Question>


    const QPrincipalData = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Principal With Building-level data",
                    slices: [
                        {value: 70, label: "OP"},
                        {value: 20, label: "PG"},
                        {value: 10, label: "BL"}
                    ]
                }}>
                    Principal With Building-level data
                </MenuItem>,
                <MenuItem value={{
                    value: "Principal Without Building-level data",
                    slices: [
                        {value: 80, label: "OP"},
                        {value: 20, label: "PG"}
                    ]
                }}>
                    Principal Without Building-level data
                </MenuItem>,
            ]}
        >
            What level of data do you have?
        </Question>


    const QNonTeachingData = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{
                    value: "Non-teaching Professional With Building-level data",
                    slices: [
                        {value: 90, label: "OP"},
                        {value: 10, label: "BL"}
                    ]
                }}>
                    Non-teaching Professional With Building-level data
                </MenuItem>,
                <MenuItem value={{
                    value: "Non-teaching Professional Without Building-level data",
                    slices: [
                        {value: 100, label: "OP"},
                    ]
                }}>
                    Non-teaching Professional Without Building-level data
                </MenuItem>
            ]}
            >
            What level of data do you have?
            </Question>


    const QRole = <Question
            onClick={q => setCurrentQ(q)}
            options={[
                <MenuItem value={{value: "Non-teaching Professional", question: QNonTeachingData}}>Non-teaching Professional</MenuItem>,
                <MenuItem value={{value: "Classroom Teacher", question: QClassroomTeacherData}}>Classroom Teacher</MenuItem>,
                <MenuItem value={{value: "Principal", question: QPrincipalData}}>Principal</MenuItem>
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
                                                <div style={{backgroundColor: slice.color.rgb, width: '100%', height: '70%'}}></div>
                                            </Grid>
                                            <Grid item container xs={6} >
                                            <Typography><sup><b>{slice.label} ({legend[slice.label]})</b></sup></Typography>
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
                                answers.current.map(answer => {
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
                                pie.current.map(slice => ({ title: slice.label, value: slice.value, color: slice.color.rgb}))
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