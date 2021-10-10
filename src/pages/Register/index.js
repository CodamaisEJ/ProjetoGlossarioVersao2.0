import React, { useState } from "react";
import { useHistory } from "react-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RegisterForm } from "../../components/Form";
import api from "../../services/api";
import getGeneratedRandomPassword from "./generateRandomPassword";

export default function Register() {
  const history = useHistory();
  const GENERATED_PASSWORD = getGeneratedRandomPassword();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }

  async function handleSubmit(event) {
    if (email === "" || name === "" || userType === "") {
      alert("");
    }

    event.preventDefault();

    const data = {
      nome: name,
      email: email,
      senha: GENERATED_PASSWORD,
      tipo_de_usuario: userType,
    };

    console.log(`data`, data);
    try {
      await api.post("/user/create", data);
      alert("Usuário cadastrado com sucesso.");
      history.push("/usuarios");
    } catch (error) {
      alert("Ocorreu um erro: " + error.message);
    }
  }

  return (
    <div>
      <Header />
      <RegisterForm
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onUserTypeChange={handleUserTypeChange}
        generatedPassword={GENERATED_PASSWORD}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
