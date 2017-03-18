percorreArray(arrayPacientes, function (pacienteSelecionado){
	
	var paciente = {
		nome : pacienteSelecionado.getElementsByClassName('info-nome')[0].textContent,  //como o getElementsByClassName devolve um array, tenho que pegar o primeiro elemento deste array. Por isso eu coloco a posição [0] do array.
		peso : pacienteSelecionado.getElementsByClassName('info-peso')[0].textContent,
		altura : pacienteSelecionado.getElementsByClassName('info-altura')[0].textContent,
		pegaImc : function(){
			if(this.altura != 0 && this.peso != 0){
				var imc = this.peso / (this.altura * this.altura);
				return imc;
			}else{
				alert("Corrija peso e altura");
			}
		},
		pegaDescImc : function(){
			switch(true){
					case (imc < 18.5):
						console.log("abaixo do peso ideal");
						break;
					case (imc < 25):
						console.log("peso normal");
						break;
					case (imc < 30):
						console.log("excesso de peso");
						break;
					case (imc < 35):
						console.log("obeso I");
						break;
					case (imc < 40):
						console.log("obeso II");
						break;
					case (imc >= 40):
						console.log("obeso III");
						break;
					default:
						text = "faça o cálculo do seu IMC";	
				}
			}
		};	

	}
);

