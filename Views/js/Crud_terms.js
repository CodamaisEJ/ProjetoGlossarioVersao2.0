let Termslist = document.querySelector("#termos-lista");

async function consultaTerms() {
  const retorno = await fetch(
    "http://ficha-terminologica-backend.herokuapp.com/terms/list"
  );
  const Terms = await retorno.json();
  ListTerms(Terms);
}

function ListTerms(Termos) {
  Termos.forEach((Termo) => {
    TermoHTML = `     
    <div class="borda-termo" id='termo${Termo.id}''>
      <div class="termo">
        <span onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</span>
      </div>
      <i class="fas fa-trash" onclick="DeletandoTerms(${Termo.id})"></i>
    </div> 
      `;
    Termslist.innerHTML += TermoHTML;
  });
}

async function DeletandoTerms(termo_id) {
  const retorno = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/term/${termo_id}/delete`,
    { method: "delete" }
  );
  const json = await retorno.json();
  alert("" + json.message);
  console.log(json);
  DeleteTerms(termo_id);
}

function DeleteTerms(termo_id) {
  const elemento_termo = document.querySelector(`#termo${termo_id}`);
  Termslist.removeChild(elemento_termo);
}

consultaTerms();

async function cadastrarTermo(event) {
  event.preventDefault();

  const data = pegarInputsDoForm("create_term");

  try {
    const result = await fetch(
      "https://ficha-terminologica-backend.herokuapp.com/term/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + TOKEN,
        },
        body: JSON.stringify(data),
      }
    );

    if (result.status === 201) {
      alert("Termo cadastrado com sucesso.");
      location.href = "tela_termos.html";
    } else if (result.status === 401) {
      alert("Ocorreu um erro: Não autorizado.");
    }
  } catch (error) {
    alert("Erro ao cadastrar termo");
    console.log(`error.message`, error.message);
  }
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
      `https://ficha-terminologica-backend.herokuapp.com/term/${term_id}/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
    alert("Erro ao editar termo");
    console.log(`error.message`, error.message);
  }
}

function pegarInputsDoForm(form_name) {
  const form = document.forms[form_name];

  const entrada = form["entrada"].value;
  const cat_morfo = form["cat_morfo"].value;
  const genero_grupo = form["genero_grupo"].value;
  const variante = form["variante"].value;

  // if (entrada === "" || cat_morfo === "" || genero_grupo === "") {
  //   alert("Por favor preencha os campos.");
  //   return;
  // }

  return { entrada, cat_morfo, genero_grupo, variante };
}

async function carregarDadosTermo() {
  const term_id = history.state;
  try {
    const result = await fetch(
      `https://ficha-terminologica-backend.herokuapp.com/term/${term_id}/list`
    );

    const json = await result.json();
    console.log(
      `json: `,
      json.entrada,
      json.categoria_gramatical,
      json.genero,
      json.variantes
    );
    const form = document.forms["edit_term"];

    form["entrada"].value = json.entrada;
    form["cat_morfo"].value = json.categoria_gramatical;
    form["genero_grupo"].value = json.genero;
    form["variante"].value = json.variantes;

    console.log(`dados do termo carregados`);
  } catch (error) {
    console.log(`Erro ao carregar dados do termo`, error);
  }
}
