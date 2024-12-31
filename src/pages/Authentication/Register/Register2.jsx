import { Link } from "react-router-dom";
import loginImg from "../../../assets/others/authentication2.png";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
const Register2 = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register</title>
      </Helmet>
      <section className="bg-login-img min-h-screen flex items-center justify-center p-4 sm:p-">
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
          <div className="w-full max-w-lg max-w p-4 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                />
                <p className="text-red-500">
                  {errors.name && <span>* This field is required</span>}
                </p>
              </div>
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                />
                <p className="text-red-500">
                  {errors.email && <span>* This field is required</span>}
                </p>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  })}
                  placeholder="Password"
                  className="w-full p-3 rounded-lg focus:outline-yellow-500"
                />
                <p className="text-red-500">
                  {errors.password?.type === "required" && (
                    <span>* This field is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span>* At least need 6 charechter</span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span>
                      * at least one uppercase letter, one lowercase letter, and
                      one number
                    </span>
                  )}
                </p>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button className="w-full btn bg-yellow-500 text-white hover:text-black p-3 rounded-lg">
                  Register
                </button>
                <p className="py-3 ">
                  Have an Account? please
                  <Link
                    to="/login"
                    className="hover:underline text-blue-400 ml-2"
                  >
                    Login
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

export default Register2;
