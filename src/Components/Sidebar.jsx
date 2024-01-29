import { useContext } from 'react'
import TitleCard from "./TitleCard"
import TitleCardNav from "./TitleCardNav"
import '../Styles/Sidebar.css'
import SocialIcons from "./SocialIcons"
import { ScreenWidthContext } from '../App'

const Sidebar = ({aboutRef, projectsRef, contactRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    return (
        <div id="sidebar">
            <TitleCard />
            <SocialIcons />
            {screenWidth > 1024 && <TitleCardNav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />}
        </div>
     );
}
 
export default Sidebar;