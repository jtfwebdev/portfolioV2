import '../Styles/Blog.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Blog = ({blogRef, blogs}) => {
    return ( 
        <div id="blog_container" ref={blogRef}>
            {blogs && blogs.map((blog, idx) => {
                return <SingleBlog key={idx} blog={blog} />
            })}
            <div className="divider"></div>
        </div>
     );
}

export default Blog;

const SingleBlog = ({blog}) => {

    const blogVars = {
        initial: {
            color: "#CED0CE",
            fontSize: "1.25em"
        },
        hover: {
            color: "#F15025",
            fontSize: "2em",
            transition: {
                duration: .3
            }
        }
    }

    let title = blog.title.rendered;
    let body = blog.excerpt.rendered;

    return (
        <a href={`https://blog.jtfwebdev.co.uk/blogposts/${blog.slug}`} target="_blank">
            <motion.div className="blog_single" initial="initial" whileHover="hover">
                <motion.div className="blog_title_cont" variants={blogVars}>
                    <h3 dangerouslySetInnerHTML={{__html: title}}/>
                    <FontAwesomeIcon className="blog_open" icon={faArrowUpRightFromSquare} />
                </motion.div>
                <p dangerouslySetInnerHTML={{__html: body}}></p>
            </motion.div>
        </a>
    )
}