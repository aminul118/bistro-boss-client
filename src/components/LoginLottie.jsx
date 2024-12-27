import Lottie from "lottie-react";
import login from "../assets/lottie/login.json";

const LoginLottie = () => {
  return (
    <div className=" w-full">
      <Lottie animationData={login} loop={true} className="h-full" />
    </div>
  );
};

export default LoginLottie;
