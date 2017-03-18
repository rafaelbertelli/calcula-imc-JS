var arrayPacientes = document.getElementsByClassName('paciente');

function percorreArray(arrayPacientes, comportamento){
	
	var posicaoAtual = 0;
	var ultimoPaciente = arrayPacientes.length - 1; //pega o ultimo elemento do array

	for(posicaoAtual; posicaoAtual <= ultimoPaciente; posicaoAtual++){
		var pacienteSelecionado = arrayPacientes[posicaoAtual];
		var tdImc = pacienteSelecionado.getElementsByClassName('info-imc')[0];

		comportamento(pacienteSelecionado);
	}
}