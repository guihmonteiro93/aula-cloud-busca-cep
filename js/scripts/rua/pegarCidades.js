function pegarCidades() {
    const uf = document.querySelector("#estado").value;
    const selectCidade = document.querySelector("#cidade");
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

    fetch(urlCidades)
        .then((res) => res.json())
        .then((cidades) => {
            let cidadesList = '<option value="" disabled selected>Escolha uma cidade</option>';
            for (let i = 0; i < cidades.length; i++) {
                cidadesList += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`;
            }
            selectCidade.innerHTML = cidadesList;
        })
        .catch((error) => {
            console.error('Erro ao buscar cidades:', error);
            selectCidade.innerHTML = '<option value="" disabled selected>Erro ao carregar cidades</option>';
        });
}
