import React, { useState } from "react";
import cover from "../Images/cover-2.jpg";
import Axios  from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const[loginUserName, setLoginUserName] = useState("")
  const[loginPassword, setLoginPassword] = useState("")
  const navigateTo = useNavigate()

  const loginUser = () => {
    Axios.post('http://localhost:3000/login', {

    username: loginUserName,
    password: loginPassword,

  }).then((response) => {
    console.log(response)
    if(response.data.message){
      navigateTo('/login')
    }else{
      navigateTo('/home')
    }
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
              Welcome
            </h1>
            
            <form class="mt-6" action="/home" >
              <div>
                <label class="block text-gray-700">Username</label>
                <input
                  type="text"
                  onChange={(event) => {setLoginUserName(event.target.value)}}
                  name=""
                  id=""
                  placeholder="Enter Username"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  onChange={(event) => {setLoginPassword(event.target.value)}}
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
                onClick={loginUser}
                class="w-full block bg-[#0a0908]   hover:bg-gray-700 focus:bg-[#0a0908] text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <p class="mt-8">
              Need an account?
              <a
                href="/register"
                class="text-[#0a0908] hover:text-gray-400 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
