let registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', validateRegister);

async function validateRegister(e) {
  let password1 = document.getElementById('password1').value;
  if (password1) {
    let user = {
      name: document.getElementById('email').value,
      password: password1,
    };
    debugger;
    let respuesta = await fetch('/register/singup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (await respuesta.json()) {
      window.sessionStorage.setItem('userLogged', true);
      window.sessionStorage.setItem('user',  user.name);
      window.location.href = 'http://localhost:3000';
    }
    //mostrar cartel de datos erroneos
    else {
      console.log("fallo respuesta.json");
    }
  }
}

