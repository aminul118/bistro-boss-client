import { HiLockClosed } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import GoogleLogin from "../../../components/GoogleLogin";
import LoginLottie from "../../../components/LoginLottie";
import { Helmet } from "react-helmet";
const Login = () => {
  return (
    <section className="min-h-[calc(100vh-288px)] flex justify-center items-center">
      <div className="flex flex-col md:flex-row container mx-auto shadow-xl rounded-2xl  ">
        <Helmet>
          <title>Login</title>
        </Helmet>
        {/* Left Side */}
        <div className="md:w-1/2  overflow-hidden z-50 relative rounded-l-2xl">
          <LoginLottie />
        </div>

        {/* Right Side */}
        <div
          className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 md:p-8 "
          data-aos="fade-right"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            Login
          </h2>
          <p className="text-gray-500 mb-8 text-center">
            Welcome! Please login to your account.
          </p>
          <form className="w-full max-w-md">
            {/* Email Field */}
            <div className="relative w-full mb-4">
              <IoMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-10 py-2 border-b rounded-md outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative w-full mb-4">
              <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-10 py-2 border-b  rounded-md outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Remember Me & Recovery */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <Link className="text-blue-500 text-sm">Recovery Password</Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-600 text-white   mb-4 hover:bg-blue-700 btn">
              Login
            </button>
            {/* Google Login */}
            <GoogleLogin />
          </form>

          {/* Sign Up Link */}
          <p className="mt-4 text-gray-500 text-center">
            Don’t have an account?
            <Link to="/register" className="text-blue-500 hover:underline ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
