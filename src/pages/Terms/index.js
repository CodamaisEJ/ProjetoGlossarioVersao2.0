import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderWithButtons from "../../components/HeaderWithButtons";
import Footer from "../../components/Footer";
import LoadingScreen from "../../components/LoadingScreen";
import "./styles.css";
import api from "../../services/api";

// const termos_list = [
//   { id: 1, nome: "teste" },
//   { id: 1, nome: "teste" },
//   { id: 1, nome: "teste" },
// ];

// const renderTerms = termos_list.map((termo) => <button>{termo.nome}</button>);

const TermsList = ({ terms, onClickEdit, onClickDelete }) =>
  terms.map((term) => (
    <div class="total-termos" key={term.id}>
      <div class="termos">
        <div class="termo-especifico" onClick={() => onClickEdit(term.id)}>
          <p>area</p>
        </div>
        <i class="fas fa-trash" onClick={() => onClickDelete(term.id)}></i>
      </div>
    </div>
  ));

export default function Terms() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [terms, setTerms] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("/terms/list");
        setTerms(response.data);
        setLoading(false);
      } catch (error) {
        console.log(`error.message: `, error.message);
      }

      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(termos_list);
      //     setLoading(false);
      //   }, 2000);
      // });
    }
    carregar();
  }, []);

  function handleSearchInput(event) {
    setInputSearch(event.target.value);
  }

  function handleEditClick(term_id) {
    history.push(`/termo/${term_id}/editar`, { term_id });
  }

  async function handleDeleteClick(term_id) {
    // try {
    //   await api.post(`/termo/${term_id}/delete`);
    //   alert("Termo removido com sucesso.");
    // } catch (error) {
    //   alert("Erro ao remover termo");
    //   console.log(`error.message`, error.message);
    // }
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeaderWithButtons />
          <section class="conteudo">
            <div class="conteudo-main">
              <h2>Revisar Termos</h2>

              <label for="termos">Total de termos: 0</label>

              <div class="divBusca">
                <input
                  type="text"
                  id="txtBusca"
                  placeholder="Pesquisar"
                  onChange={handleSearchInput}
                />
              </div>

              <TermsList
                terms={terms}
                onClickEdit={handleEditClick}
                onClickDelete={handleDeleteClick}
              />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
