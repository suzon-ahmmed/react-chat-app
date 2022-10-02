import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import BlankMessageArea from "./BlankMessageArea";
import Message from "./Message";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);
  // console.log(data);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  console.log(data.user)

  return (
    <div className="h-[calc(100%-125px)] overflow-auto dark:bg-slate-900 bg-slate-100 p-2 sm:p-4">
      {data.user.displayName ? messages.map((m) => (
        <Message message={m} key={m.id} />
      )): <BlankMessageArea />}
    </div>
  );
}
