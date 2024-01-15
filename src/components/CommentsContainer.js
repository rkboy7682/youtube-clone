import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const CommentData = [
    {
      name: "Rahul",
      text: "hi this is rahul yadav",
      replies: [
        {
          name: "rahul",
          text: "hi this is rahul yadav",
          replies: [
            {
              name: "Rahul",
              text: "hi this is rahul yadav",
              replies: [
                {
                  name: "Rahul",
                  text: "hi this is rahul yadav",
                  replies: [
                    {
                      name: "Rahul",
                      text: "hi this is rahul yadav",
                      replies: [
                        {
                          name: "Rahul",
                          text: "hi this is rahul yadav",
                          replies: [
                            {
                              name: "Rahul",
                              text: "hi this is rahul yadav",
                              replies: [
                                {
                                  name: "Rahul",
                                  text: "hi this is rahul yadav",
                                  replies: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "rahul",
      text: "hi this is rahul yadav",
      replies: [
        {
          name: "Rahul",
          text: "hi this is rahul yadav",
          replies: [
            {
              name: "Rahul",
              text: "hi this is rahul yadav",
              replies: [
                {
                  name: "Rahul",
                  text: "hi this is rahul yadav",
                  replies: [
                    {
                      name: "Rahul",
                      text: "hi this is rahul yadav",
                      replies: [
                        {
                          name: "Rahul",
                          text: "hi this is rahul yadav",
                          replies: [
                            {
                              name: "Rahul",
                              text: "hi this is rahul yadav",
                              replies: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "rahul",
      text: "hi this is rahul yadav",
      replies: [{}],
    },
    {
      name: "rahul",
      text: "hi this is rahul yadav",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-6">
      <h1 className="text-2-xl font-bold">Comments:</h1>
      <div>
        <CommentList comments={CommentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
