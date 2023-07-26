import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "../axios";
import moment from "moment";

const Comment = ({ item }) => {
  const { user } = useSelector((state) => state.auth);

  // comment
  const [comment, setComment] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);

  const handleComment = async (product) => {
    try {
      if (!comment) {
        toast.error("Comment cannot be empty", { theme: "dark" });
        return;
      }

      setLoadingComment(true);

      let username = user.username;
      let id = product._id;
      let commentData = { username, comment };

      await axios.post("/reviews/comment/" + id, commentData);
      setLoadingComment(false);
      setComment("");
      window.location.reload();
    } catch (error) {
      setLoadingComment(false);
      toast.error("Failed To Add Comment");
    }
  };

  return (
    <div>
      {/*  */}
      <>
        <form onSubmit={() => handleComment(item)}>
          <div>
            <label htmlFor="comment" className="flex items-center gap-8">
              <div className="w-[40px] h-[40px] bg-orange-700 rounded-full flex justify-center items-center text-zinc-200 text-xl">
                {user?.username.slice(0, 1)}
              </div>

              <p>Add A Comment</p>
            </label>
          </div>
          <div className="flex items-center pt-[20px] w-[100%]  gap-[10px] ">
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="2"
              placeholder="Enter Comment"
              className="w-[100%] bg-transparent p-[8px] outline-none border-none rounded-md"
              style={{ border: "1px solid #5e5d5d" }}
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <p className="cursor-pointer" onClick={() => handleComment(item)}>
              {loadingComment ? (
                <p className="bg-orange-800 text-zinc-200 p-[8px] rounded-lg">
                  wait...
                </p>
              ) : (
                <p className="bg-[#087fd4] p-[8px] text-white rounded-lg">
                  comment
                </p>
              )}
            </p>
          </div>
        </form>
      </>
      {/*  */}
      {/* show all comments */}
      <div className="mt-[30px] max-h-[50vh] overflow-y-scroll prompt  p-[5px] rounded-lg">
        {/* {console.log(item.comments)} */}

        {/* fetch comments from latest to earliest */}
        {item.comments.length >= 1 ? (
          <>
            {[...item.comments].reverse().map((item, index) => (
              <div className="" key={index}>
                <div className=" block md:flex items-center gap-[20px] mb-[16px] pb-[10px]">
                  <p className="">
                    <span className="text-emerald-700">{item.username}</span>
                  </p>
                  <div className="flex flex-col md:flex-row justify-between  gap-[10px] md:gap-[40px]">
                    <p className="text-zinc-700 text-md">{item.comment}</p>
                    <p className="text-zinc-400 text-sm">
                      {moment(item.createdAt).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="p-[10px] text-gray-400">
            <p>
              No Comments for{" "}
              <span className="text-gray-600">{item?.title}</span> Yet
            </p>
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default Comment;
