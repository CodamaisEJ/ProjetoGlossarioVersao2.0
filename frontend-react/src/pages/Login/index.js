import React from "react";
import "./styles.css";
import Header from "../../components/Header";

export default function Login() {
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
              <input type="text" id="user" placeholder="Usuário" />
            </div>
            <div class="login-input">
              <label for="password">Senha: </label>
              <br />
              <input type="password" id="password" placeholder="********" />
            </div>
            <button id="acesso" onclick="validador()">
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
