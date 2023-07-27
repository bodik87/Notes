/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { Link, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Header(props) {
  const { user, logout } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [books, setBooks] = useState([]);

  // READ
  useEffect(() => {
    setLoading(true);
    const booksQuery = query(collection(db, String(user.email)));
    const getBooks = onSnapshot(booksQuery, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setBooks(itemsArr);

      return () => getBooks();
    });
  }, [user?.email]);

  // DELETE
  const deleteBooks = async (id) => {
    await deleteDoc(doc(db, String(user.email), id));
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

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
          className="absolute bottom-4 right-4 h-12 w-12 rounded-full font-semibold flex items-center justify-center transition-all bg-blue-200 hover:bg-blue-300"
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
