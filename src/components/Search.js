import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

export default function Search() {
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handelSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchUser)
    );
    // console.log(searchUser + " out");
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        // console.log(searchUser + " in");
        // console.log(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleSelect = async () => {
 
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.displayName + " - " + user.displayName
        : user.displayName + " - " + currentUser.displayName;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (e) {
      setError(true);
    }

    setUser(null);
    setSearchUser("");
  };

  return (
    <div className="">
      <div className="px-4 py-2 border-b-2 flex justify-between items-center dark:border-t-2 dark:bg-gray-800 dark:border-gray-700">
        <input
          type="text"
          className="bg-transparent outline-none focus:outline-none"
          placeholder="search user"
          onKeyDown={(e) => e.code === "Enter" && handelSearch()}
          onChange={(e) => setSearchUser(e.target.value)}
          value={searchUser}
        />
        <button type="button" onClick={handelSearch}>
          <FiSearch />
        </button>
      </div>
      {error && <span>User not found!</span>}
      {user && (
        <div
          className="px-4 py-2 flex items-center space-x-2 hover:bg-cyan-200/40"
          onClick={handleSelect}
        >
          <img
            src={user.photoURL}
            className="w-10 h-10 rounded-full ring-2 ring-cyan-700 object-contain"
            alt=""
          />
          <div>
            <p className="font-semibold">{user.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
}
