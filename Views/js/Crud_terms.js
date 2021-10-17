const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

async function consultaUsers() {
    const retorno = await fetch(
        "https://ficha-terminologica-backend.herokuapp.com/users/list"
    );
    const Users = await retorno.json();
    ListUsers(Users);
}

let UserHTML;

function ListTerms(Termos) {
    Termos.forEach((Termo) => {
        TermoHTML = `
    
    <div class="termos">
    <div class="borda-termo">
      <div class="termo">
        <p onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</p>
      </div>
      <i class="fas fa-trash" onclick="DeletandoTerms()"></i>
    </div> 
      `;
        Termoslist.innerHTML = Termoslist.innerHTML + TermoHTML;
    });
}

async function DeletandoTerms() {
    const retorno = await fetch(
        `https://ficha-terminologica-backend.herokuapp.com/term/2/delete`, { method: "delete" }
    );
    const json = await retorno.json();
    alert("" + json.message);
    console.log(json);
    DeleteTerms();
}

function DeleteTerms() {
    Termoslist.innerHTML = "";
}

consultaTerms();

async function cadastrarTermo(event) {
    event.preventDefault();

    const data = pegarInputsDoForm("create_term");

    try {
        const result = await fetch(
            "https://ficha-terminologica-backend.herokuapp.com/term/create", {
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

        const form = document.forms["edit_term"];

        form["entrada"].value = json.entrada;
        form["cat_morfo"].value = json.categoria_gramatical;
        form["genero_grupo"].value = json.genero;
        form["variantes"].value = json.variantes;

        console.log(`dados do termo carregados`);
    } catch (error) {
        console.log(`Erro ao carregar dados do termo`, error);
    }
}