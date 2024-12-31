import Lottie from "lottie-react";
import spinner from "../../assets/lottie/food-cooking.json";
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-220px)]">
      <Lottie className="w-64" animationData={spinner} />
     
    </div>
  );
};

export default Loading;
