import '../Styles/FlashlightEffect.css'
import { useEffect, useRef, useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { ScreenWidthContext } from '../App';

const FlashlightEffect = () => {

    const screenWidth = useContext(ScreenWidthContext);

    const widthConstraint = screenWidth - 500;
    const heightConstraint = window.innerHeight - 500;

    const flashlightRef = useRef();

    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(() => {

        const newCoords = setInterval(() => {
            const newX = widthConstraint * Math.random();
            const newY = heightConstraint * Math.random();

            setX(newX);
            setY(newY);
        }, 4000);

        return () => clearInterval(newCoords);
        
    }, [screenWidth])

    return ( 
        <motion.div 
            initial={{ left: widthConstraint * Math.random(), y: heightConstraint * Math.random() }}
            animate={{left: x, top: y}}
            transition={{ease: "easeInOut", duration: 5}}
            ref={flashlightRef} 
            className="flashlight"
            >

        </motion.div>
     );
}
 
export default FlashlightEffect;