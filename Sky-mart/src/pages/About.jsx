import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-lime-400 flex items-center justify-center mb-10">
          <i className="ri-flashlight-fill text-4xl text-black"></i>
        </div>

        <h1 className="text-6xl font-bold">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="text-gray-500 text-xl mt-8 max-w-3xl mx-auto">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair and enjoyable for everyone.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="border border-gray-700 rounded-3xl py-10">
            <h2 className="text-5xl font-bold text-lime-400">20K+</h2>
            <p className="text-gray-500 mt-3">Products</p>
          </div>

          <div className="border border-gray-700 rounded-3xl py-10">
            <h2 className="text-5xl font-bold text-lime-400">50K+</h2>
            <p className="text-gray-500 mt-3">Happy Customers</p>
          </div>

          <div className="border border-gray-700 rounded-3xl py-10">
            <h2 className="text-5xl font-bold text-lime-400">4.9</h2>
            <p className="text-gray-500 mt-3">Avg Rating</p>
          </div>

          <div className="border border-gray-700 rounded-3xl py-10">
            <h2 className="text-5xl font-bold text-lime-400">99%</h2>
            <p className="text-gray-500 mt-3">On-time Delivery</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-gray-700 rounded-3xl p-12">
          <h2 className="text-5xl font-bold mb-10">Our Story</h2>

          <p className="text-gray-400 text-xl leading-10">
            SkyMart started in 2022 as a small side project by two developers
            who wanted online shopping to feel simple, fast and enjoyable.
          </p>

          <p className="text-gray-400 text-xl leading-10 mt-8">
            Today, SkyMart serves thousands of customers across the country,
            offering electronics, fashion, home essentials and more at
            affordable prices.
          </p>

          <p className="text-gray-400 text-xl leading-10 mt-8">
            Our mission remains the same — provide trusted products, transparent
            pricing and an experience customers love.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4 text-lime-400">Trust</h3>
            <p className="text-gray-400 text-lg">
              Every product is verified for quality and authenticity before
              listing.
            </p>
          </div>

          <div className="border border-gray-700 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4 text-lime-400">Speed</h3>
            <p className="text-gray-400 text-lg">
              Fast delivery and smooth shopping experience for every customer.
            </p>
          </div>

          <div className="border border-gray-700 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4 text-lime-400">Community</h3>
            <p className="text-gray-400 text-lg">
              We improve based on real customer feedback.
            </p>
          </div>

          <div className="border border-gray-700 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4 text-lime-400">Quality</h3>
            <p className="text-gray-400 text-lg">
              Carefully selected products with no compromise on quality.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-lime-700 rounded-3xl py-20 text-center">
          <h2 className="text-5xl font-bold">Ready to Shop?</h2>

          <p className="text-gray-400 text-xl mt-6">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/main/shop")}
            className="mt-10 bg-lime-400 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-lime-300 transition"
          >
            Browse Products →
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
