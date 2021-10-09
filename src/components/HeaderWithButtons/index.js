import React from "react";
import "./styles.css";

export default function index() {
  return (
    <header class="cabecalho" id="header">
      <img src="/Lexic.jpg" alt="Logo Lexic" />
      <h2>Ficha terminológica</h2>
      <button id="btn-cadastro">Cadastrar Termos +</button>

      <button id="btn-notificacao">
        <i class="far fa-bell"></i>
      </button>

      <button id="btn-users">
        <i class="fas fa-users"></i>
      </button>
    </header>
  );
}
