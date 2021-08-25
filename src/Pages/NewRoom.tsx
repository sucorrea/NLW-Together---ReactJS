import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ilustrationImg from '../assets/illustration.svg';

import Button from '../Components/Button';
import logoImg from '../assets/logo.svg';
import '../styles/auth.scss';
import { useAuth } from '../Hooks/useAuth';
import { database } from '../services/firebase';

const NewRoom = () => {
  const [newRoom, setNewRoom] = useState('');
  const { user } = useAuth();
  const history = useHistory();

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();
    if (newRoom.trim() === '') {
      return;
    }
    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(evento) => setNewRoom(evento.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            {' '}
            <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
