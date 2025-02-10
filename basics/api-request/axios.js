// Axios (Biblioteca)
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

function buscaCEP() {
    const cepDigitado = document.getElementById('cep').value

    const baseUrl = `https://viacep.com.br/ws/${cepDigitado}/json/`


    axios.get(baseUrl).then((response) => {
        const responseAPI = response.data

        document.getElementById('logradouro').value = responseAPI.logradouro
        document.getElementById('municipio').value = responseAPI.localidade
        document.getElementById('bairro').value = responseAPI.bairro
        document.getElementById('uf').value = responseAPI.uf
    }).catch((error) => {
        console.log(error)
    })
}