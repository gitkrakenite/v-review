import { useState } from "react";
import bgVideo from "../assets/v-review.mp4";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BsStarHalf } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Landing = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div>
      <div className="w-full h-[89vh]">
        {!videoLoaded && (
          <img
            src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Background Placeholder"
            className="w-full h-[100vh] object-cover"
          />
        )}

        <video
          className="w-full h-[89vh] object-cover"
          src={bgVideo}
          autoPlay
          preload="auto"
          muted
          loop
          onLoadedData={handleVideoLoad}
        />

        {/* overlay div */}
        <div className="absolute top-0 left-0 w-full h-[89vh] bg-[rgba(0,0,0,.6)]" />
        <div className="absolute w-full h-full top-0 f text-white">
          <div className="flex justify-between px-[10px]  md:px-[3em] py-[20px]">
            <h2>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                R
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                I
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                V
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                Y
              </span>
              <span className="text-lg ml-[2px]">. com</span>
            </h2>
            <Link to="/login" className="z-[999]">
              <p className="text-lg cursor-pointer bg-[#087fd4] text-white px-[12px] py-[6px] rounded-md z-20">
                Sign In
              </p>
            </Link>
          </div>
        </div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <p className=" text-2xl sm:text-4xl md:text-5xl mb-[15px] font-bold">
            Drop A Review Like A Boss,
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl mb-[20px] font-bold">
            Give your honest opinion
          </p>
          <p
            className=" text-lg sm:text-2xl mb-[20px]"
            style={{ fontWeight: 100 }}
          >
            Review Anything you want anytime
          </p>
          <Link to="/register">
            <p className="text-btn">GET STARTED TODAY</p>
          </Link>
        </div>
      </div>
      {/* other stuff */}
      <div>
        <div className=" px-[10px] sm:px-[1em] md:px-[3em] py-[20px]">
          <div>
            <h2 className=" text-lg font-bold mb-[20px]">Who We Are</h2>
            <p className="text-lg">
              We know that products and services can get expensive
            </p>
            <p className="text-lg">
              and sometimes you want worth for your hard earned cash
            </p>
            <p className="text-lg">
              our community provides reviews of products, services and much more
              including hotels
            </p>
            <p className="text-lg">
              Before spending your hard earned cash on something, why don&apos;t
              you check what our community is saying about it ?{" "}
            </p>
            <p className="text-lg">
              At the end of the day we only give our honest opinion
            </p>
          </div>
        </div>
        {/* the three values */}
        <div className="px-[10px] sm:px-[1em] md:px-[3em] py-[20px]">
          <h2 className=" text-lg font-bold mb-[20px]">Our Values</h2>
          <div className="flex flex-col sm:flex-row  gap-[15px] ">
            <div>
              <img
                src="https://images.pexels.com/photos/4116566/pexels-photo-4116566.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100%] rounded-lg"
              />
              <h2 className="text-lg font-bold">Honesty</h2>
              <p>
                At rivvy.com, we belive that honest is the best policy. we
                encourage our community to be as honest as possible while being
                respectful
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100%] rounded-lg"
              />
              <h2 className="text-lg font-bold">Transparency</h2>
              <p>
                If a product or service sucks, we will let you know without
                sugar coating it. At rivvy.com, we want you to clearly see what
                you are getting
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100%] rounded-lg"
              />

              <h2 className="text-lg font-bold">Security</h2>

              <p>
                At rivvy.com, we encourage our community to present the facts
                and let you decide what path to take. If a destination or taxi
                is unsafe we will let you know
              </p>
            </div>
          </div>
        </div>
        {/* sample reviews */}
        <div className="relative mt-[1em] h-[80vh] md:h-[72vh]">
          <img
            src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Background Placeholder"
            className="w-full h-[80vh] md:h-[72vh] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
          <div className="absolute w-full h-full top-0 flex flex-col px-[10px] sm:px-[1em] md:px-[3em] py-[20px] text-white">
            <h2 className="text-3xl font-bold">REVIEWS</h2>
            <div className="flex w-full justify-between">
              <p className="mt-[15px]">Best reviews from the community</p>
              <Link to="/home">
                <div className="flex items-center gap-[5px] border-2 border-zinc-300 rounded-2xl p-[9px] cursor-pointer">
                  <p>All Reviews</p>
                  <p>
                    <AiOutlineArrowRight />
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-[15px] mt-[20px]">
              <div>
                <img
                  src="https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[100%]"
                />
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <RxAvatar className="text-2xl" />
                  <p className=" font-bold">guhanthra</p>
                </div>
                <div className=" flex justify-between items-center mb-[10px]">
                  <p className="mt-[10px] font-bold">Jagazi Resort</p>
                  <div className="flex gap-[8px] items-center">
                    <CiLocationOn className="text-2xl" />
                    <p>Mauritius</p>
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <BsStarHalf className="text-yellow-500 text-xl" />
                </div>
                <p className="mt-[10px]">
                  It is very beuatiful. The service is incredible. Though
                  expensive I feel like I enjoyed my time there and I would like
                  to go back there. Definitely worth it{" "}
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/7363202/pexels-photo-7363202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[100%]"
                />
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <RxAvatar className="text-2xl" />
                  <p className=" font-bold">mercyjones</p>
                </div>
                <div className=" flex justify-between items-center mb-[10px]">
                  <p className="mt-[10px] font-bold">Sendy Ltd</p>
                  <div className="flex gap-[8px] items-center">
                    <CiLocationOn className="text-2xl" />
                    <p>Nairobi</p>
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                </div>
                <p className="mt-[10px]">
                  Fast and reliable delivery across the country and even East
                  Africa. Worth every penny
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[100%]"
                />
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <RxAvatar className="text-2xl" />
                  <p className=" font-bold">kelvintitan</p>
                </div>
                <div className=" flex justify-between items-center mb-[10px]">
                  <p className="mt-[10px] font-bold">Hives Patries</p>
                  <div className="flex gap-[8px] items-center">
                    <CiLocationOn className="text-2xl" />
                    <p>Thika</p>
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <AiFillStar className="text-yellow-500 text-xl" />
                </div>
                <p className="mt-[10px]">
                  The cakes are affordable and sweet. A good place to relax and
                  enjoy sweetness of life.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Landing;
