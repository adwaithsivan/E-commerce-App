import React, { useState } from "react";
import Axios from 'axios'
import cover from "../Images/cover-2.jpg";
import { useNavigate } from "react-router-dom";


const Register = () => {

const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const navigateTo = useNavigate()

const createUser = () => {
  Axios.post('http://localhost:3000/register',{

    email: email,
    username: username,
    password: password

  }).then((response) => {
    console.log(response);
  })
}

  return (
    <div>
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-[#0a0908]  lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={cover} alt="" class="w-full h-full object-cover" />
        </div>

        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-4xl md:text-3xl font-bold leading-tight mt-12 font-sans">
              Welcome,
            </h1>

            <form class="mt-6">
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  onChange={(event) => {setEmail(event.target.value)}}
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div className="mt-4">
                <label class="block text-gray-700">Username</label>
                <input
                  type="text"
                  onChange={(event) => {setUsername(event.target.value)}}
                  name=""
                  id=""
                  placeholder="Enter Username"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  onChange={(event) => {setPassword(event.target.value)}}
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div class="text-right mt-2">
                <a
                  href=""
                  class="text-sm font-semibold text-gray-400 hover:text-gray-700 focus:gray-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                onClick={createUser}
                class="w-full block bg-[#0a0908]   hover:bg-gray-700 focus:bg-[#0a0908] text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Sign In
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <p class="mt-8">
              Already have an Account?{" "}
              <a
                href="/"
                class="text-[#0a0908] hover:text-gray-400 font-semibold"
              >
                Login to Account
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
