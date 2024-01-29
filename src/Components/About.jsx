import '../Styles/About.css'
import Bio from '../assets/About.json'
import { ScreenWidthContext} from '../App'
import { useContext } from 'react'

const About = ({aboutRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    return ( 
        <div id="about_container" ref={aboutRef}>
            {screenWidth <= 1024 && <h2>ABOUT</h2>}
            {Bio[0].text.map((paragraph, idx) => {
                return <p>{paragraph}</p>
            })}
            <div className="divider"></div>
        </div>
     );
}
 
export default About;