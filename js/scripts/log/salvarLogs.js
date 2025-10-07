function salvarLogs(url, tipo) {    // Função que salva logs no localStorage
    console.log('salvando logs')    // Exibe mensagem no console
    let log = {                     // Cria objeto com dados do log
        url: url,                   // URL acessada
        data: new Date().toLocaleString(),      // Data e hora atual
        tipo: tipo                              // Tipo da busca (cep ou rua)
    }

    let logs = JSON.parse(localStorage.getItem('logs')) || []   // Pega logs salvos ou cria lista vazia
    logs.push(log)                                              // Adiciona o novo log à lista
    localStorage.setItem('logs', JSON.stringify(logs))          // Salva lista atualizada no localStorage
}
