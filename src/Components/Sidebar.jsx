import { useContext } from 'react'
import TitleCard from "./TitleCard"
import TitleCardNav from "./TitleCardNav"
import '../Styles/Sidebar.css'
import SocialIcons from "./SocialIcons"
import { ScreenWidthContext } from '../App'

const Sidebar = ({aboutRef, blogRef, projectsRef, contactRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    return (
        <div id="sidebar">
            <TitleCard />
            {screenWidth <= 1024 && <ContactMeButton target={contactRef} />}
            <SocialIcons />
            {screenWidth > 1024 && <TitleCardNav aboutRef={aboutRef} blogRef={blogRef} projectsRef={projectsRef} contactRef={contactRef} />}
        </div>
     );
}
 
export default Sidebar;

const ContactMeButton = ({target}) => {

    const scrollToForm = () => {
        target.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <button id="contactMe_button" onClick={scrollToForm}>
            Contact me
        </button>
    )
}