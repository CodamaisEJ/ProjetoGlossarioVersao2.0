 
const Userslist = document.querySelector('#users');

async function consultaUsers(){
  const retorno = await fetch('https://ficha-terminologica-backend.herokuapp.com/users/list');
  const Users = await retorno.json();
  ListUsers(Users)
}

let UserHTML

function ListUsers(Users){
    Users.forEach(User => {
      UserHTML = `
      <style> 
          #users{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 250px;
            font-family: 'Popins', sans-serif;
            font-style: normal;
            margin-bottom: 30px;
            align-content: space-around;
            font-size: 20px;
            color: #234F90;
          } 
          i{
            cursor:"pointer";
          }
          </style> 
      <div class="users" id="users"> 
                 
           <p>${User.nome}</p>
           <p>${User.tipo_de_usuario}</p>
           <p>${User.email}</p>
           <p><i class="fas fa-pencil-alt" id="lapis"></i><i class="fas fa-trash-alt" id="lixeira" onclick="DeletandoUser()"></i></p>
          
      </div>
      `

      Userslist.innerHTML =  Userslist.innerHTML + UserHTML
    });
}

async function DeletandoUser(){
  const retorno = await fetch('https://ficha-terminologica-backend.herokuapp.com/user/3/delete',{method:"delete"});
  const json = await retorno.json();
  alert("" + json.message)
  console.log(json)
  DeleteUsers()
}
function DeleteUsers(){
  Userslist.innerHTML  = ""
  
}



consultaUsers()

//DeletandoUser()