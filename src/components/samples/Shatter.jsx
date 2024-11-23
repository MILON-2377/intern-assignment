import { motion } from "framer-motion";

export default function Shatter({ visible }) {
  return (
    <motion.div
      className={`
        flex justify-between
        w-full h-fulll  `}
    >
      <motion.div
        initial={{
          width: "50vw" ,
        }}
        animate={{ width: visible ? "0vw" : "50vw" }}
        transition={{ duration: 0.5 }}
        className="
            w-[50vw]
            h-screen
            bg-blue-300
            
        "
      ></motion.div>
      <motion.div
        initial={{
          width: "50vw",
        }}
        animate={{ width: visible ? "0vw" : "50vw" }}
        transition={{ duration: 0.5 }}
        className="
            w-[50vw]
            h-screen
            bg-blue-300
            
        "
      ></motion.div>
    </motion.div>
  );
}
