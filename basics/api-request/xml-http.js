function buscaCEP() {
    const cepDigitado = document.getElementById('cep').value

    const baseUrl = `https://viacep.com.br/ws/${cepDigitado}/json/`

    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', baseUrl, true)

    xhttp.onload = () => {
        const responseAPI = JSON.parse(xhttp.response)

        document.getElementById('logradouro').value = responseAPI.logradouro
        document.getElementById('municipio').value = responseAPI.localidade
        document.getElementById('bairro').value = responseAPI.bairro
        document.getElementById('uf').value = responseAPI.uf
    }

    xhttp.send()
}