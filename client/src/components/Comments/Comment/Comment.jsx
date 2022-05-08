import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../actions/comments";
import { useNavigate } from "react-router-dom";

import "./Comment.scss";

const Comment = ({ comment, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
    navigate(0);
  };
  return (
    <div className="Comment">
      {comment && (
        <>
          <p>
            {comment.comment} - {comment.author.userName}
          </p>
          <div className="Comment-delete">
            {user && (
              <>
                {comment.author.userName === user.result.userName && (
                  <button onClick={() => handleDelete(comment._id)}>
                    Delete
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
