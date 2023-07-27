import { AnimatePresence, motion } from "framer-motion";

export default function ChaptersPage() {
  return (
    <div className="p-4">
      <div>Розділи</div>

      <AnimatePresence>
        {true && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center pb-4 font-semibold text-sm text-slate-600"
          >
            Розділи відсутні
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
