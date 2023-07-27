import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Burger from "./components/Burger";
import { Outlet } from "react-router-dom";

const messArray = [
  { id: "1", mess: "Hello first" },
  { id: "2", mess: "Hello second" },
  { id: "3", mess: "Hello third" },
  { id: "4", mess: "Hello fourth" },
];

export default function MultiSelect() {
  const [messages, setMessages] = useState(messArray);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function toggleSelectedMessage(message) {
    if (!selectedMessages.includes(message)) {
      setSelectedMessages((selectedMessages) => [...selectedMessages, message]);
    } else {
      setSelectedMessages((selectedMessages) =>
        selectedMessages.filter((mess) => mess.id !== message.id)
      );
    }
  }

  function addMessage() {
    setMessages((messages) => [
      ...messages,
      { id: nanoid(), mess: `New message ${messages.length}` },
    ]);
  }

  function deleteMessage() {
    setMessages((messages) =>
      messages.filter((message) => !selectedMessages.includes(message))
    );
    setSelectedMessages([]);
  }

  // SideMenu
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  return (
    <div className="min-h-screen md:min-h-[calc(100vh_-_32px)] mx-auto flex max-w-sm flex-col md:rounded-lg bg-slate-50 shadow-[0_35px_60px_-15px_rgba(148,163,184,0.5)] relative overflow-hidden">
      <Header
        messages={messages}
        sideMenuVisible={sideMenuVisible}
        setSideMenuVisible={setSideMenuVisible}
        addMessage={addMessage}
        deleteMessage={deleteMessage}
        selectedMessages={selectedMessages}
      />

      <Burger
        sideMenuVisible={sideMenuVisible}
        setSideMenuVisible={setSideMenuVisible}
      />

      <Outlet />

      <ul className={`p-2 relative rounded-b-md overflow-hidden`}>
        <div
          className={`${
            sideMenuVisible ? "scale-[96%]" : "scale-100"
          } origin-top-right transition-all`}
        >
          <AnimatePresence initial={false}>
            {[...messages].reverse().map((message) => (
              <motion.li
                key={message.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="relative will-change-auto"
              >
                <button
                  onClick={() => toggleSelectedMessage(message)}
                  className={`${
                    selectedMessages.includes(message)
                      ? "bg-blue-500 text-white"
                      : "hover:bg-slate-200 "
                  } my-[2px] w-full cursor-pointer truncate rounded py-3 px-6 text-left transition-all active:scale-[98%] origin-top-right`}
                >
                  <span className="truncate text-sm font-medium">
                    {message.mess}
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </div>
      </ul>
    </div>
  );
}
