import React, { useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EditForm } from "../../components/Form";

export default function UserEdit({ location }) {
  // const user_data = location.state.user;
  // useEffect(() => {
  //   console.log(user_data);
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    alert("ok");
  }

  return (
    <div>
      <Header />
      <EditForm />
      <Footer />
    </div>
  );
}
