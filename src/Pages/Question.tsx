import React, { ReactNode } from "react";
import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

const Question = ({ author, content, children }: QuestionProps) => (
  <div className="question">
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </div>
      <div>{children}</div>
    </footer>
  </div>
);

export default Question;
