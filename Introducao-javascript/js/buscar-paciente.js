var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function() {
    /*console.log("Buscando Paciente.")*/
    var xhr = new XMLHttpRequest(); /*//busca dados através de uma requisição hhttp*/

    xhr.open ("GET","https://api-pacientes.herokuapp.com/pacientes");     /* abre a conexão com o endereço*/

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); /*transforma jason em array*/
            
            pacientes.forEach( function(paciente) {
                adicionaPacienteNaTabela (paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
    
    xhr.send();

});


/*https://api-pacientes.herokuapp.com/pacientes*/