import React , {useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { SearchFilm } from '../searchFilm/SearchFilm'
import {motion} from 'framer-motion'
import classes from './Header.module.scss'

export const Header = () => {
    const loc = useLocation()
    const [isShowHeader, setIsShowHeader] = useState(true)
    const [lastYPos, setLastYPos] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            setIsShowHeader(isScrollingUp);
            setLastYPos(yPos);
        }
        window.addEventListener('scroll' , handleScroll , false)
      return () => {
        window.removeEventListener('scroll' , handleScroll , false)
      };
    }, [lastYPos])
    console.log(loc.pathname);
    return (
        <div className={classes.container} >
            {
                loc.pathname == '/' ?
            
            <motion.div className={classes.headerbox} animate={{y: isShowHeader ? 0 : -150}} initial={{y : -150}} >
                <SearchFilm />
                <h1>
                    فیلمینفو
                </h1>
            </motion.div> :
            <motion.div className={classes.headerbox} animate={{y: isShowHeader ? 0 : -150}} initial={{y : -150}} >
                <h1>
                    فیلمینفو
                </h1>
            </motion.div> 
            

            }
        </div>
    )
}
