/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="flex justify-between border-b p-2 text-right">
      <div className="flex gap-4">
        <button
          onClick={() => props.setSideMenuVisible(!props.sideMenuVisible)}
          className="hover:bg-slate-200 h-12 w-12 rounded-md font-semibold flex items-center justify-center transition-all"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <Link
          to={`/books`}
          className="rounded-md font-semibold flex items-center justify-center transition-all text-black"
        >
          Книги
        </Link>

        <button
          onClick={props.addMessage}
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full font-semibold flex items-center justify-center transition-all bg-blue-200 hover:bg-blue-300"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {props.messages.length > 0 && props.selectedMessages.length > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", bounce: 0.4, duration: 0.3 }}
            onClick={props.deleteMessage}
            className="bg-red-100 hover:bg-red-200 text-red-800 h-12 px-4 rounded-md font-semibold flex items-center justify-center transition-all"
          >
            Видалити
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
