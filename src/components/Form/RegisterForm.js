import React from "react";

export default function RegisterForm({ onSubmit }) {
  return (
    <>
      <main className="conteudo">
        <form id="create_user" action="">
          <fieldset>
            <legend>Cadastrar Usuário</legend>
            <div className="input-block">
              <label htmlFor="complete_name">Nome Completo</label>
              <input
                placeholder="Seu nome"
                name="complete_name"
                id="complete_name"
                type="text"
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input
                placeholder="Seu e-mail"
                name="email"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="radio-block">
              <p>Tipo de Usuário</p>
              <input
                type="radio"
                id="administrator"
                name="type_user_group"
                value="administrator"
              />
              <label htmlFor="administrator">Administrador</label>
              <input
                type="radio"
                id="researcher"
                name="type_user_group"
                value="researcher"
              />
              <label htmlFor="researcher">Pesquisador</label>
              <input
                type="radio"
                id="specialist"
                name="type_user_group"
                value="specialist"
              />
              <label htmlFor="specialist">Especialista</label>
            </div>
            <div className="input-block" id="password-block">
              <label htmlFor="password">Senha Atual</label>
              <input
                placeholder="********"
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            <div className="button-block">
              <button id="return">Voltar</button>
              <button id="save" type="submit">
                Salvar
              </button>
            </div>
          </fieldset>
        </form>
      </main>
    </>
  );
}
