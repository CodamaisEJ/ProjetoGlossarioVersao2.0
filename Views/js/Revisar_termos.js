const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

const Termoslist = document.querySelector("#tela_termos");

let Terms 
async function consultaTerms() {
  const retorno = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/terms/list"
  );
  let Terms = await retorno.json();
  ListTerms(Terms);
  //console.log(Terms)
}

let UserHTML;
//fa fa-check-square-o termo checado clicado
function ListTerms(Termos) {
    Termos.forEach((Termo) => {
        TermoHTML = `
    
    <div class="termos">
    <div class="borda-termo">
      <div class="termo">
        <p onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</p>
      </div>
      <i id="revisar" class="far fa-square fa-3x" onclick="Check()"></i>
    </div> 
      `;
        Termoslist.innerHTML = Termoslist.innerHTML + TermoHTML;
    });
}

consultaTerms();

function Check(){

}

function irParaTelaEditarTermo(term_id) {
  history.pushState(term_id, "", "tela_editar_termo.html");
  window.location.href = "tela_editar_termo.html";
}

async function editarTermo(event) {
  const term_id = history.state;

  event.preventDefault();

  const data = pegarInputsDoForm("edit_term");

  try {
      const result = await fetch(
          `https://ficha-terminologica-backend.herokuapp.com/term/${term_id}/update`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "token " + TOKEN,
              },

              body: JSON.stringify(data),
          }
      );

      if (result.ok) {
          alert("Termo editado com sucesso.");
          location.href = "tela_termos.html";
      } else {
          alert("Termo já existe.");
      }
  } catch (error) {
      alert("Erro ao cadastrar termo");
      console.log(`error.message`, error.message);
  }
}