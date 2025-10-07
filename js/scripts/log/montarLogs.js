function montarLogs(url) {                      // Função que reconstrói uma busca anterior a partir da URL salva
    console.log("montando logs", url)           // Mostra a URL no console
    let params = url.split("/")                 // Divide a URL em partes separadas por "/"
    console.log(params)                         // Mostra os parâmetros obtidos

    if (params.length == 7) {                   // Se for uma busca por CEP (formato curto)
        document.querySelector("#cep-link").click()         // Abre a aba de busca por CEP
        document.querySelector("#cep").value = params[4]    // Preenche o campo CEP
        buscaCepFetch()                                     // Executa a busca pelo CEP
    } else {                                                // Caso contrário, é uma busca por rua
        document.querySelector("#rua-link").click()         // Abre a aba de busca por rua
        document.querySelector("#estado").value = params[4] // Preenche o estado
        document.querySelector("#rua").value = params[6]    // Preenche a rua

        setTimeout(() => {                      // Espera meio segundo
            pegarCidades()                      // Carrega as cidades do estado
        }, 500)
        setTimeout(() => {                      // Espera mais um pouco
            document.querySelector("#cidade").value = params[5]     // Preenche a cidade
            buscaRua()                                              // Executa a busca pela rua
        }, 1000)
    }
}
