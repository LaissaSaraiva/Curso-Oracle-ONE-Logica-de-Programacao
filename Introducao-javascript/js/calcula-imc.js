	    
    //alert("Olá, mundo!");//
			//console.log("Oi, mundo"); // o Texto que quero imprimir (print) se chama STRING//
			//console.log(document);//

			//console.log(document.querySelector("h1")); //  função que permite buscar pequenos pedaçõs do documento para poder testar.//

            //@ts-check//
            
			var titulo = document.querySelector(".titulo"); //guardo apenas essa informação em um variavel//
		//	console.log(titulo); //imprime a tag inteira no console//
		//	console.log(titulo.textContent); // imprime no console apenas o texto//

			titulo.textContent = "Aparecida Nutricionista";
		
         //   var paciente = document.querySelector("#primeiro-paciente"); Seleciona apenas um linha//

            var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll = retorna um array dos pacientes // 
            
            console.log("O tamanho do meu Array é " + pacientes.length);

                        
//loop for :
            for (var i = 0; i < pacientes.length; i++) {
                console.log(pacientes [i]);

                var paciente = pacientes[i];

            var tdPeso = paciente.querySelector(".info-peso")
            var peso = tdPeso.textContent;
        
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;

            var tdImc = paciente.querySelector(".info-imc");

            var pesoValido = validaPeso(true); //valor booleano  true ou false // 
            var alturaValida = validaAltura(true);

                if (!pesoValido) { // || representa um ou outro é verdade //
                    console.log("Peso inválido");
                    pesoValido = false;
                    tdImc.textContent = "Peso inválido!";
                    paciente.style.color = "red";
                    paciente.classList.add("paciente-invalido");
                }

                if (!alturaValida) {
                    console.log("Altura inválida!");
                    alturaValida = false;
                    tdImc.textContent = "Altura inválida";
                    paciente.style.color = "red";
                    paciente.style.backgroundColor ="orange";
                }
            
                if (alturaValida && pesoValido) { // && se as duas coisas forem verdade//
                    
                    var imc = calculaImc (peso, altura);
                     // massa / altura*altura
                    tdImc.textContent = imc; // limita a 2 casas decimais // 
                }  

                }

//titulo.addEventListener("click", mostraMensagem);

function validaPeso (peso) {

    if (peso >= 0 && peso <= 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura (altura) {
    
    if(altura >=0 && altura <=3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


//function mostraMensagem () {
// console.log("olá, eu fui clicado!");
//}
            
//titulo.addEventListener("click", function () { //add um escutador de evento//
  //  console.log("Olha só! Posso chamar uma função anônima!");
//});
         
