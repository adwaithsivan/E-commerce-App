import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";

function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotal(total);
  });

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updateCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  if (!carts.length) <div> Cart is Empty </div>;
  return (
    <>
      <div>
        <div className="flex items-center justify-center py-8"></div>
        {
          <div
            className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                    <a href="/home">
                      <BiArrowBack />
                    </a>

                    <a href="/home">
                      <p className="text-sm pl-2 leading-none">Back</p>
                    </a>
                  </div>
                  <p className="text-4xl font-black leading-10 text-black pt-3">
                    Bag
                  </p>

                  {carts?.map((cart) => {
                    return (
                      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                        <div className="xl:w-1/5 md:w-1/5 sm:w-1/3">
                          <img
                            src={cart?.image}
                            alt={cart}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="md:pl-3 md:w-3/4">
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base leading-2 font-medium text-gray-800">
                              {cart.title}
                              <p className="text-s leading-5 text-gray-800 pt-2">
                                ${cart.price}{" "}
                              </p>
                            </p>
                            <div class="flex items-center border-gray-100">
                              <span
                                onClick={() => handleDec(cart?.id)}
                                class="cursor-pointer bg-gray-300 py-1 px-3.5 duration-100 hover:bg-black hover:text-blue-50"
                              >
                                {" "}
                                -{" "}
                              </span>
                              <input
                                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                                value={cart.quantity}
                              />

                              <span
                                onClick={() => handleInc(cart?.id)}
                                class="cursor-pointer  bg-gray-300 py-1 px-3 duration-100 hover:bg-black hover:text-blue-50"
                              >
                                {" "}
                                +{" "}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pr-6">
                            <div className="flex itemms-center">
                              <p
                                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                onClick={() => removeProduct(cart?.id)}
                              >
                                Remove
                              </p>
                            </div>
                            <p className=" leading-9 text-gray-800 font-medium">
                              ${cart?.price * cart.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:w-1/2 md:w-1/3  w-full bg-gray-100 h-full">
                  <div className="md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-3xl font-black leading-9">Summary</p>
                    </div>

                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-black">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          ${total}
                        </p>
                      </div>
                      <button className="text-base leading-none w-full py-5 bg-black border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                        Checkout
                      </button>
                      <a href="/home">
                        {" "}
                        <div className="text-center mt-4 font-medium text-gray-500 hover:text-black cursor-pointer hover:underline">
                          continue shopping{" "}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div></div>
    </>
  );
}

export default Cart;
