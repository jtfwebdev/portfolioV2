import '../styles/Content.css'
import About from './About';
import Blog from './Blog';
import ContactMe from './ContactMe';
import ProjectsList from './ProjectsList';

const Content = ({aboutRef, blogRef, projectsRef, contactRef}) => {
    return ( 
        <div id="content">
            <About aboutRef={aboutRef} />
            <Blog blogRef={blogRef} />
            <ProjectsList projectsRef={projectsRef} />
            <ContactMe contactRef={contactRef} />
        </div>
     );
}
 
export default Content;