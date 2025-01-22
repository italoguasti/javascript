function buscaCEP() {
    const cepDigitado = document.getElementById('cep').value

    const baseUrl = `https://viacep.com.br/ws/${cepDigitado}/json/`

    fetch(baseUrl).then((response) => {
        return response.json()
    }).then((data) => {
        document.getElementById('logradouro').value = data.logradouro
        document.getElementById('municipio').value = data.localidade
        document.getElementById('bairro').value = data.bairro
        document.getElementById('uf').value = data.uf
    })
}