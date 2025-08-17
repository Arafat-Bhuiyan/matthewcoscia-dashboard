import woman from "../../assets/women.png";
import star from "../../assets/star.png";
import bg from "../../assets/login-bg.png";
import lock from "../../assets/lock.png";
import user from "../../assets/user.png";

const Login = () => {
  return (
    <div className="bg-white w-full h-screen flex shadow-lg overflow-hidden">
      {/* Container */}
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16">
        <h2 className="text-2xl font-bold mb-8">LOGIN</h2>

        {/* Username */}
        <div className="w-full flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-4 gap-2">
          <img src={user} className="w-5 h-5" alt="" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none flex-1 text-gray-600"
          />
        </div>

        {/* Password */}
        <div className="w-full flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-6 gap-2">
          <img src={lock} className="w-5 h-5" alt="" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none flex-1 text-gray-600"
          />
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:opacity-90">
          Login Now
        </button>
      </div>

      {/* Right Side - Welcome */}
      <div className="w-1/2 h-screen relative">
        <img src={bg} alt="" />
        <div className="bg-black/10 rounded-3xl absolute top-28 left-28 p-52">
          <p className="text-start font-semibold text-3xl text-white absolute top-4 left-5">
            Welcome
          </p>
        </div>
        <img src={woman} className="absolute top-[101px] right-5" alt="" />
        <img src={star} className="w-12 h-12 absolute top-96 left-24" alt="" />
      </div>
    </div>
  );
};

export default Login;
