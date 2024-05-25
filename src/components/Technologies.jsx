import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiJava } from "react-icons/di";
import { SiTypescript, SiAngular, SiReact, SiNodedotjs, SiExpress, SiSpringboot, SiDjango, SiPython, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity:0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="HTML5">
                <AiFillHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="CSS3">
                <DiCss3 className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="JavaScript">
                <DiJavascript1 className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="TypeScript">
                <SiTypescript className="text-7xl text-blue-700" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Angular">
                <SiAngular className="text-7xl text-red-700" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="React">
                <SiReact className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.9)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Node.js">
                <SiNodedotjs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Express.js">
                <SiExpress className="text-7xl text-gray-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.7)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Spring Boot">
                <SiSpringboot className="text-7xl text-green-700" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Django">
                <SiDjango className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Python">
                <SiPython className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Java">
                <DiJava className="text-7xl text-red-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(1.8)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="MySQL">
                <SiMysql className="text-7xl text-blue-600" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies;
