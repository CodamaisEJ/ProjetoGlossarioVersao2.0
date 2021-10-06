import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  async function handleLogin(event) {
    event.preventDefault();

    const data = {
      email: email,
      senha: password,
    };

    try {
      const response = await api.post("/token/create", data);
      console.log(response.data);
      history.push("/termos");
    } catch (error) {
      alert("credenciais inválidas");
      console.log(error.error);
    }
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
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" id="acesso" onClick={handleLogin}>
              <i class="fas fa-user-friends"></i>Acessar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
