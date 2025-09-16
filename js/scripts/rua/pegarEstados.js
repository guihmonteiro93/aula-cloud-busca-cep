function pegarEstados() {
    const selectEstado = document.querySelector("#estado");
    const urlEstado = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

    fetch(urlEstado)
        .then((res) => res.json())
        .then((estados) => {
            let estadosList = '<option value="" disabled selected>Escolha um Estado</option>';
            for (let i = 0; i < estados.length; i++) {
                estadosList += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`;
            }
            selectEstado.innerHTML = estadosList;
        })
        .catch((error) => {
            console.error('Erro ao buscar estados:', error);
            selectEstado.innerHTML = '<option value="" disabled selected>Erro ao carregar estados</option>';
        });
}
pegarEstados();
