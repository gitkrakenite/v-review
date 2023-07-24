import { useEffect, useState } from "react";

// import axios from "../axios";
import { toast } from "react-toastify";

import { Link, useParams } from "react-router-dom";
import { singleReview } from "../dummyData";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
// import moment from "moment";
// import Spinner from "../components/Spinner";
// import { useSelector } from "react-redux";

const Review = () => {
  const [activeImg, setActiveImg] = useState(null);

  const checkTheMainPhoto = (url) => {
    setActiveImg(url);
  };

  useEffect(() => {
    checkTheMainPhoto();
  }, []);

  // const { user } = useSelector((state) => state.auth);

  // fetch the post
  // const { postId } = useParams();
  // const [singlePost, setSinglePost] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchPost = async (id) => {
  //   try {
  //     setLoading(true);
  //     let checkParam = id ? id : postId;
  //     const response = await axios.get("/post/" + checkParam);
  //     if (response) {
  //       setLoading(false);
  //       setSinglePost([response.data]);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error("Error Fetching Product.");
  //     toast.error("Network error or doesn't exist");
  //   }
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  // comment
  // const [comment, setComment] = useState("");
  // const [loadingComment, setLoadingComment] = useState(false);

  // const handleComment = async (product) => {
  //   try {
  //     if (!comment) {
  //       toast.error("bid cannot be empty");
  //       return;
  //     }

  //     setLoadingComment(true);

  //     let username = user.username;
  //     let id = product._id;
  //     let commentData = { username, comment };

  //     await axios.post("/post/comment/" + id, commentData);
  //     setLoadingComment(false);
  //     setComment("");
  //     await fetchPost();

  //     //Now create notification
  //     let author = user.username;
  //     let productTitle = product.title;
  //     let productId = product._id;
  //     let content = comment;
  //     let recipient = product.creator;
  //     let notificationData = {
  //       author,
  //       productTitle,
  //       productId,
  //       content,
  //       recipient,
  //     };

  //     await axios.post("/notify", notificationData);
  //   } catch (error) {
  //     setLoadingComment(false);
  //     toast.error("Failed To Create Comment");
  //   }
  // };

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

      <div className="">
        {/* {loading && (
          <div className="my-[4em]">
            <Spinner message="Fetching Product" />
          </div>
        )} */}

        {singleReview?.map((item) => (
          <div key={item.id}>
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
                  <h2 className="text-zinc-400 text-xl my-[10px]">
                    All Comments
                  </h2>
                  {/* create comment */}
                  {/* 
                  {!user && (
                    <p className="text-orange-300 text-lg">
                      You need an account to create a bid
                    </p>
                  )} */}

                  {/* {user && (
                    <>
                      <form onSubmit={() => handleComment(item)}>
                        <div>
                          <label htmlFor="comment" className="text-zinc-400">
                            {user?.username == item.creator ? (
                              <div className="text-orange-400 ">
                                Reply To Bids
                              </div>
                            ) : (
                              <>
                                Create a bid and add{" "}
                                <span className="text-orange-300">
                                  your number
                                </span>
                              </>
                            )}

                            {user?.username == item.creator ? (
                              <p className="mt-[10px]">
                                If You like a bid you can ask the bidder for
                                contact info
                              </p>
                            ) : (
                              <p className="mt-[10px]">
                                ** If you win, the owner will call you **
                              </p>
                            )}
                          </label>
                        </div>
                        <div className="flex items-center pt-[20px] w-[100%]  gap-[10px] ">
                          <p className=" hidden md:flex">
                            <span className="bg-orange-700 text-zinc-300 px-2 py-3 rounded-full text-2xl flex items-center justify-center w-10 h-10">
                              {user?.username.slice(0, 1)}
                            </span>
                          </p>
                          <input
                            type="text"
                            id="comment"
                            placeholder={
                              user?.username == item.creator
                                ? "reply to any bid"
                                : `create bid for ${item.title}`
                            }
                            className="w-[100%] bg-transparent p-[8px] outline-none border-none rounded-md"
                            style={{ border: "1px solid #5e5d5d" }}
                            required
                            maxLength={120}
                            minLength={5}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                          <p
                            className="cursor-pointer"
                            onClick={() => handleComment(item)}
                          >
                            {loadingComment ? (
                              <span className="bg-orange-800 p-[8px] rounded-lg">
                                bidding..
                              </span>
                            ) : (
                              <span className="bg-emerald-800 p-[8px] rounded-lg">
                                {user?.username == item.creator
                                  ? "reply"
                                  : `Bid`}
                              </span>
                            )}
                          </p>
                        </div>
                      </form>
                    </>
                  )} */}

                  {/* show all comments */}
                  <div className="mt-[30px] max-h-[20vh] overflow-y-scroll prompt  p-[5px] rounded-lg">
                    {/* {console.log(item.comments)} */}

                    {/* fetch comments from latest to earliest */}
                    {item.comments.length >= 1 ? (
                      <>
                        {[...item.comments].reverse().map((item, index) => (
                          <div className="" key={index}>
                            <div
                              className=" block md:flex items-center gap-[20px] mb-[16px] pb-[10px]"
                              style={{ borderBottom: "1px solid #5c5b5b" }}
                            >
                              <p className="">
                                <span className="text-emerald-700">
                                  {item.sender}
                                </span>
                              </p>
                              <p className="text-zinc-700 text-md">
                                {item.comment}
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="p-[10px] text-gray-400">
                        <p>
                          No Comments for{" "}
                          <span className="text-gray-200">{item?.title}</span>{" "}
                          Yet
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
