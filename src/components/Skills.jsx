import React from 'react'
import {motion} from 'framer-motion'

const Skills=()=>{
    return (
        <motion.div
         initial={{opacity:0, y:50}}
         whileInView ={{opacity:1, y:0}}
         transition={{duration:1, ease:'easeOut'}}
         viewport={{once:true}}
        >

        </motion.div>
    )
}

export default Skills