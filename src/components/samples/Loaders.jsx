import { motion } from "framer-motion";

export default function Loaders({visible}) {
 

  return (
    <motion.div
    animate={{opacity:0}}
    initial={{opacity:1}}
    transition={{
      delay:0,
      duration:1.8,
      ease:"easeInOut",
    }}
    className=" 
    absolute
    top-[40%]
    right-[40%]
    z-10
     "
     onAnimationComplete={() => visible(true)}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="
      w-32 h-32
      border-4
      rounded-full
      border-t-transparent
      border-r-yellow-500
      border-l-transparent
      border-b-transparent
     "
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
          w-28 h-28
          border-4
          rounded-full
          border-t-transparent
          border-r-pink-500
          border-l-transparent
          border-b-transparent
         "
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="
          w-24 h-24
          border-4
          rounded-full
          border-t-transparent
          border-r-green-500
          border-l-transparent
          border-b-transparent
         "
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
