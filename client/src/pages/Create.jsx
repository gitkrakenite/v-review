import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Create = () => {
  const [proceed, setProceed] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleVerify = async () => {
    setProceed(true);
  };

  const postFirstPhoto = async (pic) => {
    setImagePreview(URL.createObjectURL(pic));
  };
  const postSecPhoto = async (pic) => {
    setImagePreview(URL.createObjectURL(pic));
  };
  const postThirdPhoto = async (pic) => {
    setImagePreview(URL.createObjectURL(pic));
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
              />
            </div>
            <div
              className="flex gap-[6px] items-center cursor-pointer"
              onClick={handleVerify}
            >
              <p>Proceed</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
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
                >
                  <option value="">Choose</option>
                  <option value="automobile">Automobile</option>
                  <option value="hotel">Hotel</option>
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
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt=""
                      className="h-[80px] object-contain"
                    />
                  ) : (
                    <BiImageAdd className="text-5xl" />
                  )}

                  <div>
                    <p className="font-bold text-zinc-500">Upload Image</p>
                    <p className="text-sm">** required **</p>
                  </div>
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
                  htmlFor="image1"
                  className="flex gap-[40px] items-center"
                >
                  <BiImageAdd className="text-5xl" />

                  <div>
                    <p className="font-bold text-zinc-500">
                      Upload Second Image
                    </p>
                    <p className="text-sm">** required **</p>
                  </div>
                </label>

                <input
                  type="file"
                  name="image1"
                  id="image1"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => postSecPhoto(e.target.files[0])}
                />
              </div>
              {/*  */}
              <div className="mt-[12px]">
                <label
                  htmlFor="image1"
                  className="flex gap-[40px] items-center"
                >
                  <BiImageAdd className="text-5xl" />

                  <div>
                    <p className="font-bold text-zinc-500">
                      Upload Third Image
                    </p>
                    <p className="text-sm">** required **</p>
                  </div>
                </label>

                <input
                  type="file"
                  name="image1"
                  id="image1"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => postThirdPhoto(e.target.files[0])}
                />
              </div>
              {/*  */}
              <button className="mt-[30px] bg-[#087fd4] w-full p-[10px] rounded-md text-zinc-300">
                Submit Review
              </button>
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
