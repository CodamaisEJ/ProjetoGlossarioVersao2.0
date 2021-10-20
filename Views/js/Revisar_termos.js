const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

const Termoslist = document.querySelector("#tela_termos");

let Terms;
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
    <style>
    #revisar{
      width: 44px;
      height: 45px;
    }
    </style>
    <div class="termos">
    <div class="borda-termo">
      <div class="termo">
        <p onclick="irParaTelaEditarTermoEspecialista(${Termo.id})">${Termo.entrada}</p>
      </div>
      <img id="revisar" src="./img/square.png" onclick="Check(${Termo.id})">
    </div> 
      `;
    Termoslist.innerHTML = Termoslist.innerHTML + TermoHTML;
  });
}

consultaTerms();
//Botão Check 
function Check() {
  const demoClasses = document.querySelectorAll('#revisar');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
  element.setAttribute("src", "./img/ok.png");
});

// Access the first element in the NodeList
demoClasses[0];
}

function irParaTelaEditarTermoEspecialista(term_id) {
  history.pushState(term_id, "", "tela_editar_termo_especialista.html");
  window.location.href = "tela_editar_termo_especialista.html";
}

async function editarTermo(event) {
  const term_id = history.state;

  event.preventDefault();

  const data = pegarInputsDoForm("edit_term");

  try {
    const result = await fetch(
      `https://ficha-terminologica-backend.herokuapp.com/term/${term_id}/update`,
      {
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
