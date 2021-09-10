import React from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/logo.svg";

import RoomCode from "./RoomCode";
import Question from "./Question";

import { useRoom } from "../Hooks/useRoom";

import "../styles/room.scss";
import Button from "../Components/Button";

type RoomParams = {
  id: string;
};

const AdminRoom = () => {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
