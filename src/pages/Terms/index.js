import React, { useState, useEffect } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import "./styles.css";

const termos_list = [
  { id: 1, nome: "teste" },
  { id: 1, nome: "teste" },
  { id: 1, nome: "teste" },
];

const renderTerms = termos_list.map((termo) => <button>{termo.nome}</button>);

export default function Termos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(termos_list);
          setLoading(false);
        }, 2000);
      });
    }
    carregar();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <h1>termos</h1>
          {renderTerms}
        </div>
      )}
    </>
  );
}
