import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg)",
          filter: "brightness(0.6)",
        }}
      ></div>
      <div className="relative z-10">
        <Header />
        <div className="flex justify-center items-center h-screen ">
          <div className="bg-black bg-opacity-70 text-white p-12 rounded-lg shadow-lg w-96">
            <h1 className="text-3xl font-semibold mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <form className="flex flex-col gap-4">
              {isSignInForm && (
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-red-500 px-3 py-2"
                />
              )}

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-red-500 px-3 py-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-red-500 px-3 py-2"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isSignInForm ? "Sign in" : "Sign Up"}
              </button>
              <p
                className="text-sm cursor-pointer font-semibold"
                onClick={toggleSignIn}
              >
                {isSignInForm
                  ? "New to NetFlix-GPT? Sign Up now!"
                  : "Already a user? Sign in!"}
              </p>
              {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign in with Google
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
