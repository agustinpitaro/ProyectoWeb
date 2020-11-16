let logoutNavBar = document.getElementById('logout-navbar');
logoutNavBar.style.display = "none";//oculto boton logout

let registerNavBar = document.getElementById('register-navbar');

let loginbutton = document.getElementById('login-button');
let loginNavBar = document.getElementById('login-navbar');
 
loginbutton.addEventListener('click', validateLogin);//asigno evento a boton de login del form
logoutNavBar.addEventListener('click', logOut);//asigno evento a boton de logout del navbar


async function validateLogin(e) {
  let user = {
    name: document.getElementById('username').value,
    password: document.getElementById('password').value,
  };

  let respuesta = await fetch('/login/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (await respuesta.json()) {
    window.sessionStorage.setItem('userLogged', true);
    window.sessionStorage.setItem('user', user);
    window.location.href = 'http://localhost:3000';
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
  }
}

function logOut(e){   
  window.sessionStorage.clear();
  debugger;
  return true;
}

function checkSession(){
  if (window.sessionStorage.getItem('userLogged')){
    loginNavBar.style.display = "none";
    registerNavBar.style.display = "none";
    logoutNavBar.style.display = "block";
  }
}

checkSession();

