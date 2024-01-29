import '../Styles/ProjectPreview.css'
import { motion } from 'framer-motion'
import { ScreenWidthContext } from '../App'
import { useContext } from 'react'

const ProjectPreview = ({headerImage, headerSmall, title, excerpt, devIcons}) => { //When adding new projects, ensure that excerpt does not encroach on dev icons when animating in

    const screenWidth = useContext(ScreenWidthContext);

    return (
        <>
            {screenWidth <= 1024 && screenWidth > 615 && <MobileProjectPreview headerImage={headerImage} headerSmall={headerSmall} title={title} excerpt={excerpt} devIcons={devIcons} />}
            {(screenWidth > 1024 || screenWidth <= 615) && <FullScreenProjectPreview headerImage={headerImage} title={title} excerpt={excerpt} devIcons={devIcons} />}
        </>
     );
}

export default ProjectPreview;

const FullScreenProjectPreview = ({ headerImage, title, excerpt, devIcons }) => {

    const projectPreviewH3Vars = {
        initial: {
            opacity: 1,
            x: 0
        },
        hover: {
            opacity: 0,
            x: "40vw"
        }
    }

    const projectPreviewExcerptVars = {
        initial: {
            opacity: 0,
            x: "-40vw",
        },
        hover: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div
            className="projectPreview_container"
            variants={null}
            initial="initial"
            whileHover="hover">
            <div
                className="projectPreview_header"
                style={{ backgroundImage: `url(${headerImage})` }}
            ></div>
            <div className="projectPreview_textContainer">
                <motion.h3
                    variants={projectPreviewH3Vars}
                >
                    {title}
                </motion.h3>
                <motion.p
                    variants={projectPreviewExcerptVars}
                >{excerpt}
                </motion.p>
                <div className="devIcon-container">
                    {devIcons.map((icon, index) => {
                        return <i key={index} className={icon}></i>
                    })}
                </div>
            </div>
        </motion.div>
    )
}

const MobileProjectPreview = ({ headerImage, headerSmall, title, excerpt, devIcons }) => {
    return (
        <div className="mob-projectPreview_container">
            <div
                className="mob-projectPreview_header"
                style={{ backgroundImage: `url(${headerSmall})` }}
            ></div>
            <div className="mob-projectPreview_text">
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <div className="mob-devIcon-container">
                    {devIcons.map((icon, index) => {
                        return <i key={index} className={icon}></i>
                    })}
                </div>
            </div>
        </div>
    )
}