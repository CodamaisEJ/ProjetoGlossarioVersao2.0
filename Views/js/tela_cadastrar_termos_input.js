// State
let VarianteStatus = false;
let DefinicaoStatus = false;
let ContextoUsoStatus = false;
let RemissivasStatus = false;
let IdiomasStatus = false;
let FonteDefinicaoStatus = false;
let FonteContextoUsoStatus = false;



//Botões
//----------------------------------------------------------------------------------------------------------
function butaoVariante(){
    if(VarianteStatus == false){
        bckgroundImgPolygonRotacion(true,"variante");
        displayOnIds(['ortografia-block','geografica-block','sinonimica-block','siglas-block','acronimos-block']);
        VarianteStatus = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"variante");
        displayNoneIds(['ortografia-block','geografica-block','sinonimica-block','siglas-block','acronimos-block']);
        VarianteStatus = false;
    }
}
function butaoDefinicao(){
    if(DefinicaoStatus == false){
        bckgroundImgPolygonRotacion(true,"definicao");
        displayOnIds(['dicio-lingua-comu-def-block']);
        DefinicaoStatus = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"definicao");
        displayNoneIds(['dicio-lingua-comu-def-block','dicio-espe-def-block','dicio-espe2-def-block','prop_defini-block']);
        DefinicaoStatus = false;
    }
}
function butaoContextoUso(){
    if(ContextoUsoStatus == false){
        bckgroundImgPolygonRotacion(true,"context_uso");
        displayOnIds(['context_uso_1_block']);
        ContextoUsoStatus = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"context_uso");
        displayNoneIds(['context_uso_1_block','context_uso_2_block','context_uso_3-block']);
        ContextoUsoStatus = false;
    }
}
function butaoRemissivas(){
    if(RemissivasStatus == false){
        bckgroundImgPolygonRotacion(true,"remissivas");
        displayOnIds(['hiperonimo-block','hiponimo-block','co-hiponimo-block']);
        RemissivasStatus  = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"remissivas");
        displayNoneIds(['hiperonimo-block','hiponimo-block','co-hiponimo-block']);
        RemissivasStatus  = false;
    }
}
function butaoIdiomas(){
    if(IdiomasStatus == false){
        bckgroundImgPolygonRotacion(true,"idiomas");
        displayOnIds(['termo-ingles-block','termo-italiano-block', 'termo-italiano-contexto-block', 'termo-italiano-definicao-block' ,'termo-frances-block','termo-Espanhol-block']);
        IdiomasStatus  = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"idiomas");
        displayNoneIds(['termo-ingles-block','termo-italiano-block', 'termo-italiano-contexto-block', 'termo-italiano-definicao-block' ,'termo-frances-block','termo-Espanhol-block']);
        IdiomasStatus  = false;
    }
}

function butaoFonteDefinicao(){
    if(FonteDefinicaoStatus == false){
        bckgroundImgPolygonRotacion(true,"fonte_definicao");
        displayOnIds(['font-dici-lingua-comum_block']);
        FonteDefinicaoStatus  = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"fonte_definicao");
        displayNoneIds(['font-dici-lingua-comum_block','font-dici-especi-1_block','font-dici-especi-2_block','font-prop-defi_block']);
        FonteDefinicaoStatus  = false;
    }
}
function butaoFontContextoUso(){
    if(FonteContextoUsoStatus == false){
        bckgroundImgPolygonRotacion(true,"font_contexto_uso");
        displayOnIds(['font_contexto_uso_1_block']);
        FonteContextoUsoStatus  = true;
    }
    else{
        bckgroundImgPolygonRotacion(false,"font_contexto_uso");
        displayNoneIds(['font_contexto_uso_1_block','font_contexto_uso_2_block','font_contexto_uso_3_block']);
        FonteContextoUsoStatus  = false;
    }
}
//Funções help
//-------------------------------------------------------------------------------------------------------
let butaoMais = id => document.getElementById(`${id}`).style.display = "flex";

let bckgroundImgPolygonRotacion = (boolean,id) =>{
    if(boolean == true){
        document.getElementById(`${id}`).style.backgroundImage = "url('./img/Polygon_reverse.png')";
    }
    else if(boolean == false){
        document.getElementById(`${id}`).style.backgroundImage = "url('./img/Polygon\ 6.png')";
    }
}
let displayNoneIds = ([...args])=> args.forEach(e => document.getElementById(`${e}`).style.display = 'none');
let displayOnIds = ([...args])=> args.forEach(e => document.getElementById(`${e}`).style.display = 'flex');

let butaoMenos = (id,bool,[...args]) => {
    if(bool == true){
        displayNoneIds(args);
        document.getElementById(`${id}`).style.display = "none";
    }
    else{
        document.getElementById(`${id}`).style.display = "none";
    }
}
//-----------------------------------------------------------------------------------

async function consultandoUser() {


    const retornouser = await fetch(
      `https://ficha-terminologica-backend.herokuapp.com/users/list`
    );
    Users = await retornouser.json();
  
    var autor = localStorage.getItem("motrar_user");

    var redator = localStorage.getItem("motrar_user");

    let especial = localStorage.getItem("motrar_user");
    //var user_autor = localStorage.getItem("mostrar_user");
    // var tipouser = localStorage.getItem("tipouser");
    mostrar_autor(autor)

    mostrar_redator(redator) 

    mostrar_especialista(especial)
     
     console.log(autor)
     console.log(redator)
     console.log(especial)
  }
  
  
  function mostrar_autor(autor_name) {
    document.querySelector("#autor").innerHTML = autor_name;
   }

   function mostrar_redator(redator_name) {
    document.querySelector("#redator").innerHTML = redator_name;
   }

   function mostrar_especialista(especialista_name) {
    document.querySelector("#revisao_especialista").innerHTML = especialista_name;
   }
   consultandoUser();


   


  