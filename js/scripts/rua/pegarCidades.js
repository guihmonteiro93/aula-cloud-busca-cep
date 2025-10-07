function pegarCidades() {                               // Função para preencher o select de cidades baseado no estado
    uf = document.querySelector("#estado").value        // Pega o valor do estado selecionado
    selectCidade = document.querySelector("#cidade")    // Seleciona o elemento <select> das cidades
    let urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`     // URL da API do IBGE

    fetch(urlCidades)                                   // Faz requisição para a API do IBGE
        .then((res) => { return res.json() })           // Converte resposta para JSON
        .then((cidades) => {                            // Recebe array de cidades
            let cidadesList = '<option value="" disabled selected>Escolha uma cidade</option>'      // Opção padrão
            for (let i = 0; i < cidades.length; i++) {                                              // Percorre todas as cidades
                cidadesList += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`     // Monta opções do select
            }

            selectCidade.innerHTML = cidadesList        // Insere opções no select
        })
}
