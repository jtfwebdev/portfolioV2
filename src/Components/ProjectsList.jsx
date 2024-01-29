import '../Styles/ProjectsList.css'
import ConwaysHeaderImage from '../assets/Images/ConwaysFull.png'
import MovieReviewHeaderImage from '../assets/Images/MovieReviewBloggerFull.png'
import MainStHeaderImage from '../assets/Images/MainStCafeFull.png'
import ConwaysSmall from '../assets/Images/ConwaysFull300.png'
import MovieReviewSmall from '../assets/Images/MovieReviewBloggerFull300.png'
import MainStSmall from '../assets/Images/MainStCafeFull300.png'
import ProjectsInfo from '../assets/ProjectsList.json'
import ProjectPreview from './ProjectPreview'
import { ScreenWidthContext } from '../App'
import { useContext } from 'react'

const ProjectsList = ({projectsRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    return ( 
        <>
            <div id="projectsList_container" ref={projectsRef}>
                {screenWidth <= 1024 && <h2>PROJECTS</h2>}
                <ProjectPreview headerImage={MovieReviewHeaderImage} headerSmall={MovieReviewSmall} title={ProjectsInfo[0].title} excerpt={ProjectsInfo[0].excerpt} devIcons={ProjectsInfo[0].devIcons} />
                <ProjectPreview headerImage={ConwaysHeaderImage} headerSmall={ConwaysSmall} title={ProjectsInfo[1].title} excerpt={ProjectsInfo[1].excerpt} devIcons={ProjectsInfo[1].devIcons} />
                <ProjectPreview headerImage={MainStHeaderImage} headerSmall={MainStSmall} title={ProjectsInfo[2].title} excerpt={ProjectsInfo[2].excerpt} devIcons={ProjectsInfo[2].devIcons} />
            </div>
            <div className="divider"></div>
        </>
    );
}
 
export default ProjectsList;