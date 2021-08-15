import React, { useState, useRef, useEffect, useCallback } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
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

const Header = (props) => <Box style={{textAlign: "center"}}><Typography variant="h3" style={{fontWeight: 1000, marginBottom: '100px'}}>{props.children}</Typography></Box>


const TeacherPie = (props) => {

    const [pie, setPie] = useState([])

    useEffect(() => {
        console.log("PIE:")
        console.log(pie)
    }, [pie])


    const Question = (props) => {
        const [answer, setAnswer] = useState()

        const handleChange = (newAnswer) => {
            setAnswer(newAnswer)
        }

        const handleClick = useCallback(() => {
            console.log(answer)
            if (answer.question === undefined){
                console.log("Now time to display your pie...");
            if (answer.slices !== undefined) {
                const newPie = answer.slices.map(slice => ({value: slice.value, label: slice.label}))
                setPie([...pie, ...newPie]);
            }
            } else {
                props.onClick(answer.question);
            }
        }, [answer])
        

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
                    variant="outlined" 
                    style={{backgroundColor: "steelblue"}} 
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



    const [currentQ, setCurrentQ] = useState(<Question
        onClick={q => setCurrentQ(q)}
        options={[
            <MenuItem value={{value: "Non-teaching Professional", question: undefined}}>Non-teaching Professional</MenuItem>,
            <MenuItem value={{value: "Classroom Teacher", question: QClassroomTeacherData}}>Classroom Teacher</MenuItem>,
            <MenuItem value={{value: "Principal", question: QPrincipalData}}>Principal</MenuItem>
        ]}
        >What is your role?
    </Question>)


    return (
        <Container style={{backgroundColor:"white", height: "100%", paddingTop: '30px', textAlign: "center"}}>
            <Header>Build your pie chart</Header>
            {currentQ}
        </Container>


    )
}

export default TeacherPie



{/* <Grid item xs={6}>
<PieChart
     data={[
         { title: 'One', value: 10, color: '#E38627' },
         { title: 'Two', value: 15, color: '#C13C37' },
         { title: 'Three', value: 20, color: '#6A2135' },
     ]}
     style={{padding: '100px'}}
 />;
 </Grid>  */}