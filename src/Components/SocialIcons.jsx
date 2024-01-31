import '../Styles/SocialIcons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialIcons = () => {
    return ( 
        <div id="socialLinks">
            <a target="_blank" href="https://github.com/jtfwebdev"><FontAwesomeIcon className="socialIcon" icon={faGithub} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/josh-ford-a950452b0/"><FontAwesomeIcon className="socialIcon" icon={faLinkedin} /></a>
            <a target="_blank" href="mailto:jtfwebdevconsultant@hotmail.com?Subject=Website%20Development%20Query"><FontAwesomeIcon className="socialIcon" icon={faEnvelope} /></a>
        </div>
     );
}
 
export default SocialIcons;