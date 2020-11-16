let register = document.getElementById('register-button');
register.addEventListener('click', validateRegister);

async function validateRegister(e) {
  let password1 = document.getElementById('password1').value;
  //let password2 = document.getElementById('password2').value;
  if(password1 /*== password2*/){
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

