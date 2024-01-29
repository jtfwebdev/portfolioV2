import '../Styles/SocialIcons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialIcons = () => {
    return ( 
        <div id="socialLinks">
            <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            <FontAwesomeIcon className="socialIcon" icon={faEnvelope} />
        </div>
     );
}
 
export default SocialIcons;