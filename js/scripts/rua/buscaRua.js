function buscaRua() {       // Função para buscar ruas via API ViaCEP

    $(".preloader-wrapper").show(); // MOSTRA O LOADING
    estado = document.querySelector("#estado").value    // Pega o valor selecionado no select de estado
    cidade = document.querySelector("#cidade").value    // Pega o valor selecionado no select de cidade
    rua = document.querySelector("#rua").value          // Pega o valor digitado no input de rua

    url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`   // Monta a URL da API usando estado, cidade e rua

    let log = {             // Cria um objeto de log para salvar a busca
        url: url,           // URL da requisição
        data: new Date().toLocaleString(),  // Data e hora da busca
        tipo: 'rua'         // Tipo da busca: rua
    }

    let logs = JSON.parse(localStorage.getItem('logs')) || []       // Recupera logs do localStorage ou cria array vazio se não existir
    logs.push(log)                                                  // Adiciona o novo log ao array
    localStorage.setItem('logs', JSON.stringify(logs))              // Salva o array atualizado no localStorage

    console.log("url montada", url)                 // Mostra a URL montada no console para depuração

    fetch(url)               // Faz requisição para a API
        .then((res) => {
            return res.json()   // Converte a resposta da API para JSON
        })
        .then((ruas) => {   // Recebe o JSON com os dados das ruas
            console.log(ruas)
            let listaRuas = document.querySelector("#lista-ruas")   // Seleciona o elemento onde a lista será exibida

            let ruasList = ""   // Inicializa string para construir a lista de ruas
            for (let i = 0; i < ruas.length; i++) { // Percorre cada rua retornada pela API
                ruasList += `<ul class="collection">
                  <li class="collection-item">Rua: <span id="dadoRua">${ruas[i].logradouro}</span></li>
                  <li class="collection-item">BAIRRO: <span id="dadoBairro">${ruas[i].bairro}</span></li>
                  <li class="collection-item">CIDADE: <span id="dadoCidade">${ruas[i].localidade}</span></li>
                  <li class="collection-item">ESTADO: <span id="dadoEstado">${ruas[i].estado}</span></li>
               </ul>`   // Adiciona os dados de cada rua na string HTML
            }

            setTimeout(() => {  // Aguarda 2 segundos antes de mostrar os dados (simula carregamento)
                listaRuas.innerHTML = ruasList  // Insere a lista de ruas no HTML
                $(".preloader-wrapper").hide(); // ESCONDE O LOADING
            }, 2000)
        })

}