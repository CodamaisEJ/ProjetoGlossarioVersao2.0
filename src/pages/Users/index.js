import React, { useState, useEffect } from "react";
import HeaderWithButtons from "../../components/HeaderWithButtons";
import Footer from "../../components/Footer";
import "./styles.css";
import api from "../../services/api";

const UserItem = ({ name, type, email }) => (
  <>
    <p>{name}</p>
    <p>{type}</p>
    <p>{email}</p>
    <p>
      <i class="fas fa-pencil-alt" id="lapis"></i>
      <i class="fas fa-trash-alt" id="lixeira"></i>
    </p>
  </>
);

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function handleListUsers() {
      const response = await api.get("/users/list");
      setUsers(response.data);
      console.log("users :>> ", users);
    }

    handleListUsers();
  }, []);

  return (
    <>
      <HeaderWithButtons />
      <section class="conteudo">
        <div class="conteudo-main">
          <h2>Usuários cadastrados</h2>

          <div class="users">
            <h3>Nome</h3>

            <h3>Tipo de usuário</h3>

            <h3>E-mail</h3>

            <h3>Ações</h3>

            {users.map((user) => (
              <UserItem
                key={user.id}
                name={user.nome}
                type={user.tipo_de_usuario}
                email={user.email}
              />
            ))}

            {/* <p>Isabella</p>

            <p>Pesquisador</p>

            <p>fulano@fulano.com.br</p>

            <p>
              <i class="fas fa-pencil-alt" id="lapis"></i>
              <i class="fas fa-trash-alt" id="lixeira"></i>
            </p> */}
          </div>

          <button id="btn-criar-user">Criar Usuário</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
