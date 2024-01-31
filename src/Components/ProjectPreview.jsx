import '../Styles/ProjectPreview.css'
import { motion } from 'framer-motion'
import { ScreenWidthContext } from '../App'
import { useContext } from 'react'

const ProjectPreview = ({headerImage, headerSmall, title, excerpt, devIcons, target}) => { //When adding new projects, ensure that excerpt does not encroach on dev icons when animating in

    const screenWidth = useContext(ScreenWidthContext);

    return (
        <>
            {screenWidth <= 1024 && screenWidth > 595 && <TabletProjectPreview headerImage={headerImage} headerSmall={headerSmall} title={title} excerpt={excerpt} devIcons={devIcons} target={target} />}
            {screenWidth > 1024 && <FullScreenProjectPreview headerImage={headerImage} title={title} excerpt={excerpt} devIcons={devIcons} target={target} />}
            {screenWidth <= 595 && <MobileProjectPreview headerImage={headerImage} title={title} excerpt={excerpt} devIcons={devIcons} target={target} /> }
        </>
     );
}

export default ProjectPreview;

const FullScreenProjectPreview = ({ headerImage, title, excerpt, devIcons, target }) => {

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
        <motion.a target="_blank" href={target}
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
        </motion.a>
    )
}

const TabletProjectPreview = ({ headerSmall, title, excerpt, devIcons, target }) => {
    return (
        <a className="mob-projectPreview_container" target="_blank" href={target}>
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
        </a>
    )
}

const MobileProjectPreview = ({ headerImage, excerpt, devIcons, target }) => {
    return (
        <a target="_blank" href={target}>
            <div
                className="projectPreview_container">
                <div
                    className="projectPreview_header"
                    style={{ backgroundImage: `url(${headerImage})` }}
                ></div>
                <div className="projectPreview_textContainer">
                    <p>{excerpt}</p>
                    <div className="devIcon-container">
                        {devIcons.map((icon, index) => {
                            return <i key={index} className={icon}></i>
                        })}
                    </div>
                </div>
            </div>
        </a>
    )
}