async function validateRegister(e) {
    let user = {
      name: document.getElementById('username').value,
      password: document.getElementById('password').value,
    };

    let respuesta = await fetch('/login/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (await respuesta.json()) {
        

      }


}
let register = document.getElementById('register-button');
if (register){
    register.addEventListener('click', validateRegister);
}
