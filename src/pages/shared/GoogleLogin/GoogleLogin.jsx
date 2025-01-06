import google from "../../../assets/logos/google.svg";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      const name = result.user.displayName;
      const email = result.user.email;
      const userInfo = { name, email };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
    });
  };
  return (
    <div>
      <div className="divider">or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-yellow-500 text-white"
      >
        <img className="w-6 " src={google} alt="" /> Login With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
