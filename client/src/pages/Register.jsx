import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return toast.error("Please Fill All Fields", { theme: "dark" });
    }
    if (cpassword !== password) {
      return toast.error("Password don't match", { theme: "dark" });
    }
  };

  return (
    <div className=" px-[10px] sm:px-[3em] lg:px-[5em] py-[2em]">
      <div className="mb-[2.6em]">
        <h2>
          <span className="text-2xl bg-black px-[8px] py-[3px] rounded-md font-bold text-white mr-[4px]">
            R
          </span>
          <span className="text-2xl bg-black px-[8px] py-[3px] rounded-md font-bold text-white mr-[4px]">
            I
          </span>
          <span className="text-2xl bg-black px-[8px] py-[3px] rounded-md font-bold text-white mr-[4px]">
            V
          </span>
          <span className="text-2xl bg-black px-[8px] py-[3px] rounded-md font-bold text-white mr-[4px]">
            Y
          </span>
          <span className="text-lg ml-[2px]">. com</span>
        </h2>
      </div>
      {/* wrapper */}
      <div className="h-[80vh] flex justify-center items-center w-[100%]">
        <div className="w-[100%] flex justify-center items-center">
          <form
            className=" w-[98%] sm:w-[85%] md:w-[60%]  xl:w-[45%] 2xl:w-[30%]"
            onSubmit={handleRegister}
          >
            <div className="flex flex-col gap-[10px] mb-[15px]">
              <label
                htmlFor="username"
                className="font-bold text-xl text-zinc-600"
              >
                Create A Username
              </label>
              <input
                type="text"
                placeholder="username"
                id="username"
                required
                className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                value={username}
                minLength={3}
                maxLength={18}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[15px]">
              <label
                htmlFor="email"
                className="font-bold text-xl text-zinc-600"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                placeholder="email"
                id="email"
                required
                className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                value={email}
                minLength={3}
                maxLength={25}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-[15px] mb-[20px]">
              <div className=" flex-[0.9] flex flex-col gap-[10px]">
                <label
                  htmlFor="password"
                  className="font-bold text-xl text-zinc-600"
                >
                  Create A Strong Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  id="password"
                  required
                  className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                  value={password}
                  minLength={3}
                  maxLength={18}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex-[0.1] flex mt-[35px] justify-end">
                {showPass ? (
                  <AiOutlineEyeInvisible
                    className="text-3xl cursor-pointer"
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <AiOutlineEye
                    className="text-3xl cursor-pointer"
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mb-[15px]">
              <label
                htmlFor="password"
                className="font-bold text-xl text-zinc-600"
              >
                Confirm Your Password
              </label>
              <input
                type="password"
                placeholder="password"
                id="password"
                required
                className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                value={cpassword}
                minLength={3}
                maxLength={18}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-[#087fd4] w-full p-[9px] rounded-md text-zinc-300 hover:text-zinc-200"
                onClick={handleRegister}
              >
                Set Up Account
              </button>
            </div>
            <div className="mt-[30px] flex items-center gap-[20px] flex-wrap justify-between">
              <Link to="/login" className="underline">
                <p>Already Have An Account ? </p>
              </Link>
              <a href="mailto:daysseller@gmail.com" className="underline">
                Mail Admin
              </a>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Register;
