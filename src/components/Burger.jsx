/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
export default function Burger(props) {
  return (
    <>
      <AnimatePresence>
        {props.sideMenuVisible && (
          <motion.div
            onClick={() => props.setSideMenuVisible(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-slate-600/20 absolute inset-0 z-30`}
          ></motion.div>
        )}
      </AnimatePresence>

      <div
        className={`${
          props.sideMenuVisible
            ? "translate-x-0 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)]"
            : "-translate-x-full"
        } absolute top-0 bottom-0 left-0 px-4 max-w-xs w-full py-2 bg-slate-100 z-40 transition-all`}
      >
        Menu
      </div>
    </>
  );
}
