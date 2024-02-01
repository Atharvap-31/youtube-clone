import React from "react";
import Comments from "./Comments";

const CommentsList = ({ data }) => {
  return data.map((comment, i) => (
    <div key={i}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList data={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
