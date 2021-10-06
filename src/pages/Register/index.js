import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Register() {
  return (
    <div>
      <Header />
      <section class="conteudo">
        <div class="conteudo-main">
          <h2>Cadastrar Usuário</h2>

          <div class="cadastro">
            <label for="nome">
              Nome Completo: <br />
              <input type="text" id="nome" placeholder="Seu nome" />
            </label>

            <label for="email">
              E-mail: <br />
              <input type="email" id="email" placeholder="Seu e-mail" />
            </label>

            <label for="tipo-usuario">
              Tipo de Usuário: <br />
              <input type="radio" id="tipo-usuario" />
            </label>

            <label for="senha">
              Senha Gerada: <br />
              <input type="password" id="senha" placeholder="********" />
            </label>
          </div>
          <button id="btn-voltar" onClick="trocarPagina()">
            Voltar
          </button>
          <button id="btn-salvar">Salvar</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
