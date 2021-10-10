import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderWithButtons from "../../components/HeaderWithButtons";
import Footer from "../../components/Footer";
import "./styles.css";
import api from "../../services/api";

const UserItem = ({ name, type, email, handleEditUser, handleDeleteUser }) => (
  <>
    <p>{name}</p>
    <p>{type}</p>
    <p>{email}</p>
    <p>
      <i class="fas fa-pencil-alt" id="lapis" onClick={handleEditUser}></i>
      <i class="fas fa-trash-alt" id="lixeira" onClick={handleDeleteUser}></i>
    </p>
  </>
);

export default function Users() {
  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function handleListUsers() {
      const response = await api.get("/users/list");
      setUsers(response.data);
      console.log("users :>> ", users);
    }

    handleListUsers();
  }, []);

  function handleClickCreateUser() {
    history.push("/cadastrar");
  }

  function handleEditUser(user) {
    history.push("/usuarios/editar", { user });
  }

  async function handleDeleteUser(user_id) {
    try {
      await api.post(`/user/${user_id}/delete`);
      alert("Usuário deletado com sucesso.");
    } catch (error) {
      alert("Erro ao deletar usuário.");
      console.log(`error.message: `, error.message);
    }
  }

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
                handleEditUser={() => handleEditUser(user)}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
          </div>

          <button id="btn-criar-user" onClick={handleClickCreateUser}>
            Criar Usuário
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
