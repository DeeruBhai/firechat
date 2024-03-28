import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  //bg-[url('/stacked-steps-haiki.svg')]
  const [invalidUser, setInvalidUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      console.log(auth.currentUser.email);
    } catch (err) {
      console.log(err);
      setInvalidUser(true);
    }
  };

  return (
    <section className=" h-[100vh] flex justify-center items-center ">
      <div className="bg-white backdrop-blur-xl bg-teal-300/25 p-6 flex flex-col rounded-md">
        <h1 className="font-permanent text-3xl text-center text-teal-600">
          DA Chat
        </h1>
        <div className="flex flex-col gap-2 mt-4 ">
          {invalidUser && (
            <div className="text-red-500 text-xs text-center">
              **Invalid User**
            </div>
          )}
          <input
            type="text"
            placeholder="Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onClick={() => setInvalidUser(false)}
            className="appearance-none rounded-md  border-none bg-white p-1 w-full text-gray-700  leading-tight focus:outline-none"
          />
          <div className="border-b-2 border-teal-500 ">
            <input
              type="password"
              placeholder="Password..."
              onClick={() => setInvalidUser(false)}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="appearance-none rounded-md  border-none bg-white p-1 w-full text-gray-700  leading-tight focus:outline-none"
            />
          </div>
          <button
            onClick={login}
            className="border-1 border-solid bg-white border-teal-400 text-teal-400 p-1  hover:bg-teal-400 rounded-md hover:text-white focus:outline-none cursor-pointer"
          >
            Login
          </button>
          <p className="text-center text-xs pt-2">
            New user ?
            <span className="pl-1">
              <Link to="signup">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
