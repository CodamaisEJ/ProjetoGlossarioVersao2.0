import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RegisterForm } from "../../components/Form";
// import "./styles.css";
export default function Register() {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
