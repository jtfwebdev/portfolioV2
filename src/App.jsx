import { useRef, useState, createContext, useEffect } from 'react'
import './App.css'
import Content from './Components/Content'
import Sidebar from './Components/Sidebar'
import FlashlightEffect from './Components/FlashlightEffect';

export const ScreenWidthContext = createContext(window.innerWidth);

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

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
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="container">
    <ScreenWidthContext.Provider value={screenWidth}>
      {screenWidth > 1024 && <FlashlightEffect />}
      <Sidebar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Content aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    </ScreenWidthContext.Provider>
    </div>
  )
}

export default App
