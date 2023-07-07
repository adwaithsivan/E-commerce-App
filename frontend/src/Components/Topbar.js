import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <header class=" mt-5">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row sm:flex-row item-">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
            <a href="/home">
              <span class="ml-3 text-xl cursor-pointer">Fashion Store</span>
            </a>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center sm:ml-auto sm:">
            <Link to='/cart'>
            <BsCart2 size={37} className="px-2 cursor-pointer hover:bg-gray-200 rounded-full" />
            </Link>
            <a href="/">
            <button class=" hover:bg-gray-200 text-gray-800 font-medium py-2 px-4  rounded-full ">
              Logout 
            </button>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
