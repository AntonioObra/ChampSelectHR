import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../actions/comments";
import Comment from "./Comment/Comment";
import { useNavigate } from "react-router-dom";

import "./Comments.scss";

const Comments = ({ guide }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let val = e.target.value;
    setComment(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ ...guide, comment, user }));
    navigate(0);
  };

  return (
    <div className="Comments-main">
      {user ? (
        <h2>
          Leave a <span>Comment</span>
        </h2>
      ) : (
        <h2>
          <span>Comments</span>
        </h2>
      )}

      <div className="Comments-content">
        <div className="Comments-input">
          {user && (
            <form action="" onSubmit={handleSubmit}>
              <input
                className="p-text"
                type="text"
                placeholder="Leave a review..."
                onChange={handleChange}
                name="Comment"
              />
            </form>
          )}
        </div>
        <div className="Comments-com">
          {guide && (
            <>
              {!guide.reviews ? (
                <h1 className="head-text">There are currently no comments!</h1>
              ) : (
                <>
                  {guide.reviews.map((review, index) => (
                    <Comment key={index} comment={review} user={user} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
