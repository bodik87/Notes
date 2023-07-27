/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { BookIcon, BookMenuIcon, SelectIcon, TrashIcon } from "./Icons";

export default function Book(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <motion.div
        key={props.book.id}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "48px" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          props.selectedItems.includes(props.book)
            ? "bg-blue-500 text-white"
            : "hover:bg-slate-200"
        } my-[2px] w-full flex items-center justify-between cursor-pointer truncate rounded pl-4 text-left transition-all active:scale-[98%] origin-top-right will-change-auto relative`}
      >
        <div className="flex gap-2 items-center">
          <BookIcon condition={!props.selectedItems.includes(props.book)} />
          <span className="truncate text-sm font-medium capitalize">
            {props.book.bookTitle}
          </span>
        </div>

        <div
          onClick={() => {
            props.setSelectedBook(props.book);
            setOpen(true);
          }}
          className="p-5"
        >
          <BookMenuIcon condition={!props.selectedItems.includes(props.book)} />
        </div>
      </motion.div>

      {open && (
        <>
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-slate-600/20 fixed inset-0 z-40`}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 right-2 z-50 bg-[#272D37] text-white rounded-lg"
          >
            <div className="flex flex-col gap-4 py-4 px-5">
              {!props.selectedItems.includes(props.book) && (
                <button
                  onClick={() => {
                    props.deleteBook(props.book.id);
                    setOpen(false);
                  }}
                  className="flex gap-2 items-center"
                >
                  <TrashIcon
                    condition={!props.selectedItems.includes(props.book)}
                  />
                  <span>Видалити</span>
                </button>
              )}

              <button
                onClick={() => {
                  props.toggleSelectedItems(props.book);
                  setOpen(false);
                }}
                className="flex gap-2 items-center"
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
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}