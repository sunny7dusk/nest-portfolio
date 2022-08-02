import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
        key={asPath}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
