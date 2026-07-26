import { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 1500,
    });
  };

  return (
    <div className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] mx-auto rounded-[22px] sm:rounded-[26px] lg:rounded-[30px] overflow-hidden border border-[#2a2a2a] shadow-xl flex flex-col">
      {/* Top */}
      <div className="bg-white p-3 sm:p-4 lg:p-5">
        <span className="inline-block bg-gray-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
          {product.category}
        </span>

        <div className="bg-[#ffd633] mt-4 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-xl flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] object-contain"
          />
        </div>
      </div>

      <div className="bg-[#141414] text-white p-3 sm:p-4 lg:p-5 flex flex-col flex-1">
        <p className="text-gray-400 capitalize text-xs sm:text-sm">
          {product.category}
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold leading-tight mt-3 h-[65px] sm:h-[75px] md:h-[90px] lg:h-[100px] overflow-hidden">
          {product.title}
        </h2>

        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-[#d4ff00] text-[#d4ff00] sm:w-4 sm:h-4"
            />
          ))}

          <span className="text-gray-400 text-xs sm:text-sm ml-1">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-auto">
          <hr className="border-gray-600 my-4 sm:my-5" />

          <div className="flex justify-between items-center">
            <h1 className="text-[#d4ff00] text-2xl sm:text-3xl lg:text-4xl font-bold">
              ${product.price}
            </h1>

            <button
              onClick={handleAddToCart}
              className="bg-[#d4ff00] text-black px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 duration-300 text-sm sm:text-base"
            >
              <ShoppingCart size={16} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
