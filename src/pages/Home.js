import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  // get products from product context
  const { products, } = useContext(ProductContext);
  // console.log(products)
  const [search, setSearch] = useState("");

  // filter products based on search query
  const searchedProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch className="text-2xl lg:text-3xl ml-3 text-gray-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {searchedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
