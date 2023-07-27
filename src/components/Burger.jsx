/* eslint-disable react/prop-types */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSelect from "../hooks/useSelect";
import { db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

import Book from "./Book";

export default function Burger(props) {
  // const location = useLocation();
  const { selectedItems, setSelectedItems, toggleSelectedItems } = useSelect();
  const [visibleInput, setVisibleInput] = useState(false);
  const [bookTitle, setBookTitle] = useState("");

  const [selectedBook, setSelectedBook] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addItem = async () => {
    setError("");
    setLoading(true);
    if (bookTitle) {
      await addDoc(collection(db, props.user.email), { bookTitle });
    } else {
      setError("Помилка при додаванні в базу даних");
    }
    setLoading(false);
  };

  const handleInput = () => {
    setVisibleInput(true);
  };
  const handleCreate = () => {
    addItem();
    setVisibleInput(false);
    setBookTitle("");
  };

  const deleteBook = async (id) => {
    await deleteDoc(doc(db, props.user.email, id));
  };

  // const deleteBooks = async (id) => {
  //   await deleteDoc(doc(db, props.user.email, id));
  // };

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
          />
        )}
      </AnimatePresence>

      <div
        className={`${
          props.sideMenuVisible
            ? "translate-x-0 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)]"
            : "-translate-x-full"
        } absolute top-0 bottom-0 left-0 px-4 max-w-xs w-full py-2 bg-slate-100 z-40 transition-all`}
      >
        <div className="flex justify-between items-center mb-2 h-12">
          <Link
            to={`/books`}
            className="flex ml-4 font-semibold text-black text-xl"
          >
            Книги
          </Link>

          <AnimatePresence>
            {selectedItems.length > 0 && (
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

        <AnimatePresence initial={false}>
          {[...props.books].map((book) => (
            <Book
              key={book.bookTitle}
              book={book}
              selectedItems={selectedItems}
              toggleSelectedItems={toggleSelectedItems}
              setSelectedBook={setSelectedBook}
              deleteBook={deleteBook}
            />
          ))}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {visibleInput && (
            <motion.input
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "48px" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full px-6 bg-transparent outline-none my-2 truncate text-sm font-medium"
              placeholder="Введіть назву..."
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", bounce: 0.4, duration: 0.3 }}
          onClick={() => {
            if (!visibleInput) {
              handleInput();
            } else {
              handleCreate();
            }
          }}
          className="mt-4 w-full bg-[#569CFB] hover:bg-[#68a6fc] text-white h-12 px-4 rounded-md font-semibold flex items-center justify-center transition-all active:bg-[#4984d6]"
        >
          {!visibleInput ? "Нова книга" : "Зберегти"}
        </motion.button>
      </div>
    </>
  );
}
