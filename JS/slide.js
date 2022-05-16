
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

//Metodo Generación Formulario
function GeneraForm(){
  ////Crear el objeto formulario
  let formulario = document.createElement("form");
  ////Crear el objeto label de titulo
  let titulo=document.createElement("label");
  ////Crear el objeto caja de texto Nombres
  let cajaTextNombres=document.createElement("input");
  ////Crear el objeto caja de texto Apellidos
  let cajaTextApellidos=document.createElement("input");
  ////Crear el objeto caja de texto Email
  let cajaTextEmail=document.createElement("input");    
  ////Crear el objeto caja de texto Asunto del Mensaje
  let cajaTextAsunto=document.createElement("input");    
  ////Crear el objeto area de texto del Mensaje
  let cajaTextMensaje=document.createElement("textarea");    
  ////Crear el objeto boton
  let boton=document.createElement("input");    
  ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");//Asignar el atributo method
        formulario.setAttribute('action', "");//Asignar el atributo action
        formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Nombres
        cajaTextNombres.setAttribute('type', "text");//Asignar el atributo type
        cajaTextNombres.setAttribute('placeholder', "Nombres");//Asignar el atributo placeholder
        cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Apellidos
        cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Email
        cajaTextEmail.setAttribute('type', "text");//Asignar el atributo type
        cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
        cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Asunto
        cajaTextAsunto.setAttribute('type', "text");//Asignar el atributo type
        cajaTextAsunto.setAttribute('placeholder', "Asunto");//Asignar el atributo placeholder
        cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto area de texto de Mensaje
        cajaTextMensaje.setAttribute('placeholder', "Mensaje");//Asignar el atributo placeholder
        cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");//Asignar el atributo style

  ////Asignar atributos al objeto boton
  boton.setAttribute('type', "button");//Asignar el atributo type	
        boton.setAttribute('value', "Enviar");//Asignar el atributo value
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick
        formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        formulario.appendChild(cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
        formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
        formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
        formulario.appendChild(cajaTextAsunto);//Agregar el objeto caja de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
        formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
        document.getElementById('ContentFormulario').appendChild(formulario);//Agregar el formulario a la etiquete con el ID			
}
