import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
    width: "8rem",
    height: "8rem",
    display: "flex",
    justifyContent: "space-around",
};

const loadingCircle = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#3A36DB",
    borderRadius: "1rem",
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
            loop: Infinity, // Infinite animation loop
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "60%",
    },
};

const loadingCircleTransition = {
    duration: 1,
    repeat: Infinity, // Infinite animation repeat
    repeatType: "reverse", // Reverse the animation after each repeat
    ease: "easeInOut",
};

const Loader = () => {
    return (
        <div>
            <div className="fixed w-full min-h-screen z-50 bg-black opacity-30" />
            <div className="flex fixed w-full justify-center items-center h-screen">
                <motion.div
                    style={loadingContainer}
                    variants={loadingContainerVariants}
                    initial="start"
                    animate="end"
                >
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                </motion.div>
            </div>
        </div>
    );
};

export default Loader;
