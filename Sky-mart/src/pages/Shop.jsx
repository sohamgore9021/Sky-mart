import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const location = useLocation();
  const [productData, setproductData] = useState([]);
  const [category, setCategory] = useState("All Categories");

  const getproductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproductData(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getproductData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [location.search]);

  const categories = [
    "All Categories",
    ...new Set(productData.map((item) => item.category)),
  ];

  const filteredProducts =
    category === "All Categories"
      ? productData
      : productData.filter((item) => item.category === category);

  return (
    <div className="p-4 sm:p-6 lg:p-8 text-[#d4ff00]">
      {productData.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div>
          <div className="mb-8">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#2a2a2a] text-white px-5 py-4 pr-5 rounded-2xl border-2 border-[#d4ff00] outline-none capitalize"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 bg-black">
            {filteredProducts.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
