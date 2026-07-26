import { useNavigate } from "react-router";
import {
  Star,
  Tags,
  Laptop,
  Shirt,
  Gem,
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
} from "lucide-react";

const categories = [
  { icon: Laptop, title: "electronics", items: 17 },
  { icon: Shirt, title: "men's clothing", items: 8 },
  { icon: Gem, title: "jewelery", items: 5 },
  { icon: Sparkles, title: "women's clothing", items: 14 },
];

const features = [
  { icon: Truck, title: "Fast Delivery", desc: "Delivery across India" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% Safe Checkout" },
  { icon: Headphones, title: "24/7 Support", desc: "Always Here" },
  { icon: RotateCcw, title: "Easy Returns", desc: "7 Days Return" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white px-4 sm:px-5 lg:px-10 py-8">
      <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 border border-zinc-700 rounded-3xl p-4 sm:p-6 lg:p-8 bg-[#111111]">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <p className="text-lime-400 uppercase tracking-widest text-xs sm:text-sm">
            Good Evening 👋
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Welcome Back,
            <br />
            <span className="text-lime-400">User</span>
          </h1>

          <p className="text-zinc-400 mt-3 sm:mt-4 lg:mt-5 max-w-xl text-sm sm:text-base">
            Discover today's picks — hand curated products across electronics,
            fashion, furniture and much more.
          </p>

          <div className="flex gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() => navigate("/main/shop")}
              className="border border-zinc-700 px-7 py-3 rounded-full"
            >
              View Products
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center gap-4">
          <div className="bg-lime-400/10 border border-lime-500 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-lime-400">20+</h2>
            <p className="text-zinc-400 mt-1">Products Available</p>
          </div>

          <div className="border border-zinc-600 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold">Free</h2>
            <p className="text-zinc-400 mt-1">Delivery on ₹999+</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-6 lg:mt-8">
        <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-5 flex gap-4">
          <Star className="text-lime-400" />
          <div>
            <h2 className="text-2xl font-bold">5</h2>
            <p className="text-zinc-400">Top Products</p>
          </div>
        </div>

        <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-5 flex gap-4">
          <Tags className="text-lime-400" />
          <div>
            <h2 className="text-2xl font-bold">4</h2>
            <p className="text-zinc-400">Categories</p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {categories.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                navigate(
                  `/main/shop?category=${encodeURIComponent(item.title)}`,
                )
              }
              className="bg-white rounded-2xl p-6 text-center hover:-translate-y-2 duration-300"
            >
              <item.icon size={42} className="mx-auto text-lime-500 mb-4" />

              <h3 className="text-black font-semibold capitalize">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{item.items} Items</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-14 lg:mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-2xl p-7 text-center"
            >
              <div className="bg-lime-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <item.icon size={32} className="text-lime-400" />
              </div>

              <h3 className="text-xl font-semibold mt-5">{item.title}</h3>

              <p className="text-zinc-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
