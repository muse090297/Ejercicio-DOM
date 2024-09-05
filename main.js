const btnSave = document.getElementById("btnSave")
const txtName = document.getElementById("inputName")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")



btnSave.addEventListener("click", function(event){
    event.preventDefault();

    //Validamos que el nombre sea minimo de 3 letras
    //En caso contrario ponemos una alerta
    txtName.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display="none";
    isValid = false;

    if(txtName.value.length<3)
        {   // Ponemos un recuadro de alerta
            txtName.style.border="solid red medium";
            alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> debe de contener al menos 3 caracteres.</br>";
            alertValidaciones.style.display="block";
            return false;
          }

          localStorage.setItem("nombre",txtName.value);


});

window.addEventListener("load",function(){
    if(this.localStorage.getItem("nombre")!=null){
        nombre = this.localStorage.getItem("nombre")
    }
})