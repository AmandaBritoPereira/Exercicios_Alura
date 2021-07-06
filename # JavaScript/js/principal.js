var titulo = document.querySelectorAll (".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll (".paciente"); // Seleciono um pai.
console.log (paciente);

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector (".info-peso"); // Seleciono um filho (.info-peso), a partir do pai #primeiro-paciente.
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector (".info-altura");
	var altura = tdAltura.textContent;

	var infoImc = paciente.querySelector (".info-imc");

	var pesoValido = true;
	var alturaValido = true;

	if (peso >= 250 || peso <= 0) {
		tdPeso.textContent = "verifique peso";
		pesoValido = false;
		paciente.StyleColor = "red";
	} 

	if (altura >= 3.00|| altura <= 0) {
		tdAltura.textContent = "verifique altura";
		alturaValido= false;
	}

	if (pesoValido && alturaValido) {
		var imc = peso / (altura * altura);
		infoImc.textContent = imc.toFixed(1); // Conta: altura.altura / peso

	} else {
		infoImc.textContent = "inválido";
	}
}