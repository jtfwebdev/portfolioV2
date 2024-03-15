import { useRef, useState, createContext, useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import './App.css'
import Content from './Components/Content'
import Sidebar from './Components/Sidebar'
import FlashlightEffect from './Components/FlashlightEffect';
import MobileNav from './Components/MobileNav';
import StairTransition from './Components/StairTransition';
import UseFetchBlogs from './Hooks/UseFetchBlogs'

export const ScreenWidthContext = createContext(window.innerWidth);

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {

    UseFetchBlogs(setBlogs);

    const monitorWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", monitorWidth);

    return () => window.removeEventListener("resize", monitorWidth);

  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual' //Scroll to top on page refresh
  }, []);

  const aboutRef = useRef();
  const blogRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  //Stairs transition for mobile navigation menu

  const [stairsScope, animateStairs] = useAnimate();

  const handleAnimateStairs = async (target) => {
    await animateStairs("div", { height: "100%" }, { duration: 0.35, ease: [.42, 0, 1, .69], delay: stagger(0.05) });
    window.scrollTo({ top: target.current.offsetTop });
    await animateStairs("div", { top: "100%" }, { duration: 0.35, ease: [.42, 0, 1, .69], delay: stagger(0.05) });
    animateStairs("div", { height: 0, top: 0 }, { duration: 0 });
  }

  return (
    <div className="container">
    <ScreenWidthContext.Provider value={screenWidth}>
      {screenWidth > 1024 && <FlashlightEffect />}
        {screenWidth <= 1024 && <MobileNav aboutRef={aboutRef} blogRef={blogRef} projectsRef={projectsRef} contactRef={contactRef} handleAnimateStairs={handleAnimateStairs} />}
      {screenWidth <= 1024 && <StairTransition stairsScope={stairsScope} />}
      <Sidebar aboutRef={aboutRef} blogRef={blogRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Content aboutRef={aboutRef} blogs={blogs} blogRef={blogRef} projectsRef={projectsRef} contactRef={contactRef} />
    </ScreenWidthContext.Provider>
    </div>
  )
}

export default App
