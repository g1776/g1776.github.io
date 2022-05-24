import { useEffect } from 'react'
import { useParams } from "react-router"
import TeacherPie from "./TeacherPie";
import { useNav } from '../nav/NavProvider'


const MiscSwitch = (props) => {
    const { page } = useParams();
    const { closeNav } = useNav();
    useEffect(() => {
        closeNav()
    },[])

    switch (page) {
        case "teacher-pie":
            return <TeacherPie/>
    
        default:
            return <div>No webpage here!</div>
    }

}

export default MiscSwitch;