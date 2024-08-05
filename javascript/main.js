const cepConsultado = document.getElementById("cep")
const botaoConsulta = document.getElementById("consultar")

function consultarCep(cepConsultado) {
    fetch(`https://viacep.com.br/ws/${cepConsultado}/json`)
    .then(response => response.json())
    .then(data => {console.log(data)})
}


botaoConsulta.addEventListener('click', () => consultarCep(cepConsultado.value));