import React, { useContext, useEffect, useRef } from "react";
// import User from "../assets/images/user.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // console.log(message.date);

  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView({behavior:'smooth'});
  }, [message]);
  return (
    <>
      {/* <div className={`flex gap-4 items-end mt-2 `}>
        <div className="flex flex-col items-start">
          <img
            src={User}
            className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-contain"
            alt=""
          />
          <p className="text-sm mt-1">Just Now</p>
        </div>
        <div className="max-w-[75%] space-y-2">
          <img
            src={User}
            className="object-contain w-1/2 rounded"
            alt="your images"
          />
          <p className="p-2 w-fit bg-cyan-200/40 dark:bg-cyan-300/40 rounded-b-xl rounded-tr-xl">
            Hello World.
          </p>
        </div>
      </div> */}
      <div
        ref={ref}
        className={`flex gap-4 items-end mt-2 ${
          message.senderId === currentUser.uid &&
          "flex-row-reverse justify-self"
        }`}
      >
        <div className="flex flex-col items-start">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-contain"
            alt=""
          />
          <p className="text-sm mt-1">just now </p>
        </div>
        <div
          className={`max-w-[75%] space-y-2 ${
            message.senderId === currentUser.uid && "flex flex-col items-end"
          }`}
        >
          {message.img && (
            <img
              src={message.img}
              className="object-contain w-1/2 rounded mb-2"
              alt="your images"
            />
          )}
          {message.text && (
            <p
              className={`p-2 w-fit mb-2 ${
                message.senderId === currentUser.uid
                  ? "bg-white dark:bg-gray-800  rounded-b-xl rounded-tl-xl"
                  : "bg-cyan-200/40 dark:bg-cyan-300/40 rounded-b-xl rounded-tr-xl"
              }`}
            >
              {message.text}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
