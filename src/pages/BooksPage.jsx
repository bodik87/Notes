import { AnimatePresence, motion } from "framer-motion";

export default function BooksPage() {
  return (
    <div className="p-4">
      <div>Книги</div>

      <AnimatePresence>
        {true && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center pb-4 font-semibold text-sm text-slate-600"
          >
            Книги відсутні
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
