
import { motion } from "framer-motion"


// variants 

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index fot staggred delay 

const resverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
}


const Stairs = () => {
    return (
        <>
            {/* 
            render 6 notion div, each representing a step of the stairs  
            Each div will have the sema animation defined by the stairsAnimation  
        */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: resverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
            })}
        </>
    )
}

export default Stairs