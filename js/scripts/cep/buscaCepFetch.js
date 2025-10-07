async function buscaCepFetch() {                            // Função assíncrona para buscar CEP usando Fetch API

    let cep = document.querySelector("input").value         // Pega o valor digitado no input
    console.log("buscando cep", cep)                        // Mostra o CEP no console

    let url = await "https://viacep.com.br/ws/" + cep + "/json/"    // Monta a URL com concatenação
    let url2 = await `https://viacep.com.br/ws/${cep}/json/`        // Monta a URL com template string

    salvarLogs(url, 'cep')                                          // Chama função para salvar logs da requisição

    fetch(url)                                                      // Faz a requisição HTTP para a API ViaCEP
        .then((res) => {                                            // Recebe a resposta bruta
            console.log('resposta aqui', res)                       // Exibe resposta no console
            return res.json()                                       // Converte resposta para JSON
        })
        .then((cep) => {                                            // Recebe os dados já convertidos
            console.log(cep.logradouro)                             // Exibe o logradouro no console
            document.querySelector("#dadoRua").innerText = cep.logradouro           // Mostra o logradouro
            document.querySelector("#dadoBairro").innerText = cep.bairro            // Mostra o bairro
            document.querySelector("#dadoCidade").innerText = cep.localidade        // Mostra a cidade
            document.querySelector("#dadoEstado").innerText = cep.uf                // Mostra o estado
        })
}
