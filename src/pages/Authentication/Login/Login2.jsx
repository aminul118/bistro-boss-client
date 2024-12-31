import { useEffect, useState } from "react";
import loginImg from "../../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login2 = () => {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const path = location.state || "/";

  useEffect(() => {
    loadCaptchaEnginge(6, "#F0F8FF00");
  }, []);

  const handleValidateCaptcha = (e) => {
    const captcha = e.target.value;
    if (validateCaptcha(captcha, false)) {
      setIsCaptchaValid(true);
      setErrorMessage("");
    } else {
      setIsCaptchaValid(false);
      setErrorMessage("Captcha Does Not Match");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      setErrorMessage("Please validate the captcha before submitting.");
      return;
    }

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Login Attempt:", email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("login success");
        console.log("Logged in user:", user);
        navigate(path);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        setErrorMessage("Login failed. Please check your credentials.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>
      <section className="bg-login-img min-h-screen flex items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl shadow-2xl rounded-lg lg:py-36 overflow-hidden">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4 sm:p-8 flex justify-center">
            <img
              src={loginImg}
              alt="Login Illustration"
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-lg p-4 sm:p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                  required
                />
              </div>

              {/* Captcha Section */}
              <div>
                <LoadCanvasTemplate />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Captcha</span>
                </label>
                <input
                  onKeyUp={handleValidateCaptcha}
                  type="text"
                  placeholder="Type the captcha"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                  required
                />
                <p className="text-red-500">{errorMessage}</p>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className={`w-full btn ${
                    isCaptchaValid ? "bg-yellow-500" : "bg-gray-400"
                  } text-white hover:text-black p-3 rounded-lg`}
                  disabled={!isCaptchaValid}
                >
                  Login
                </button>
                <p className="py-3">
                  Do not have an account?{" "}
                  <Link
                    to="/register"
                    className="hover:underline text-blue-400 ml-2"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login2;
