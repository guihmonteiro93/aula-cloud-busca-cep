function buscaRua() {
    $(".preloader-wrapper").show();
    const estado = document.querySelector("#estado").value;
    const cidade = document.querySelector("#cidade").value;
    const rua = document.querySelector("#rua").value;

    const url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`;
    console.log("url montada", url);

    fetch(url)
        .then((res) => res.json())
        .then((ruas) => {
            console.log(ruas);
            let listaRuas = document.querySelector("#lista-ruas");
            let ruasList = "";

            for (let i = 0; i < ruas.length; i++) {
                ruasList += `<ul class="collection">
                  <li class="collection-item">Rua: <span class="dadoRua">${ruas[i].logradouro}</span></li>
                  <li class="collection-item">BAIRRO: <span class="dadoBairro">${ruas[i].bairro}</span></li>
                  <li class="collection-item">CIDADE: <span class="dadoCidade">${ruas[i].localidade}</span></li>
                  <li class="collection-item">ESTADO: <span class="dadoEstado">${ruas[i].uf || ruas[i].estado}</span></li>
               </ul>`;

               salvarHistorico('', ruas[i].logradouro, ruas[i].bairro, ruas[i].localidade, ruas[i].uf || ruas[i].estado);
            }

            setTimeout(() => {
                listaRuas.innerHTML = ruasList;
                $(".preloader-wrapper").hide();
            }, 2000);

        })
        .catch((error) => {
            console.error('Erro na busca de ruas:', error);
            $(".preloader-wrapper").hide();
        });

}
