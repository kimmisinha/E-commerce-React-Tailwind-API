import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import { useDebounce } from "use-debounce";
const Home = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [search, setSearch] = useState(""); // State for search input

  const [debouncedSearch]=useDebounce(search,4000);
  console.log("debouncedSearch",debouncedSearch)
  // Filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Effect to update filtered products when search or products change
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset current page when search changes
  }, [products, debouncedSearch]);

  // Total number of items after filtering
  const totalItems = filteredProducts.length;

  // Calculate pagination boundaries
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredProducts.slice(firstIndex, lastIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          {/* Search input */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => setSearch("")}
              className="ml-2 bg-gray-200 px-3 py-1 rounded-md text-gray-600 focus:outline-none"
            >
              Clear
            </button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {currentItems.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-gray-200 rounded"
        >
          Previous
        </button>
        <span className="text-lg">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={lastIndex >= totalItems}
          className="px-4 py-2 ml-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
