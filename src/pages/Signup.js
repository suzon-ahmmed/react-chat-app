import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/send.png";
import Toggle from "../components/themeContext/Toggle";
import { auth, db, storage } from "../firebase";

export default function Signup() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading("Please wait...");
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    if (password !== confirmPassword) {
      return setErr("Password dose not match!");
    }
    try {
      //Create user
      setErr("Signup Successfully! 😊😊");
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr("Failed to sighup!");
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr("Failed to sighup!");
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="h-[calc(100vh)] flex justify-center items-center">
        <div className="relative py-8 px-8 bg-white rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 z-20 w-80 sm:w-[420px] flex flex-col items-center justify-center">
          <div className="absolute top-2 right-2">
            <Toggle />
          </div>
          <div className="bg-sky-400/20 dark:bg-sky-400/30 w-16 h-16 rounded-lg flex items-center justify-center">
            <img src={Logo} className="w-12" alt="" />
          </div>
          <div className="w-full mt-2">
            <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-600 to-sky-800 mb-2 text-2xl">
              Signup
            </h2>
            <p className="text-sm mb-3 font-semibold tracking-wide cursor-pointer">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>

          <form
            className="w-full flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              required
              placeholder="User Name"
              className="block text-sm py-3 px-4 my-3 focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
            />
            <input
              type="email"
              required
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 my-3 focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="block text-sm py-3 px-4 my-3  focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
            />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              className="block text-sm py-3 px-4 my-3  focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent"
            />

            <label className="flex relative text-sm py-2 pr-4 mt-3 mb-3 overflow-hidden focus:border-cyan-400 rounded-lg w-full border outline-none bg-transparent">
              <span className="text-base leading-normal absolute top-[7px] sm:top-[8px]  h-[34px] flex justify-center bg-white dark:bg-gray-800  w-[88px]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M1,9V4A3.0033,3.0033,0,0,1,4,1H9A1,1,0,0,1,9,3H4A1.001,1.001,0,0,0,3,4V9A1,1,0,0,1,1,9ZM44,1H39a1,1,0,0,0,0,2h5a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V4A3.0033,3.0033,0,0,0,44,1ZM9,45H4a1.001,1.001,0,0,1-1-1V39a1,1,0,0,0-2,0v5a3.0033,3.0033,0,0,0,3,3H9a1,1,0,0,0,0-2Zm37-7a1,1,0,0,0-1,1v5a1.001,1.001,0,0,1-1,1H39a1,1,0,0,0,0,2h5a3.0033,3.0033,0,0,0,3-3V39A1,1,0,0,0,46,38Zm-8-2.248A3.2521,3.2521,0,0,1,34.7515,39H13.2485A3.2521,3.2521,0,0,1,10,35.752v-.5527a13.3807,13.3807,0,0,1,9.7149-12.8465,6.857,6.857,0,0,1-2.6241-5.3908V15.8711a6.9093,6.9093,0,0,1,13.8184,0v1.0908a6.857,6.857,0,0,1-2.6242,5.3909A13.3812,13.3812,0,0,1,38,35.2ZM23.9619,21.833h.0762a4.8768,4.8768,0,0,0,4.8711-4.8711V15.8711a4.9093,4.9093,0,0,0-9.8184,0v1.0908A4.8768,4.8768,0,0,0,23.9619,21.833ZM36,35.2A11.38,11.38,0,0,0,24.6333,23.833H23.3662A11.3788,11.3788,0,0,0,12,35.1992v.5527A1.25,1.25,0,0,0,13.2485,37H34.7515A1.25,1.25,0,0,0,36,35.752Z"></path>
                </svg>
              </span>
              <input type="file" className="" required />
            </label>

            <button type="submit" className="gradient-btn">
              Create Account
            </button>

            {loading && (
              <span className="w-full p-1 text-center">{loading}</span>
            )}
            {err && (
              <span className="bg-red-400/60 w-full p-2 text-center rounded-lg">
                {err}
              </span>
            )}
          </form>
          <p className="mt-3 text-sm">
            Already Have An Account?{" "}
            <Link to="/">
              <span className="underline cursor-pointer text-cyan-400 hover:text-sky-600 font-semibold">
                {" "}
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
