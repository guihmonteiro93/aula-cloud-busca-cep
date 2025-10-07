async function buscaCepAjax() {                            // Define função assíncrona para buscar dados do CEP
    let cep = document.querySelector("input").value        // Pega o valor digitado no input
    console.log("buscando cep", cep)                       // Exibe o CEP no console para depuração

    let url = await "https://viacep.com.br/ws/" + cep + "/json/"        // Monta a URL de consulta (forma 1)
    let url2 = await `https://viacep.com.br/ws/${cep}/json/`            // Monta a URL de consulta (forma 2, com template string)

                                                            // usando ajax
    $.ajax({                                                // Faz requisição AJAX usando jQuery
        url: url,                                           // Endereço da API
        method: 'GET',                                      // Método HTTP usado
        success: function (data) {                          // Função executada se a requisição for bem-sucedida
            console.log(data);                              // Mostra os dados retornados no console
            document.querySelector("#dadoRua").innerText = data.logradouro      // Mostra o logradouro na tela
            document.querySelector("#dadoBairro").innerText = data.bairro       // Mostra o bairro na tela
            document.querySelector("#dadoCidade").innerText = data.localidade   // Mostra a cidade na tela
            document.querySelector("#dadoEstado").innerText = data.uf           // Mostra o estado na tela
        },
        error: function (jqXHR, textStatus, errorThrown) {                      // Função chamada em caso de erro
            console.error('Erro na requisição:', textStatus, errorThrown);      // Mostra o erro no console
        }
    });
}
