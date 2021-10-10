import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

export default function HeaderWithButtons() {
  const history = useHistory();

  return (
    <header class="cabecalho" id="header">
      <img src="/Lexic.jpg" alt="Logo Lexic" />
      <h2>Ficha terminológica</h2>

      <button id="btn-gerenciamento" onClick={() => history.push("/usuarios")}>
        Gerenciar Usuários
      </button>

      <button
        id="btn-cadastro"
        onClick={() => history.push("/cadastrar_termo")}
      >
        Cadastrar Termos +
      </button>

      <button id="btn-notificacao">
        <i class="far fa-bell"></i>
      </button>

      <button id="btn-users">
        <i class="fas fa-users"></i>
      </button>
    </header>
  );
}
