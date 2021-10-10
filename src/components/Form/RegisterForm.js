import React from "react";

export default function RegisterForm({
  onNameChange,
  onEmailChange,
  onUserTypeChange,
  generatedPassword,
  onSubmit,
}) {
  return (
    <>
      <main className="conteudo">
        <form id="create_user" onSubmit={onSubmit}>
          <fieldset>
            <legend>Cadastrar Usuário</legend>
            <div className="input-block">
              <label htmlFor="complete_name">Nome Completo</label>
              <input
                placeholder="Seu nome"
                name="complete_name"
                id="complete_name"
                type="text"
                onChange={onNameChange}
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
                onChange={onEmailChange}
                required
              />
            </div>
            <div className="radio-block">
              <p>Tipo de Usuário</p>
              <input
                type="radio"
                id="administrator"
                name="type_user_group"
                value="administrador"
                onChange={onUserTypeChange}
              />
              <label htmlFor="administrator">Administrador</label>
              <input
                type="radio"
                id="researcher"
                name="type_user_group"
                value="pesquisador"
                onChange={onUserTypeChange}
              />
              <label htmlFor="researcher">Pesquisador</label>
              <input
                type="radio"
                id="specialist"
                name="type_user_group"
                value="especialista"
                onChange={onUserTypeChange}
              />
              <label htmlFor="specialist">Especialista</label>
            </div>
            <div className="input-block" id="password-block">
              <label htmlFor="password">Senha Gerada</label>
              <input
                // placeholder="********"
                name="password"
                id="password"
                type="text"
                value={generatedPassword}
                readOnly={true}
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
