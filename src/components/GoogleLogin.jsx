import google from "../assets/logos/google.svg";

const GoogleLogin = () => {
  return (
    <div>
      <button className="w-full flex items-center justify-center gap-2  btn">
        <img className="w-7" src={google} alt="" /> Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
