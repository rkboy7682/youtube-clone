import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // console.log("commentslist", comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="border border-l-black m-4 pl-4">
            {/* <CommentList comments={comment.replies} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
