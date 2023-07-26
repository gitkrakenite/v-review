import { useEffect, useState } from "react";

import axios from "../axios";
import { toast } from "react-toastify";

import { Link, useParams } from "react-router-dom";
// import { singleReview } from "../dummyData";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";

import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import Comment from "../components/Comment";

const Review = () => {
  const [activeImg, setActiveImg] = useState(null);

  const checkTheMainPhoto = (url) => {
    setActiveImg(url);
  };

  useEffect(() => {
    checkTheMainPhoto();
  }, []);

  const { user } = useSelector((state) => state.auth);

  // fetch the post
  const { id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReview = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/reviews/" + id);
      if (response) {
        setLoading(false);
        setSingleReview([response.data]);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching Review.");
      toast.error("Network error or doesn't exist");
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  // const [allPosts, setAllPosts] = useState([]);

  // const fetchAllPosts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get("/post");
  //     if (response) {
  //       setAllPosts(response.data);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllPosts();
  // }, []);

  return (
    <div className=" px-[10px] sm:px-[3em] py-[20px]">
      {/* wrapper */}

      <Link to="/home">
        <p className="mb-[20px]">
          <AiOutlineArrowLeft className="text-3xl" />
        </p>
      </Link>

      {/* review */}
      {loading ? (
        <div className="h-[63vh] w-full flex items-center justify-center">
          <Spinner message="Loading Review" />
        </div>
      ) : (
        <div className="">
          {singleReview?.map((item) => (
            <div key={item._id}>
              <div className="flex flex-col xl:flex-row gap-[20px] items-center xl:items-start">
                {/* image side */}
                <div className=" flex-[0.3] xl:flex-[0.5]">
                  <img
                    src={activeImg ? activeImg : item.image1}
                    alt=""
                    className="w-full max-h-[500px] rounded-xl object-contain"
                  />

                  {/* small images */}
                  <div className="mt-[20px] flex gap-[10px] justify-center">
                    <img
                      src={item.image2}
                      alt=""
                      className=" h-[80px] w-[80px] sm:h-[200px] sm:w-[200px]  object-cover rounded-lg"
                      onClick={() => checkTheMainPhoto(item.image2)}
                    />
                    <img
                      src={item.image3}
                      alt=""
                      className="h-[80px] w-[80px] sm:h-[200px] sm:w-[200px] object-cover rounded-lg"
                      onClick={() => checkTheMainPhoto(item.image3)}
                    />
                    <img
                      src={item.image1}
                      alt=""
                      className="h-[80px] w-[80px] sm:h-[200px] sm:w-[200px] object-cover rounded-lg"
                      onClick={() => checkTheMainPhoto(item.image1)}
                    />
                  </div>
                </div>
                {/* text side */}
                <div className=" flex-[0.5]">
                  <div>
                    <div className="flex justify-between md:gap-[25px] gap-[10px] flex-wrap mb-[15px]">
                      <p className="text-xl font-bold">{item.title}</p>
                      <div>
                        {item.rating == 1 && (
                          <div className="flex items-center gap-[5px]">
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                          </div>
                        )}
                        {item.rating == 2 && (
                          <div className="flex items-center gap-[5px]">
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                          </div>
                        )}
                        {item.rating == 3 && (
                          <div className="flex items-center gap-[5px]">
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                          </div>
                        )}
                        {item.rating == 4 && (
                          <div className="flex items-center gap-[5px]">
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiOutlineStar className="text-yellow-500 text-xl" />
                          </div>
                        )}
                        {item.rating == 5 && (
                          <div className="flex items-center gap-[5px]">
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="mb-[15px]">Desc : {item.description}</p>

                    <div className="flex justify-between md:gap-[25px] gap-[10px] flex-wrap mb-[15px]">
                      <p>Posted By : {item.creator}</p>
                      {/* <p>
                      {" "}
                      <span className="text-lg text-orange-600">@</span>{" "}
                      {moment(item.createdAt).fromNow()}
                    </p> */}
                    </div>
                  </div>

                  {/* comments */}
                  <div className="my-[20px]">
                    {/* <h2 className="text-zinc-400 text-xl my-[10px]">
                    All Comments
                  </h2> */}
                    {/* create comment */}

                    {!user && (
                      <p className="text-orange-300 text-lg">
                        You need an account to comment
                      </p>
                    )}

                    {user && <Comment item={item} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
