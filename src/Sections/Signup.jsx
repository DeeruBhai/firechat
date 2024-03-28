import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, storage } from "../Config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [created, setCreated] = useState(false);
  const storageRef = ref(storage, name);
  // const uploadTask = uploadBytesResumable(storageRef, file);

  const signup = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("success");
      setCreated(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className=" h-[100vh] flex justify-center items-center ">
      <div className="bg-white backdrop-blur-xl bg-teal-300/25 p-6 flex flex-col rounded-md">
        <h1 className="font-permanent text-3xl text-center text-teal-600">
          DA Chat
        </h1>
        {created ? (
          <div className="flex justify-center items-center mt-6">
            <Link to="/login">
              <button className="border-1 border-solid bg-white border-teal-400 text-teal-400 p-1  hover:bg-teal-400 rounded-md hover:text-white focus:outline-none cursor-pointer">
                To login page
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-2 mt-4 ">
            <input
              type="text"
              placeholder="User name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="appearance-none rounded-md  border-none bg-white p-1 w-full text-gray-700  leading-tight focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="appearance-none rounded-md  border-none bg-white p-1 w-full text-gray-700  leading-tight focus:outline-none"
            />
            <div className="border-b-2 border-teal-500 ">
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="appearance-none rounded-md  border-none bg-white p-1 w-full text-gray-700  leading-tight focus:outline-none"
              />
            </div>
            <input type="file" id="avatar" className="hidden" />
            <label
              htmlFor="avatar"
              className="appearance-none flex flex-row gap-2 cursor-pointer text-teal-400 bg-white p-1 rounded-md"
            >
              <RxAvatar className="text-xl" />
              <span>Avatar</span>
            </label>
            <button
              onClick={signup}
              className="border-1 border-solid bg-white border-teal-400 text-teal-400 p-1  hover:bg-teal-400 rounded-md hover:text-white focus:outline-none cursor-pointer"
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Signup;
