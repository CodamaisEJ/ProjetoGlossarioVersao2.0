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
  const retorno = await fetch(`${URL}/termos/list`);
  STerms = await retorno.json(); 

  } catch (err) {
      console.error(err);
  }
  
}

const consultaTerms = async() =>{
  
  try{
  const retorno = await fetch(`${URL}/termos/list`);
  Terms = await retorno.json();
  
  SearchTerms(Terms);
  mostrarTotalDeTermos(Terms.length);
  
  } catch (err) {
      console.error(err);
  }

  const retornouser = await fetch(
     `${URL}/users/list`
  );
  Users = await retornouser.json();

  var login = localStorage.getItem("motrar_user");

  mostraruser(login)
  console.log(login)
}

const SearchTerms = (Termos) => {
  const htmlString = Termos
  .map((Termo) => {
    return`
    <div class="termo_block" id="termo_block${Termo.entrada}">
           <p onclick="irParaTelaEditarTermo(${Termo.id})">${Termo.entrada}</p>      
           <img src="./img/icon_lixo.png" onclick="DeletandoTerms(${Termo.id})">       
    </div>
    `; 
      }).sort(function(a, b) {
        return a.localeCompare(b);
      }).join('');
    
    Termoslist.innerHTML =  htmlString;   
}




async function DeletandoTerms(termo_id) {
  const termo = await verTermoEspecifico(termo_id);

  try {
    const result = await fetch(`${URL}/termo/${termo.id}/delete`, {
      method: "DELETE",
    });
    const json = await result.json();

    if (result.status === 200) {
      // Criando notificação
      const { id, entrada, autor } = termo;

      criarNotificacao(null, id, entrada, autor, "DELETE");

      var vali = 1;
      localStorage.setItem("notifica",vali);
      
      alert("Termo Deletado com Sucesso!");
      DeleteTerms(termo_id);
      
    } else if (result.status === 404) {
      console.log(`não encontrado`);
    }
    
  } catch (error) {
    console.log(`Erro ao deletar termo`, error.message);
  }
  location.reload();
 
}


function DeleteTerms(termo_id) {
  const el_termo = document.querySelector(`#termo${termo_id}`);
  Termoslist.removeChild(el_termo);
}


function irParaTelaEditarTermo(term_id) {
  var n = 3;
  localStorage.setItem("redator_",n);
  
  history.pushState(term_id, "", "tela_editar_termo.html");
  window.location.href = "tela_editar_termo.html";
}


function mostrarTotalDeTermos(total_termos) {
  document.querySelector("#total-de-termos").innerHTML = total_termos;
}

function mostraruser(nome_usuario) {
 document.querySelector("#nome_usuario").innerHTML = nome_usuario;
}

async function verTermoEspecifico(termo_id) {
  try {
    const result = await fetch(`${URL}/termo/${termo_id}/list`);
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

consultaTermos();
consultaTerms();


function verificar() {
  location.href = "verificar_termos.html";
}


function irtelacadastrar() {
  
  var v = 2;
  localStorage.setItem("autor_",v);

  location.href = "tela_cadastrar_termos.html";
}



