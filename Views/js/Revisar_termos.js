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

}
var Termo 

const SearchTerms = (Termos) => {
  const htmlString = Termos
  .map((Termo) => {
    console.log(Termo.status)
    
    return`
    <div class="termo_block" id="termo_block${Termo.entrada}">
           <p onclick="irParaTelaEditarTermoEspecialista(${Termo.id})">${Termo.entrada}</p>  
           <img id="revisar" onclick="irParaTelaEditarTermoEspecialista(${Termo.id})" src="${Termo.status}" > 
    </div>
    `; 
    
    }).sort(function(a, b) {
      return a.localeCompare(b);
    }).join('');
  
    //console.log(htmlString)
    Termoslist.innerHTML =  htmlString;
}

consultaTermos();
consultaTerms();

function irParaTelaEditarTermoEspecialista(term_id) {
  history.pushState(term_id, "", "tela_revisar_termo.html");
  window.location.href = "tela_revisar_termo.html";
}



function mostrarTotalDeTermos(total_termos) {
  document.querySelector("#total-de-termos").innerHTML = total_termos;
}

function irtelacadastrar() {
  
  var v = 4;
  localStorage.setItem("revisar_",v);

  location.href = "tela_revisar_termo.html";
}
