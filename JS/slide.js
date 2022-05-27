
//  seleccionamos los dos elementos que serán clickables

newFunction();

function newFunction() {
  const toggleButton = document.getElementById("button-menu");
  const navWrapper = document.getElementById("nav");

  /*
    cada ves que se haga click en el botón
    agrega y quita las clases necesarias
    para que el menú se muestre.
  */
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
  });

  /*
    Cuándo se haga click fuera del contenedor de enlaces
    el menú debe esconderse.
  */
  navWrapper.addEventListener("click", e => {
    if (e.target.id === "nav") {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
    }
  });
}




  const nombre = document.getElementById("name")
  const apellido = document.getElementById("lastname")
  const email = document.getElementById("email")
  const mensaje = document.getElementById("message")
  const form = document.getElementById("form")
  const parrafo = document.getElementById("warnings")

  form.addEventListener("submit", e=>{
      e.preventDefault()
      let warnings =""
      let entrar = false
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
      parrafo.innerHTML = ""
    if(nombre.value.length<3){
      warnings += 'El Nombre no es válido <br>'
      entrar = true
    }
    if(apellido.value.length<2){
      warnings += 'El Apellido no es válido <br>'
      entrar = true
    }
    if (!regexEmail.test(email.value)){
      warnings += 'El email no es valido <br>'
      entrar = true
    }

    if(mensaje.value.length<20){
      warnings += 'El mensaje es muy corto <br>'
      entrar = true
    }

    if(entrar){
      parrafo.innerHTML = warnings
    }

    else{
      alert('El mensaje se envió correctamente')
    }
  })
