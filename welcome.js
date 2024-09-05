const btnDelete = document.getElementById("btnDelete")
const alertMsj = document.getElementById("alertMsj")

btnDelete.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    history.go(0);
});

window.addEventListener("load",function(){
    if(this.localStorage.getItem("nombre")!=null){
        alertMsj.innerHTML = `Hola ${this.localStorage.getItem("nombre")} bienvenido/a de nuevo`
    }

    //Mostramos el mensaje de alerta
    alertMsj.style.display="block";
})