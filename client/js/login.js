"use strict"
let logginbutton = document
.getElementById('login-button')
.addEventListener('click', validateLogin);

/*let logoutButton = document
.getElementById('logout-button')
.addEventListener('click', LogOut);*/

async function validateLogin() {
  console.log("funcion validar");
  let user = {
    name: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };
  console.log(user);
  let response = await fetch("http://localhost:3000/login.json");

  if(response.ok){
    let data = await response.json();
    if(checkUser(user, data.users)){
      window.sessionStorage.setItem('userLogged', true);
      window.sessionStorage.setItem('user', user);
      window.location.href = 'http://localhost:3000/index.html';
      console.log("Esta to bien");
    }
    //mostrar cartel de datos erroneos
    else {
      document.getElementById('username').focus();
      document
        .getElementById('login-button')
        .setAttribute('data-toggle', 'modal');
      document
        .getElementById('login-button')
        .setAttribute('data-target', '#myModal');
        console.log("Ta to mal");
    }
  }
  else{
    console.log("algo salio mal xD");
}

}

function checkUser(user, data){
  data.forEach( userBase =>{
    if(user.name.equals(userBase.name) && user.password.equals(userBase.password))
      console.log("usuario valido");
      return true;
  })
  console.log("usuario invalidad");
  return false;
}

function LogOut(){
  window.sessionStorage.clear();

}