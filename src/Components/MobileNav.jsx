import { useState } from 'react';
import '../styles/MobileNav.css';
import { AnimatePresence, motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const MobileNav = ({ aboutRef, projectsRef, contactRef, handleAnimateStairs }) => {

    const [hamOpen, setHamOpen] = useState(false);

    const toggleMenu = () => {
        if (hamOpen) {
            setBurgerClass("burger-bar unclicked");
        } else setBurgerClass("burger-bar clicked");
        setHamOpen((prev) => !prev);
    }

    const handleNavigate = (target) => {
        if (target.current) {
            handleAnimateStairs(target)
        }
        setHamOpen(false);
    }

    const links = [
        {
            text: "About",
            target: aboutRef
        },
        {
            text: "Projects",
            target: projectsRef
        },
        {
            text: "Contact",
            target: contactRef
        }
    ];

    const dropDownVariants = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: .5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.85,
                duration: .3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const navLinkVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: .4,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        open: {
            y: 0,
            transition: {
                duration: .7,
                ease: [0, 0.55, 0.45, 1]
            }
        }
    }

    const linkContainerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        }
    }

    const burgerMenuVariants = {
        initial1: {

        },
        open1: {
            rotate: "45deg",
            y: "185%"
        },
        initial2: {
            opacity: 1,
            transition: {
                duration: 0.05
            }
        },
        open2: {
            opacity: 0,
            transition: {
                duration: 0.05
            }
        },
        initial3: {

        },
        open3: {
            rotate: "-45deg",
            y: "-185%"
        }
    }

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");

    return ( 
        <div className={hamOpen ? "mobileNav-wrap-open" : "mobileNav-wrap-closed"}>
            <div className="hamburger" onClick={() => toggleMenu()}>
                <motion.div className={burgerClass} variants={burgerMenuVariants} initial="initial1" animate={hamOpen ? "open1" : "initial1"}></motion.div>
                <motion.div className={burgerClass} variants={burgerMenuVariants} initial="initial2" animate={hamOpen ? "open2" : "initial2"}></motion.div>
                <motion.div className={burgerClass} variants={burgerMenuVariants} initial="initial3" animate={hamOpen ? "open3" : "initial3"}></motion.div>
            </div>
            <AnimatePresence>
                {hamOpen &&
                    <motion.div
                        className="mobileNav"
                        variants={dropDownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        <motion.div className="navLinksContainer" variants={linkContainerVariants} initial="initial" animate="open" exit="initial">
                            {links.map((link, idx) => {
                                return <div key={idx}>
                                    <motion.div variants={navLinkVariants}>
                                        <button onClick={() => handleNavigate(link.target)}>{link.text}</button>
                                    </motion.div>
                                </div>
                            })}
                            <div id="mobileNav_socialIcons">
                                <motion.div variants={navLinkVariants}><SocialIcons /></motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
     );
}
 
export default MobileNav;