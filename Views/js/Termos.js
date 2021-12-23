const URL = "https://ficha-terminologica-backend.herokuapp.com";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

const Termoslist = document.querySelector("#termos_block");
const searchBar = document.getElementById('searchBar');
let STerms = [];
let Terms = [];


searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();

    const filteredTermos =  Terms.filter((Termo) =>{
      return(
        Termo.entrada.toLowerCase().includes(searchString)  
      );
    });
    SearchTerms(filteredTermos);
});


const consultaTermos = async() =>{

  try{
  const retorno = await fetch(`${URL}/terms/list`);
  STerms = await retorno.json();
  
  } catch (err) {
      console.error(err);
  }
  
}
const consultaTerms = async() =>{

  try{
  const retorno = await fetch(`${URL}/terms/list`);
  Terms = await retorno.json();
  SearchTerms(Terms);
  mostrarTotalDeTermos(Terms.length);
    
  
  } catch (err) {
      console.error(err);
  }
  
}

const SearchTerms = (Termos) => {
  const htmlString = Termos
  .map((Termo) => {
    return`
    <div class="termo_block" id="termo_block${Termo.entrada}">
           <p onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</p>      
                 
    </div>
    `; 
    }).sort(function(a, b) {
      return a.localeCompare(b);
    }).join('');

    Termoslist.innerHTML =  htmlString;
}

consultaTermos();
consultaTerms();


function irParaTelaEditarTermo(term_id) {
  var n = 3;
  localStorage.setItem("redator_",n);

  history.pushState(term_id, "", "tela_editar_termo_pesquisador.html");
  window.location.href = "tela_editar_termo_pesquisador.html";
}


function mostrarTotalDeTermos(total_termos) {
  document.querySelector("#total-de-termos").innerHTML = total_termos;
}


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


function irtelacadastrar() {
  
  var v = 2;
  localStorage.setItem("autor_",v);

  location.href = "Cadastrar_termos.html";
}
