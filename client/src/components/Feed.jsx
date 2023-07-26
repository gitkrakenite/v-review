import {
  AiFillStar,
  AiOutlineArrowUp,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";

import { Link } from "react-router-dom";
// import { BsStarHalf } from "react-icons/bs";
import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import axios from "../axios";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const Feed = () => {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // fetch reviews
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/reviews");
      if (response) {
        setLoading(false);
        setReviews(response.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Network Error");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // search  states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search user func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);
    // console.log(searchText);

    handleScrollTop();

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = reviews?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <div>
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-[#0495ca] text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
      {/* wrapper */}
      <div>
        {/* search bar */}
        <div className="mb-[20px] sticky top-[3.7em] z-[999] ">
          <form className="flex items-center gap-[10px] border-2 bg-black text-white sm:bg-zinc-200 sm:text-zinc-800  border-zinc-600 p-[5px] rounded-xl w-[98%] sm:w-[55%] lg:w-[33%] ">
            <AiOutlineSearch className="text-3xl text-zinc-600" />
            <input
              type="text"
              className="bg-transparent w-full border-none outline-none"
              maxLength={20}
              placeholder="search"
              required
              value={searchText}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        {/* reviews */}

        {searchText ? (
          <>
            <div className="mb-[15px] text-zinc-400 text-sm">
              {searchText && <p>Results For : {searchText} </p>}
            </div>

            {searchedResults?.length >= 1 ? (
              <>
                <div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid "
                    columnClassName="my-masonry-grid_column"
                  >
                    {searchedResults?.map((item) => (
                      <div key={item._id} className="mb-[1.2em] ">
                        <Link to={`/review/${item.id}`}>
                          <div>
                            <img src={item.image1} alt="" />

                            {/*  */}
                            <div className="px-[8px] pb-[10px]">
                              <div className="flex justify-between mt-[10px] items-center">
                                <p className="text-lg text-zinc-600 font-bold ">
                                  {item.title}
                                </p>
                                {/* rating */}
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
                              {/*  */}
                              <p className="mt-[5px]">
                                {item.description.substring(0, 43)}...
                              </p>
                              {/*  */}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Masonry>
                </div>
              </>
            ) : (
              <>
                <p>😥oops no results for {searchText}</p>
              </>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div className="mt-[5em]">
                <Spinner message="Fetching Reviews" />
              </div>
            ) : (
              <div>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid "
                  columnClassName="my-masonry-grid_column"
                >
                  {reviews?.map((item) => (
                    <div key={item._id} className="mb-[1.2em] bg-zinc-300 ">
                      <Link to={`/review/${item._id}`}>
                        <div>
                          <img src={item.image1} alt="" />
                          {/*  */}
                          <div className="px-[8px] pb-[10px]">
                            <div className="flex justify-between mt-[10px] items-center">
                              <p className="text-lg text-zinc-600 font-bold ">
                                {item.title}
                              </p>
                              {/* rating */}
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
                            {/*  */}
                            <p className="mt-[5px]">
                              {item.description.substring(0, 43)}...
                            </p>
                            {/*  */}
                          </div>

                          {/*  */}
                        </div>
                      </Link>
                    </div>
                  ))}
                </Masonry>
              </div>
            )}
          </>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default Feed;
