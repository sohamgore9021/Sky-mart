import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/authContext";
import { toast } from "react-toastify";

const Register = () => {
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let formSubmit = (data) => {
    const newUser = { ...data };
    const newArr = [...registeredUsers, newUser];
    setRegisteredUsers(newArr);
    setLoggedInUser(newUser);
    localStorage.setItem("registeredusers", JSON.stringify(newArr));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    localStorage.setItem("loggedInUsers", JSON.stringify(newUser));
    toast.success("Registered successfully");
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center text-black text-xl font-bold">
            <i className="ri-flashlight-fill text-2xl"></i>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>
        <div className="bg-[#141414] border border-zinc-800 rounded-[30px] p-10 shadow-2xl">
          <h2 className="text-5xl font-bold text-white">Create account</h2>

          <p className="text-zinc-500 mt-3 text-lg">
            Join SkyMart and start shopping
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="mt-10 flex flex-col gap-6"
          >
            <div>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Full name"
                className="w-full bg-[#222] border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none focus:border-lime-400 transition"
              />

              {errors.name && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-[#222] border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none focus:border-lime-400 transition"
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
                placeholder="Password (min 6 chars)"
                className="w-full bg-[#222] border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none focus:border-lime-400 transition"
              />

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold text-xl py-4 rounded-2xl transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-zinc-500 mt-8 text-lg">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-lime-400 font-semibold hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
