import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <img
        className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
        src={user?.photoURL || "/default-profile.png"}
        alt={user?.displayName || "User Profile"}
      />
      <p className="mt-4 text-lg font-semibold">
        User Name: {user?.displayName || "Anonymous User"}
      </p>
      <button onClick={logOut} className="btn btn-warning">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
