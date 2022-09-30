import React, { useContext } from "react";
import User from "../assets/images/user.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({message}) {
  const {currentUser} = useContext(AuthContext);
  const {data}= useContext(ChatContext);
  console.log(message);
  return (
    <>
      <div className="flex gap-4 items-end mt-2">
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
      </div>
      <div className="flex flex-row-reverse justify-self-end gap-4 items-end mt-2">
        <div className="flex flex-col items-start">
          <img
            src={User}
            className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-contain"
            alt=""
          />
          <p className="text-sm mt-1">Just Now</p>
        </div>
        <div className="max-w-[75%] flex flex-col items-end space-y-2">
          <img
            src={User}
            className="object-contain w-1/2 rounded"
            alt="your images"
          />
          <p className="p-2 w-fit bg-white dark:bg-gray-800 rounded-b-xl rounded-tl-xl">
            Hello World.
          </p>
        </div>
      </div>
    </>
  );
}
