async function buscaCepAxios() {                                    // Função assíncrona para buscar dados do CEP com Axios
    let cep = document.querySelector("input").value                 // Pega o valor do campo input
    console.log("buscando cep", cep)                                // Mostra no console o CEP digitado

    let url = await "https://viacep.com.br/ws/" + cep + "/json/"    // Monta a URL da API (forma 1)
    let url2 = await `https://viacep.com.br/ws/${cep}/json/`        // Monta a URL da API (forma 2)

    // usando axios
    axios.get(url)                                                  // Faz requisição GET com Axios
        .then(function (response) {                                 // Executa quando a requisição é bem-sucedida
            console.log('imprimindo com axios', response.data);     // Exibe dados retornados
            let cep = response.data                                 // Armazena os dados do CEP
            document.querySelector("#dadoRua").innerText = cep.logradouro       // Mostra o logradouro
            document.querySelector("#dadoBairro").innerText = cep.bairro        // Mostra o bairro
            document.querySelector("#dadoCidade").innerText = cep.localidade    // Mostra a cidade
            document.querySelector("#dadoEstado").innerText = cep.uf            // Mostra o estado
        })
}
