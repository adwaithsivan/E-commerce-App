import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products = []}) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {
            products.map((product) => {
                console.log(product,'product')
                const { id, title, price, category, image } = product
              return (
                <Link to={`/products/${id}`} class="lg:w-1/4 md:w-1/2 sm:w-1/2 p-4 w-full cursor-pointer" >
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={id}
                      class="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p class="mt-1 font-semibold">${price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
