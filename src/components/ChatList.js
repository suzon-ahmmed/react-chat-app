import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
export default function ChatList() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  // auth.onAuthStateChanged(activUser => {
  //   console.log(activUser);
  // })

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    // console.log("chake");

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  // console.log(Object.entries(chats) );
  const handelSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  // console.log(chats)

  return (
    <div className="max-h-[calc(100%-55px)] mb-[55px] overflow-auto">
      {chats && Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          key={chat[0]}
          onClick={() => handelSelect(chat[1].userInfo)}
          className="px-4 py-2 flex items-center space-x-3 hover:bg-cyan-200/40 cursor-pointer"
        >
          <img
            src={chat[1].userInfo.photoURL}
            className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-fill"
            alt=""
          />
          <div>
            <p className="font-semibold">{chat[1].userInfo.displayName}</p>
            <p className="text-xs text-clip overflow-hidden h-4">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
