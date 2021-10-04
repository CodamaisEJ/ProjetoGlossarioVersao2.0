import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import api from "../../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    alert(username + " " + password);
    try {
      const response = await api.get("/");
    } catch (error) {}
  }

  return (
    <div>
      <Header />

      <section class="conteudo">
        <div class="conteudo-main">
          <h2>Para acessar a ficha preencha os campos abaixo:</h2>
          <div class="login">
            <div class="login-input">
              <label for="user">Usuário:</label>
              <br />
              <input
                type="text"
                id="user"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="login-input">
              <label for="password">Senha: </label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button id="acesso" onClick={handleLogin}>
              <i class="fas fa-user-friends"></i>Acessar
            </button>
          </div>
        </div>
      </section>

      <footer class="rodape" id="footer">
        <h2>Desenvolvido por Codamais @ 2021</h2>
      </footer>
    </div>
  );
}
