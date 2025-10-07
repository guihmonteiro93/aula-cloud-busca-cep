function listarLogs() {                                      // Função que exibe os logs salvos no localStorage

  let logs = JSON.parse(localStorage.getItem('logs')) || []; // Lê e converte os logs armazenados (ou cria lista vazia)
  console.log(logs);                                         // Mostra os logs no console
  let listaLogs = document.querySelector("#lista-logs")      // Seleciona o elemento da lista no HTML
  listItems = ""                                             // Cria string para armazenar os itens da lista

  for (let log of logs) {                                    // Percorre cada log salvo
    listItems += ` 
        <li class="collection-item"> 
          Busquei no(a) ${log.tipo} na URL ${log.url} em ${log.data} 
          <a onclick="montarLogs('${log.url}')" class="waves-effect waves-light">
            <i class="material-icons left">remove_red_eye</i>
          </a>
        </li>
        `                                                    // Monta o item da lista com botão de visualizar
  }

  listaLogs.innerHTML = listItems;                           // Insere os itens prontos no HTML
}
