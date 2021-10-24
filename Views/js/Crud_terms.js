const URL = "https://ficha-terminologica-backend.herokuapp.com";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

const Termoslist = document.querySelector("#tela_termos");
let Terms;
let TermoHTML;

async function consultaTerms() {
  const retorno = await fetch(`${URL}/terms/list`);
  let Terms = await retorno.json();
  console.log(Terms);
  ListTerms(Terms);

  mostrarTotalDeTermos(Terms.length);
}

function ListTerms(Termos) {
  Termos.forEach((Termo) => {
    TermoHTML = `
    <div class="termos" id='termo${Termo.id}'>
      <div class="borda-termo">
        <div class="termo">
          <p onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</p>
        </div>
        <i class="fas fa-trash" onclick="DeletandoTerms(${Termo.id})"></i>
      </div>
    </div> 
      `;

    Termoslist.innerHTML += TermoHTML;
  });
}

async function DeletandoTerms(termo_id) {
  const termo = await verTermoEspecifico(termo_id);

  try {
    const result = await fetch(`${URL}/term/${termo.id}/delete`, {
      method: "DELETE",
    });
    const json = await result.json();

    if (result.status === 200) {
      // Criando notificação
      const { id, entrada, autor } = termo;

      criarNotificacao(null, id, entrada, autor, "DELETE");

      alert("" + json.message);
      DeleteTerms(termo_id);
    } else if (result.status === 404) {
      console.log(`não encontrado`);
    }
  } catch (error) {
    console.log(`Erro ao deletar termo`, error.message);
  }
}

function DeleteTerms(termo_id) {
  const el_termo = document.querySelector(`#termo${termo_id}`);
  Termoslist.removeChild(el_termo);
}

async function cadastrarTermo(event) {
  event.preventDefault();

  const data = pegarInputsDoForm("create_term");

  try {
    const result = await fetch(`${URL}/term/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "token " + TOKEN,
      },
      body: JSON.stringify(data),
    });

    if (result.status === 201) {
      const { id, entrada, autor } = await result.json();

      criarNotificacao(event, id, entrada, autor, "POST");

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
    const result = await fetch(`${URL}/term/${term_i}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "token " + TOKEN,
      },

      body: JSON.stringify(data),
    });

    if (result.ok) {
      // Criando notificação
      const { id, entrada, autor } = await result.json();

      criarNotificacao(event, id, entrada, autor, "PUT");

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

function mostrarTotalDeTermos(total_termos) {
  document.querySelector("#total-de-termos").innerHTML = total_termos;
}

function pegarInputsDoForm(form_name) {
  const form = document.forms[form_name];

  const area = form["area"].value;
  const categoria_gramatical = form["cat_morfo"].value;
  const entrada = form["entrada"].value;
  const autor = form["autor"].value;
  const genero = form["genero_grupo"].value;
  const numero = form["num_grupo"].value;
  const variantes = form["variante"].value;
  const ortografica = form["ortografia"].value;
  const geografica = form["geografica"].value;
  const sinonimica = form["sinonimica"].value;
  const siglas = form["siglas"].value;
  const acronimos = form["acronimos"].value;
  // const definicao = form["definicao"].value;
  const dicionario_lingua_comum = form["dicio-lingua-comu-def"].value;
  const dicionario_especializado1 = form["dicio-espe-def"].value;
  const dicionario_especializado2 = form["dicio-espe2-def"].value;
  const proposta_de_definicao = form["prop_defini"].value;
  const hiponimo = form["hiponimo"].value;
  const contexto_de_uso1 = form["context_uso_1"].value;
  const contexto_de_uso2 = form["context_uso_2"].value;
  const contexto_de_uso3 = form["context_uso_3"].value;
  const remissiva = form["remissivas"].value;
  const hiperonimo = form["hiperonimos"].value;
  const co_hiponimo = form["co-hiponimo"].value;
  const data_de_registro = form["data_registro"].value;
  const revisao_linguistica = form["revisao_linguistica"].value;
  const termo_ingles = form["termo-ingles"].value;
  const termo_italiano = form["termo-Italiano"].value;
  const termo_frances = form["termo-frances"].value;
  const termo_espanhol = form["termo-Espanhol"].value;
  // const verbo = form["verbo"].value;
  const fonte_da_definicao = form["fonte_definicao"].value;
  const fonte_dicionario_lingua_comum = form["font-dici-lingua-comum"].value;
  const fonte_dicionario_especializado1 = form["font-dici-especi-1"].value;
  const fonte_dicionario_especializado2 = form["font-dici-especi-2"].value;
  const fonte_proposta_de_definicao = form["font-prop-defi"].value;
  // const fonte_do_contexto_de_uso = form["font_contexto_uso"].value;
  const fonte_do_contexto_de_uso1 = form["font_contexto_uso_1"].value;
  const fonte_do_contexto_de_uso2 = form["font_contexto_uso_2"].value;
  const fonte_do_contexto_de_uso3 = form["font_contexto_uso_3"].value;
  const nota = form["nota"].value;
  const redator = form["redator"].value;
  const revisao_especialista = form["revisao_especialista"].value;
  const data_da_ultima_revisao = form["data_ultima_revisao"].value;
  const freq_no_termo_corpus = form["frequencia_termo_corpus"].value;

  // if (entrada === "" || cat_morfo === "" || genero_grupo === "") {
  //   alert("Por favor preencha os campos.");
  //   return;
  // }

  return {
    area,
    categoria_gramatical,
    data_de_registro,
    entrada,
    genero,
    nota,
    redator,
    remissiva,
    hiponimo,
    hiperonimo,
    co_hiponimo,
    termo_ingles,
    termo_italiano, //definição e contexto faltando

    termo_espanhol,
    termo_frances,
    // termo_alemao,
    numero,
    revisao_especialista,
    data_da_ultima_revisao,
    freq_no_termo_corpus,
    autor,
    revisao_linguistica,
    fonte_da_definicao,
    fonte_dicionario_especializado1,
    fonte_dicionario_especializado2,
    fonte_dicionario_lingua_comum,
    fonte_proposta_de_definicao,
    fonte_do_contexto_de_uso1,
    fonte_do_contexto_de_uso2,
    fonte_do_contexto_de_uso3,
    contexto_de_uso1,
    contexto_de_uso2,
    contexto_de_uso3,
    // proposta,
    dicionario_especializado1,
    dicionario_especializado2,
    dicionario_lingua_comum,
    proposta_de_definicao,
    variantes,
    ortografica,
    geografica,
    sinonimica,
    siglas,
    acronimos,
  };
}

async function carregarDadosTermo() {
  const term_id = history.state;

  try {
    const result = await fetch(`${URL}/term/${term_i}/list`);

    const json = await result.json();
    console.log(`json`, json);
    const form = document.forms["edit_term"];

    form["entrada"].value = json.entrada;
    form["cat_morfo"].value = json.categoria_gramatical;
    form["genero_grupo"].value = json.genero;
    form["variante"].value = json.variantes;
    form["area"].value = json.area;
    form["autor"].value = json.autor;
    form["ortografia"].value = json.ortografica;
    form["geografica"].value = json.geografica;
    form["sinonimica"].value = json.sinonimica;
    form["siglas"].value = json.siglas;
    form["acronimos"].value = json.acronimos;
    form["definicao"].value = json.definicao;
    form["dicio-lingua-comu-def"].value = json.dicionario_lingua_comum;
    form["dicio-espe-def"].value = json.dicionario_especializado1;
    form["dicio-espe2-def"].value = json.dicionario_especializado2;
    form["prop_defini"].value = json.proposta_de_definicao;
    form["hiponimo"].value = json.hiponimo;
    form["context_uso_1"].value = json.contexto_de_uso1;
    form["context_uso_2"].value = json.contexto_de_uso2;
    form["context_uso_3"].value = json.contexto_de_uso3;
    form["remissivas"].value = json.remissivas;
    form["hiperonimos"].value = json.hiperonimos;
    form["co-hiponimo"].value = json.co_hiponimo;
    form["data_registro"].value = json.data_de_registro;
    form["revisao_linguistica"].value = json.revisao_linguistica;
    form["termo-ingles"].value = json.termo_ingles;
    form["termo-Italiano"].value = json.termo_italiano;
    form["termo-frances"].value = json.termo_frances;
    form["termo-Espanhol"].value = json.termo_espanhol;
    form["verbo"].value = json.verbo;
    form["fonte_definicao"].value = json.fonte_da_definicao;
    form["font-dici-lingua-comum"].value = json.fonte_dicionario_lingua_comum;
    form["font-dici-especi-1"].value = json.fonte_dicionario_especializado1;
    form["font-dici-especi-2"].value = json.fonte_dicionario_especializado2;
    form["font-prop-defi"].value = json.fonte_proposta_de_definicao;
    // form["font_contexto_uso"].value = json.fonte_do_contexto_de_uso1;
    form["font_contexto_uso_1"].value = json.fonte_do_contexto_de_uso1;
    form["font_contexto_uso_2"].value = json.fonte_do_contexto_de_uso2;
    form["font_contexto_uso_3"].value = json.fonte_do_contexto_de_uso2;
    form["nota"].value = json.nota;
    form["redador"].value = json.redator;
    form["revisao_especialista"].value = json.revisao_linguistica;
    form["data_ultima_revisao"].value = json.data_da_ultima_revisao;
    form["frequencia_termo_corpus"].value = json.frequencia_termo_corpus;

    console.log(`dados do termo carregados`);
  } catch (error) {
    console.log(`Erro ao carregar dados do termo`, error);
  }
}

// NOTIFICAÇÃO
async function criarNotificacao(event, id, entrada, autor, situacao_termo) {
  if (event !== null) {
    event.preventDefault();
  }

  let situacao;
  switch (situacao_termo) {
    case "POST":
      situacao = "Cadastrado";
      break;

    case "PUT":
      situacao = "Editado";
      break;

    case "DELETE":
      situacao = "Removido";
      break;

    default:
      break;
  }

  const data = {
    termo: entrada,
    status: situacao,
    usuario: autor,
    id_termo: id,
  };

  console.log(`data`, data);

  try {
    const result = await fetch(`${URL}/notification/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "token " + TOKEN,
      },
      body: JSON.stringify(data),
    });

    if (result.status === 201) {
      console.log(`Notificação criada com suesso.`);
    } else if (result.status === 401) {
      console.log("Ocorreu um erro: Não autorizado.");
    }
  } catch (error) {
    console.log("Erro ao criar notificação: ", error.message);
  }
}

consultaTerms();

async function verTermoEspecifico(termo_id) {
  try {
    const result = await fetch(`${URL}/term/${termo_id}/list`);
    if (result.status === 200) {
      const json = await result.json();
      console.log(`Informações do termo: `, json);
      return json;
    } else if (result.status === 400) {
      console.log(`Termo não encontrado`);
    }
  } catch (error) {
    console.log(`Erro ao ver informações do termo`, error.message);
  }
}
