import '../styles/Content.css'
import About from './About';
import ContactMe from './ContactMe';
import ProjectsList from './ProjectsList';

const Content = ({aboutRef, projectsRef, contactRef}) => {
    return ( 
        <div id="content">
            <About aboutRef={aboutRef} />
            <ProjectsList projectsRef={projectsRef} />
            <ContactMe contactRef={contactRef} />
        </div>
     );
}
 
export default Content;