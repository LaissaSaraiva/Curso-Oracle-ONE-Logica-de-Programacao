var pacientes = document.querySelectorAll(".paciente") /*Para selecionar todos os pacientes.*/

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    console.log (event.target); /* quem sofreu o evento dentro da tabela*/
   event.target.parentNode.classList.add("fadeOut");
   
   setTimeout(function(){
    event.target.parentNode.remove();
    }, 500);  
})

/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado com duplo click.");
        this.remove(); /*this reserva a quem o evento de duplo clique foi direcionado)
    });
});*/