import React from "react";
import Comments from "./Comments";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Atharva Patil",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Atharva Patil",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Atharva Patil",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Atharva Patil",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Atharva Patil",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Atharva Patil",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Atharva Patil",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
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
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Atharva Patil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="p-2 my-2">
      <h1 className="text-xl font-bold">Comments :</h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
