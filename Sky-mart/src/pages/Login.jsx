import { useContext } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/authContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setLoggedInUser, registeredUsers } = useContext(Auth);
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let formSubmit = (data) => {
    const user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Invalid creds");
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("loggedInUsers", JSON.stringify(user));
    toast.success("User loggedIn");
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex">
      <div className="hidden lg:flex w-1/2 border-r border-zinc-700 flex-col justify-between p-14">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center text-black font-bold text-xl">
              <i className="ri-flashlight-fill text-2xl"></i>
            </div>
            <h1 className="text-4xl font-bold">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          <div className="mt-10">
            <p className="text-lime-400 font-semibold tracking-widest uppercase">
              Welcome Back
            </p>

            <h1 className="text-7xl font-bold leading-tight mt-2">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h1>
            <p className="text-zinc-400 text-xl mt-2 max-w-xl">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="border border-zinc-600 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-lime-400">20K+</h2>
            <p className="text-zinc-400 mt-2">Products</p>
          </div>

          <div className="border border-zinc-600 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-lime-400">50K+</h2>
            <p className="text-zinc-400 mt-2">Users</p>
          </div>

          <div className="border border-zinc-600 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-lime-400">4.9★</h2>
            <p className="text-zinc-400 mt-2">Rating</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-[#141414] rounded-3xl border border-zinc-800 p-10 shadow-2xl">
          <h2 className="text-5xl font-bold">Sign in</h2>
          <p className="text-zinc-500 mt-3">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-6 mt-10"
          >
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-[#222] border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-lime-400"
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full bg-[#222] border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-lime-400"
              />

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-300 text-black font-semibold py-4 rounded-2xl text-xl transition"
            >
              Sign In →
            </button>
          </form>

          <p className="text-center text-zinc-500 mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/Register")}
              className="text-lime-400 font-semibold hover:underline"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
