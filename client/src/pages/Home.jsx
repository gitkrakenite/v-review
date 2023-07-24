import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import { AiOutlinePlus } from "react-icons/ai";
// import Tips from "../components/Tips";

const Home = () => {
  return (
    <div>
      {/* wrapper */}
      <div className=" px-[5px] sm:px-[3em] py-[1em]">
        {/* topbar */}
        <div className="flex justify-between items-center mb-[1.6em] sticky top-0 left-0 py-[5px] bg-zinc-200">
          <div>
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
          <div className="flex items-center gap-[2.3em]">
            <Link to="/create-review">
              <p>
                <AiOutlinePlus
                  className="text-4xl bg-[#087fd4] text-white p-[8px] rounded-lg"
                  title="create review"
                />
              </p>
            </Link>
            <p>LOGOUT</p>
          </div>
        </div>
        {/* wrapper */}
        <div className="">
          <div className="">
            <Feed />
          </div>
          {/* wdigets */}
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
