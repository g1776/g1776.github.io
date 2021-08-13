import { useEffect } from 'react'
import { useParams } from "react-router"
import TeacherPie from "./TeacherPie";
import { useNav } from '../NavProvider'


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
            return <div>lol no webpage here</div>
    }

}

export default MiscSwitch;