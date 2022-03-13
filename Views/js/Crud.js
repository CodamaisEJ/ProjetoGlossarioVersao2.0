

async function cadastrarTermo(event) {
  event.preventDefault();

  const data = pegarInputsDoForm("create_term");

  try {
    const result = await fetch(`https://ficha-terminologica-backend.herokuapp.com/termo/create`, {
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

      var vali = 1;
      localStorage.setItem("notifica",vali);
     
      var z = localStorage.getItem("tipoUsuario");
      if (z == 1) {
        location.href = "tela_termos.html";
      }
      var z = localStorage.getItem("tipoUsuario");
      if (z == 2) {
        location.href = "termo.html";
      }
      var z = localStorage.getItem("tipoUsuario");
      if (z == 3) {
        location.href = "tela_termos_especialista.html";
      }
      
      
    } else if (result.status === 401) {
      alert("Ocorreu um erro: Não autorizado.");
    }
  } catch (error) {
    alert("Erro ao cadastrar termo");
    console.log(`error.message`, error.message);
  }
  
}

async function editarTermo(event) {
  const term_id = history.state;

  event.preventDefault();

  const data = pegarInputsDoForm("edit_term");

  try {
    const result = await fetch(`https://ficha-terminologica-backend.herokuapp.com/termo/${term_id}/update`, {
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

      var vali = 1;
      localStorage.setItem("notifica",vali);

     

      var z = localStorage.getItem("tipoUsuario");
      if (z == 1) {
        alert("Termo editado com sucesso.");
        location.href = "tela_termos.html";
      }
      var z = localStorage.getItem("tipoUsuario");
      if (z == 2) {
        alert("Termo editado com sucesso.");
        location.href = "termo.html";
      }
      var z = localStorage.getItem("tipoUsuario");
      if (z == 3) {
        alert("Termo Revisado com sucesso.");
        location.href = "tela_termos_especialista.html";
      }
      
    } else {
      alert("Termo já existe.");
    }
  } catch (error) {
    alert("Erro ao cadastrar termo");
    console.log(`error.message`, error.message);
  }
}

function pegarInputsDoForm(form_name) {
  const form = document.forms[form_name];

  const area = form["area"].value;
  const categoria_gramatical = form["cat_morfo"].value;
  if(categoria_gramatical == ""){
    alert("Preencha todos os campos *")
    categoria_gramatical.attr('required', true);
  }
  const entrada = form["entrada"].value;
  if(entrada == ""){
    alert("Preencha todos os campos *")
    entrada.attr('required', true);
  }
  let autor 
  let redator
  
  var user_autor = localStorage.getItem("autor_");
  
  if( user_autor == 2){
    autor  =  localStorage.getItem("motrar_user");
  }

  var tiporedator = localStorage.getItem("redator_");
  let alerta = ""
  if(tiporedator == 3){
    redator =  localStorage.getItem("motrar_user");

      if(autor == redator){
        alert("Autor e Redator são iguais!")
      console.log(user_autor)
      console.log(tiporedator)
          alerta.attr('required', true);
      }
  }

  var z = localStorage.getItem("tipoUsuario");
  let revisao_especialista
  if (z == 3) {   
     revisao_especialista = localStorage.getItem("motrar_user");
  }
  
 // if(autor != redator){
   // redator =  localStorage.getItem("motrar_user");
 // }

  const genero = form["genero_grupo"].value;
  if(genero == ""){
    alert("Preencha todos os campos *")
    genero.attr('required', true);
  }
  const numero = form["num_grupo"].value;
  const variantes = form["variante"].value;
  if(variantes == ""){
    alert("Preencha todos os campos *")
    variantes.attr('required', true);
  }
  const ortografica = form["ortografia"].value;
  const geografica = form["geografica"].value;
  const sinonimica = form["sinonimica"].value;
  const siglas = form["siglas"].value;
  const acronimos = form["acronimos"].value;
  // const definicao = form["definicao"].value;
  const dicionario_lingua_comum = form["dicio-lingua-comu-def"].value;
  const dicionario_especializado1 = form["dicio-espe-def"].value;
  const dicionario_especializado2 = form["dicio-espe2-def"].value;
  const definicao = form["prop_defini"].value;
  const hiponimo = form["hiponimo"].value;
  const contexto_de_uso1 = form["context_uso_1"].value;
  const contexto_de_uso2 = form["context_uso_2"].value;
  const contexto_de_uso3 = form["context_uso_3"].value;
  const remissiva = form["hiperonimo"].value;
  
  
  //const hiperonimo = form["hiperonimo"].value;
  const co_hiponimo = form["co-hiponimo"].value;
  const sugestao = form["sugestao"].value;
  
 var z = localStorage.getItem("tipoUsuario");
  if (z == 1 && z == 2) {   
     var  data_de_registro = new Date();
     var status = "./img/square.png";
  }
 
  const revisao_linguistica = form["revisao_linguistica"].value;
  const termo_ingles = form["termo-ingles"].value;
  const termo_italiano = form["termo-Italiano"].value;
  const definicao_italiano = form["definicao_italiano"].value;
  const contexto_italiano = form["contexto_italiano"].value;
  const termo_frances = form["termo-frances"].value;
  const termo_espanhol = form["termo-Espanhol"].value;
  // const verbo = form["verbo"].value;
  const fonte_da_definicao = form["font-prop-defi"].value;
  const fonte_dicionario_lingua_comum = form["font-dici-lingua-comum"].value;
  const fonte_dicionario_especializado1 = form["font-dici-especi-1"].value;
  const fonte_dicionario_especializado2 = form["font-dici-especi-2"].value;
 // const fonte_proposta_de_definicao = form["font-prop-defi"].value;
  // const fonte_do_contexto_de_uso = form["font_contexto_uso"].value;
  const fonte_do_contexto_de_uso = form["font_contexto_uso_1"].value;
  const fonte_do_contexto_de_uso2 = form["font_contexto_uso_2"].value;
  const fonte_do_contexto_de_uso3 = form["font_contexto_uso_3"].value;
  const nota = form["nota"].value; 
  const data_da_ultima_revisao = form["data_ultima_revisao"].value;
  const freq_no_termo_corpus = form["frequencia_termo_corpus"].value;
  
  var status = "./img/square.png";
  var z = localStorage.getItem("tipoUsuario");
  if(z == 3){
    if(status == "./img/square.png"){
      status = form["status"].value;
    }
  }
  // if (entrada === "" || cat_morfo === "" || genero_grupo === "") {
  //   alert("Por favor preencha os campos.");
  //   return;
  // }

  return {
    definicao,
    area,
    sugestao,
    categoria_gramatical,
    data_de_registro,
    entrada,
    genero,
    nota,
    redator,
    remissiva,
    hiponimo,
    //hiperonimo,
    co_hiponimo,
    termo_ingles,
    termo_italiano, 
    definicao_italiano,
    contexto_italiano,
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
    //fonte_proposta_de_definicao,
   // fonte_do_contexto_de_uso1,
    fonte_do_contexto_de_uso2,
    fonte_do_contexto_de_uso3,
    contexto_de_uso1,
    contexto_de_uso2,
    contexto_de_uso3,
    // proposta,
    fonte_do_contexto_de_uso,
    dicionario_especializado1,
    dicionario_especializado2,
    dicionario_lingua_comum,
    fonte_da_definicao,
   // proposta_de_definicao,
    variantes,
    ortografica,
    geografica,
    sinonimica,
    siglas,
    acronimos,
    status,
  };
}

async function carregarDadosTermo() {
  const term_id = history.state;

  try {
    const result = await fetch(`https://ficha-terminologica-backend.herokuapp.com/termo/${term_id}/list`);

    const json = await result.json();
    console.log(`json`, json);
    const form = document.forms["edit_term"];

    form["entrada"].value = json.entrada;
    form["cat_morfo"].value = json.categoria_gramatical;
    form["genero_grupo"].value = json.genero;
    form["num_grupo"].value = json.numero;
    form["variante"].value = json.variantes;
    form["area"].value = json.area;
    form["autor"].value = json.autor;
    form["ortografia"].value = json.ortografica;
    form["geografica"].value = json.geografica;
    form["sinonimica"].value = json.sinonimica;
    form["siglas"].value = json.siglas;
    form["acronimos"].value = json.acronimos;
    // form["definicao"].value = json.definicao;
    form["dicio-lingua-comu-def"].value = json.dicionario_lingua_comum;
    form["dicio-espe-def"].value = json.dicionario_especializado1;
    form["dicio-espe2-def"].value = json.dicionario_especializado2;
    form["prop_defini"].value = json.definicao;
    form["hiponimo"].value = json.hiponimo;
   // form["hiponimo"].value = json.remissiva;
    form["context_uso_1"].value = json.contexto_de_uso1;
    form["context_uso_2"].value = json.contexto_de_uso2;
    form["context_uso_3"].value = json.contexto_de_uso3;
    //form["remissivas"].value = json.remissivas;
    form["hiperonimo"].value = json.remissiva;
   // form["hiperonimo"].value = json.remissiva;
    form["co-hiponimo"].value = json.co_hiponimo;
    //form["co-hiponimo"].value = json.co_remissiva;

    form["data_de_registro"].value = json.data_de_registro;
    
    form["revisao_linguistica"].value = json.revisao_linguistica;
    form["termo-ingles"].value = json.termo_ingles;
    form["termo-Italiano"].value = json.termo_italiano;
    form["definicao_italiano"].value = json.definicao_italiano;
    form["contexto_italiano"].value = json.contexto_italiano;
    form["termo-frances"].value = json.termo_frances;
    form["termo-Espanhol"].value = json.termo_espanhol;
   // form["verbo"].value = json.verbo;
    // form["fonte_definicao"].value = json.fonte_da_definicao;
    form["font-dici-lingua-comum"].value = json.fonte_dicionario_lingua_comum;
    form["font-dici-especi-1"].value = json.fonte_dicionario_especializado1;
    form["font-dici-especi-2"].value = json.fonte_dicionario_especializado2;
    form["font-prop-defi"].value = json.fonte_da_definicao;
    // form["font_contexto_uso"].value = json.fonte_do_contexto_de_uso1;
    form["font_contexto_uso_1"].value = json.fonte_do_contexto_de_uso;
    form["font_contexto_uso_2"].value = json.fonte_do_contexto_de_uso2;
    form["font_contexto_uso_3"].value = json.fonte_do_contexto_de_uso2;
    form["nota"].value = json.nota;
    form["sugestao"].value = json.sugestao;
    
    let z = localStorage.getItem("tipoUsuario");
    if(z == 3){
      form["redator"].value = json.redator;   
    }
    
    form["data_ultima_revisao"].value = json.data_da_ultima_revisao;
  
    console.log(json.data_de_registro)
    form["frequencia_termo_corpus"].value = json.freq_no_termo_corpus;
      
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
    case "POST":{
      situacao = "Cadastrado";
      
      break;
    }
    case "PUT":{
      var z = localStorage.getItem("tipoUsuario");
      if (z == 3) {
        situacao = "Revisado";
      }else{
        situacao = "Editado";
      }  
      break;
    }
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
    const result = await fetch(`https://ficha-terminologica-backend.herokuapp.com/notification/create`, {
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


