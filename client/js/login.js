let logoutNavBar = document.getElementById('logout-navbar');
logoutNavBar.style.display = "none";//oculto boton logout
let carritoNavBar = document.getElementById('carrito-navbar');
carritoNavBar.style.display = "none";//oculto boton carrito
let bibliotecaNavBar = document.getElementById('biblioteca-navbar');
bibliotecaNavBar.style.display = "none";//oculto boton biblioteca
let loginNavBar = document.getElementById('login-navbar');
loginNavBar.style.display = "block";//muestro boton logout
let registerButton = document.getElementById('register-navbar');
registerButton.style.display = "block";//muestro boton register

let loginbutton = document.getElementById('login-button');
loginbutton.addEventListener('click', validateLogin);//asigno evento a boton de login del form

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