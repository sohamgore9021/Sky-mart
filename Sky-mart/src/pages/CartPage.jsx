import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } =
    useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast.info("Item removed from cart", {
      position: "bottom-right",
      autoClose: 1500,
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!", {
        position: "bottom-right",
        autoClose: 1500,
      });
      return;
    }
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 1500,
    });
    clearCart();
  };

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white px-4 sm:px-5 lg:px-10 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400 text-xl mb-4">Your cart is empty</p>
          <button
            onClick={() => window.history.back()}
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#111111] border border-zinc-700 rounded-2xl p-3 sm:p-4 lg:p-5 flex gap-3 sm:gap-4 flex-col sm:flex-row"
                >
                  <div className="bg-[#ffd633] w-20 sm:w-24 h-20 sm:h-24 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                    />
                  </div>

                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                      {item.category}
                    </p>
                    <p className="text-lime-400 font-bold text-lg sm:text-xl">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>

                    <div className="flex items-center gap-2 bg-[#222222] rounded-full px-3 py-1">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-6 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="font-bold text-lime-400">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-4 sm:p-6 sticky top-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-zinc-700">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Tax:</span>
                  <span>${(getTotal() * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-3xl font-bold text-lime-400">
                  ${(getTotal() * 1.1).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-lime-400 text-black font-semibold py-3 rounded-full hover:scale-105 duration-300 mb-3"
              >
                Checkout
              </button>

              <button
                onClick={() => clearCart()}
                className="w-full border border-zinc-700 text-zinc-400 font-semibold py-3 rounded-full hover:text-white hover:border-white duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
