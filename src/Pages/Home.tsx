import { useHistory } from "react-router-dom";
import ilustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImg from "../assets/google-icon.svg";

import "../styles/auth.scss";
import Button from "../Components/Button";
import { useAuth } from "../Hooks/useAuth";

const Home = () => {
  const history = useHistory();

  const { signInWithGoogle, user } = useAuth();

 async  function handleCreateRoom() {
    if (!user){
      signInWithGoogle();
    }
    history.push("/rooms/new");
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            Crie sua sala com o Google
          </button>
          <img src={googleIconImg} alt="Logo do google" />
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
