/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BookIcon, BookMenuIcon, SelectIcon, TrashIcon } from "./Icons";

export default function Book(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <motion.div
        key={props.book.id}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "55px" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          props.selectedItems.includes(props.book)
            ? "bg-myBlue text-white"
            : "hover:bg-slate-200"
        } my-[2px] w-full flex items-center justify-between cursor-pointer truncate rounded pl-4 text-left transition-all active:scale-[98%] origin-top-right will-change-auto relative`}
      >
        <div className="flex gap-2 items-center">
          <BookIcon condition={!props.selectedItems.includes(props.book)} />
          <span className="truncate font-medium capitalize">
            {props.book.bookTitle}
          </span>
        </div>

        <div onClick={() => setOpen(true)} className="p-5">
          <BookMenuIcon condition={!props.selectedItems.includes(props.book)} />
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`bg-slate-600/20 fixed inset-0 z-40`}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-8 right-4 z-50 bg-[#272D37] text-white rounded-lg shadow-xl"
            >
              <div className="flex flex-col gap-2 py-3 pl-5 pr-8">
                <button
                  onClick={() => {
                    props.toggleSelectedItems(props.book);
                    setOpen(false);
                  }}
                  className="h-12 flex gap-2 items-center"
                >
                  <SelectIcon
                    condition={!props.selectedItems.includes(props.book)}
                  />
                  <span>
                    {props.selectedItems.includes(props.book)
                      ? "Зняти вилілення"
                      : "Виділити"}
                  </span>
                </button>

                {!props.selectedItems.includes(props.book) && (
                  <button
                    onClick={() => {
                      props.deleteBook(props.book.id);
                      setOpen(false);
                    }}
                    className="h-12 flex gap-2 items-center"
                  >
                    <TrashIcon
                      condition={!props.selectedItems.includes(props.book)}
                    />
                    <span>Видалити</span>
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
