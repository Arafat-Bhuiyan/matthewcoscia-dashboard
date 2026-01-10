import woman from "../../assets/women.png";
import star from "../../assets/star.png";
import bg from "../../assets/login-bg.png";
import lock from "../../assets/lock.png";
import user from "../../assets/user.png";

const Login = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col lg:flex-row shadow-lg lg:overflow-hidden">
      {/* Container */}
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-8 md:px-16 min-h-screen lg:min-h-0">
        <div className="w-full max-w-md lg:w-96 flex flex-col items-center justify-center">
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
      </div>

      {/* Right Side - Welcome */}
      <div className="hidden lg:flex w-1/2 min-h-screen relative justify-center items-center">
        <img
          src={bg}
          className="w-full h-full object-cover absolute inset-0"
          alt=""
        />
        <div className="bg-black/10 w-[412px] h-[524px] rounded-3xl relative p-52">
          <p className="text-start font-semibold text-3xl text-white absolute top-4 left-5">
            Welcome
          </p>
        </div>
        <img src={woman} className="absolute h-[524px] right-40" alt="" />
        <img
          src={star}
          className="w-12 h-12 absolute bottom-80 left-[249px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
