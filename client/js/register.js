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
let register = document.getElementById('register-button');
register.addEventListener('click', validateRegister);

async function validateRegister(e) {
  let password1 = document.getElementById('password1').value;
  //let password2 = document.getElementById('password2').value;
  if (password1 /*== password2*/) {
    let user = {
      name: document.getElementById('email').value,
      password: password1,
    };

    let respuesta = await fetch('/register/singup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (await respuesta.json()) {
      window.sessionStorage.setItem('userLogged', true);
      window.sessionStorage.setItem('user', user);
      window.location.href = 'http://localhost:3000/index.html';
    }
    //mostrar cartel de datos erroneos
    else {
      console.log("fallo respuesta.json");
    }
  }
}

