import {
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { v4 as uuid } from "uuid";
import Logo from "../assets/images/send.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db, storage } from "../firebase";

export default function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handelSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: new Date(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else  {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: new Date(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="w-full flex justify-between h-[55px] px-4 items-center bg-white shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <input
        type="text"
        placeholder="Write your message"
        className="bg-transparent outline-none sm:w-4/5 w-3/4"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex items-center space-x-4">
        <label className="text-xl">
          <FiFolderPlus />
          <input
            type="file"
            className="hidden"
            onChange={(e) => setImg(e.target.files[0])}
            // value={img}
          />
        </label>

        <button
          onClick={data.user.displayName && handelSend}
          className="bg-sky-400/20 dark:bg-sky-400/30 hover:bg-sky-400/30 dark:hover:bg-sky-400/20 w-14 h-9 rounded flex items-center justify-center"
        >
          <img src={Logo} className="w-8" alt="" />
        </button>
      </div>
    </div>
  );
}
