import { useEffect, useState } from 'react'
import '../Styles/TitleCardNav.css'
import { motion } from 'framer-motion'

const TitleCardNav = ({aboutRef, blogRef, projectsRef, contactRef}) => {

    const [activeNavLink, setActiveNavLink] = useState("about");

    const handleNavClick = (target, activeLink) => {
        target.current.scrollIntoView();
        setActiveNavLink(activeLink);
    }

    useEffect(() => {
        
        const aboutObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) setActiveNavLink("about");
        },
        {
            threshold: .5
        })

        const blogObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) setActiveNavLink("blog");
        },
        {
            threshold: .5
        })

        const projectsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setActiveNavLink("projects");
        }, 
        {
            threshold: .1
        })

        const contactObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setActiveNavLink("contact");
        },
        {
            threshold: .5
        })

        aboutObserver.observe(aboutRef.current);
        blogObserver.observe(blogRef.current);
        projectsObserver.observe(projectsRef.current);
        contactObserver.observe(contactRef.current);

        return () => {
            aboutObserver.disconnect();
            blogObserver.disconnect();
            projectsObserver.disconnect();
            contactObserver.disconnect();
        }

    }, [])

    return (
        <nav id="nav_fullscreen">
            <div className={activeNavLink == "about" ? "navLink active" : "navLink"}>
                <motion.a
                    onClick={() => handleNavClick(aboutRef, "about")}>
                    ABOUT
                </motion.a>
                <div></div>
            </div>
            <div className={activeNavLink == "blog" ? "navLink active" : "navLink"}>
                <motion.a
                    onClick={() => handleNavClick(blogRef, "blog")}>
                    BLOG
                </motion.a>
                <div></div>
            </div>
            <div className={activeNavLink == "projects" ? "navLink active" : "navLink"}>
                <motion.a
                    onClick={() => handleNavClick(projectsRef, "projects")}>
                    PROJECTS
                </motion.a>
                <div></div>
            </div>
            <div className={activeNavLink == "contact" ? "navLink active" : "navLink"}>
                <motion.a
                    onClick={() => handleNavClick(contactRef, "contact")}>
                    CONTACT
                </motion.a>
                <div></div>
            </div>
        </nav>
     );
}
 
export default TitleCardNav;