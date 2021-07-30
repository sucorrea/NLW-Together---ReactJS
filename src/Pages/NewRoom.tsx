
import { Link } from "react-router-dom";
import ilustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";

import "../styles/auth.scss";
import Button from "../Components/Button";
import { useAuth } from "../Hooks/useAuth";

const NewRoom = () => {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp; A ao vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
