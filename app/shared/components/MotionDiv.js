"use client";
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/constant/motion'


const MotionDiv = ({ styles , children , direction="down" , inlineStyle }) => {
  return (
    <motion.div
      className={styles}
      variants={fadeIn(direction, 0.1)}
      initial="hidden"
      whileInView={"show"}
      style={inlineStyle}

    >
      {children}
    </motion.div>
  )
}

export default MotionDiv