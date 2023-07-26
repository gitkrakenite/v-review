import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Create = () => {
  const [proceed, setProceed] = useState(false);
  const [imagePreview1, setImagePreview1] = useState("");
  const [imagePreview2, setImagePreview2] = useState("");
  const [imagePreview3, setImagePreview3] = useState("");

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingImg1, setLoadingImg1] = useState(false);
  const [loadingImg2, setLoadingImg2] = useState(false);
  const [loadingImg3, setLoadingImg3] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const handleVerify = async () => {
    try {
      setLoadingAuth(true);
      if (!title) {
        setLoadingAuth(false);
        return toast.error("Name cannot be empty");
      }
      const nameToCheck = { title };
      const { data } = await axios.post("/reviews/check", nameToCheck);
      if (data == "not exist") {
        setLoadingAuth(false);
        setProceed(true);
      } else {
        toast.warning(`${title} exists. You can contribute to the review`, {
          theme: "dark",
        });
        setLoadingAuth(false);
        setProceed(false);
        return;
      }
      setLoadingAuth(false);
    } catch (error) {
      toast.error("Failed To Add");
    }
  };

  const postFirstPhoto = async (pic) => {
    if (pic === null || undefined) {
      toast.error("Please select first photo");
      setLoading(false);
      return;
    }

    setImagePreview1(URL.createObjectURL(pic));

    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "p2jnu3t2");
    try {
      setLoadingImg1(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqs3ukux/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const urlData = await res.json();
      setLoadingImg1(false);
      setImage1(urlData.url);
      toast.success("Uploaded First Photo");
      // console.log(`mainPhoto: ${mainPhoto}`);
    } catch (error) {
      setLoading(false);
      setLoadingImg1(false);
      toast.error("Error uploading First Photo");
    }
  };

  const postSecPhoto = async (pic) => {
    setLoadingImg2(true);
    if (pic === null || undefined) {
      toast.error("Please select second photo");
      setLoadingImg2(false);
      return;
    }

    setImagePreview2(URL.createObjectURL(pic));

    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "p2jnu3t2");
    try {
      setLoadingImg2(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqs3ukux/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const urlData = await res.json();
      setLoadingImg2(false);
      setImage2(urlData.url);
      toast.success("Uploaded Second Photo");
      // console.log(`mainPhoto: ${mainPhoto}`);
    } catch (error) {
      setLoading(false);
      setLoadingImg1(false);
      toast.error("Error uploading Second Photo");
    }
    setLoadingImg2(false);
  };
  const postThirdPhoto = async (pic) => {
    setLoadingImg3(true);
    if (pic === null || undefined) {
      toast.error("Please select Third photo");
      setLoadingImg3(false);
      return;
    }

    setImagePreview3(URL.createObjectURL(pic));

    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "p2jnu3t2");
    try {
      setLoadingImg3(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqs3ukux/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const urlData = await res.json();
      setLoadingImg3(false);
      setImage3(urlData.url);
      toast.success("Uploaded Third Photo");
      // console.log(`mainPhoto: ${mainPhoto}`);
    } catch (error) {
      setLoadingImg1(false);
      toast.error("Error uploading Third Photo");
    }
    setLoadingImg3(false);
  };

  const handleSubmit = async () => {
    let creator = user?.username;
    const reviewData = {
      title,
      description,
      category,
      rating,
      creator,
      image1,
      image2,
      image3,
    };
    const response = await axios.post("/reviews", reviewData);
    if (response) {
      setLoading(false);

      navigate("/home");
    }
    return;
  };

  return (
    <div>
      {/* wrapper */}
      <div className=" px-[10px] sm:px-[3em] md:px-[5em] py-[15px]">
        <div>
          <Link to="/home">
            <p className="mb-[20px]">
              <AiOutlineArrowLeft className="text-3xl" />
            </p>
          </Link>
          <h2 className="mb-[20px] font-bold text-xl">
            Hello Let Us Create A New Place To Review
          </h2>
        </div>
        <form className=" w-[98%] sm:w-[85%]  lg:w-[70%] xl:w-[60%] 2xl:w-[40%] m-auto">
          <div>
            <div className="flex flex-col gap-[10px] mb-[18px]">
              <label htmlFor="title" className="font-bold text-zinc-500">
                Name Of What You Want To Review
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="i.e zilla restaurant"
                className="bg-transparent outline-none border-2 border-zinc-500 p-[5px] rounded-md"
                minLength={4}
                maxLength={40}
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {!proceed && (
              <>
                {loadingAuth ? (
                  <Spinner message="validating ..." />
                ) : (
                  <div
                    className="flex gap-[6px] items-center cursor-pointer"
                    onClick={handleVerify}
                  >
                    <p>Check Availability</p>
                    <AiOutlineArrowRight className="text-xl" />
                  </div>
                )}
              </>
            )}
          </div>
          {/* if proceed  */}
          {proceed && (
            <>
              <div className="flex flex-col gap-[10px] mb-[18px] mt-[30px]">
                <label
                  htmlFor="description"
                  className="font-bold text-zinc-500"
                >
                  Description and Details
                </label>

                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  className="bg-transparent outline-none border-2 border-zinc-500 p-[5px] rounded-md"
                  placeholder="more details of review"
                  minLength={4}
                  maxLength={200}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              {/*  */}
              <div className="flex flex-col gap-[10px] mb-[33px]">
                <label htmlFor="rating" className="font-bold text-zinc-500">
                  Select The Best Rating
                </label>
                <select
                  name="rating"
                  id="rating"
                  className="bg-transparent outline-none border-2 border-zinc-500 p-[5px] rounded-md"
                  required
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Choose</option>
                  <option value="1">One Star</option>
                  <option value="2">Two Stars</option>
                  <option value="3">Three Stars</option>
                  <option value="4">Four Stars</option>
                  <option value="5">Five Stars</option>
                </select>
              </div>
              {/*  */}
              <div className="flex flex-col gap-[10px] mb-[33px]">
                <label htmlFor="category" className="font-bold text-zinc-500">
                  Select The Best Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="bg-transparent outline-none border-2 border-zinc-500 p-[5px] rounded-md"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose</option>
                  <option value="automobile">Automobile</option>
                  <option value="hotel">Hotel</option>
                  <option value="movies">Movies&Shows</option>
                  <option value="sports">Sports&fitness</option>
                  <option value="fashion">fashion&style</option>
                  <option value="house">house&products</option>
                  <option value="equipment">Equipment</option>
                  <option value="other">Others</option>
                </select>
              </div>
              {/*  */}
              <div className="mb-[32px]">
                <label
                  htmlFor="image1"
                  className="flex gap-[40px] items-center"
                >
                  {imagePreview1 ? (
                    <img
                      src={imagePreview1}
                      alt=""
                      className="h-[80px] object-contain"
                    />
                  ) : (
                    <BiImageAdd className="text-5xl" />
                  )}

                  {loadingImg1 ? (
                    <Spinner />
                  ) : (
                    <div>
                      <p className="font-bold text-zinc-500">Upload Image</p>
                      <p className="text-sm">** required **</p>
                    </div>
                  )}
                </label>

                <input
                  type="file"
                  name="image1"
                  id="image1"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => postFirstPhoto(e.target.files[0])}
                />
              </div>
              {/*  */}
              <div className="mb-[32px]">
                <label
                  htmlFor="image2"
                  className="flex gap-[40px] items-center"
                >
                  {imagePreview2 ? (
                    <img
                      src={imagePreview2}
                      alt=""
                      className="h-[80px] object-contain"
                    />
                  ) : (
                    <BiImageAdd className="text-5xl" />
                  )}

                  {loadingImg2 ? (
                    <Spinner />
                  ) : (
                    <div>
                      <p className="font-bold text-zinc-500">
                        Upload Second Image
                      </p>
                      <p className="text-sm">** required **</p>
                    </div>
                  )}
                </label>

                <input
                  type="file"
                  name="image2"
                  id="image2"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => postSecPhoto(e.target.files[0])}
                />
              </div>
              {/*  */}
              <div className="mt-[12px]">
                <label
                  htmlFor="image3"
                  className="flex gap-[40px] items-center"
                >
                  {imagePreview3 ? (
                    <img
                      src={imagePreview3}
                      alt=""
                      className="h-[80px] object-contain"
                    />
                  ) : (
                    <BiImageAdd className="text-5xl" />
                  )}

                  {loadingImg3 ? (
                    <Spinner />
                  ) : (
                    <div>
                      <p className="font-bold text-zinc-500">
                        Upload Third Image
                      </p>
                      <p className="text-sm">** required **</p>
                    </div>
                  )}
                </label>

                <input
                  type="file"
                  name="image3"
                  id="image3"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => postThirdPhoto(e.target.files[0])}
                />
              </div>
              {/*  */}
              {loading ? (
                <Spinner />
              ) : (
                <button
                  className="mt-[30px] bg-[#087fd4] w-full p-[10px] rounded-md text-zinc-300"
                  onClick={handleSubmit}
                >
                  Submit Review
                </button>
              )}
              {/*  */}
            </>
          )}
          {/*  */}
        </form>
      </div>
      {/*  */}
    </div>
  );
};

export default Create;
