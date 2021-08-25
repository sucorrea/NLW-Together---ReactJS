import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import RoomCode from "./RoomCode";
import { useAuth } from "../Hooks/useAuth";
import { database } from "../services/firebase";
import "../styles/room.scss";
import Question from "./Question";
import { useRoom } from "../Hooks/useRoom";

type RoomParams = {
  id: string;
};

const AdminRoom = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleSendQuestiom(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === "") {
      return;
    }
    if (!user) {
      throw new Error("Você deve estar logado");
    }
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <RoomCode code={roomId} />
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
