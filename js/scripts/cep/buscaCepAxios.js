async function buscaCepAxios() {
    let cepInput = document.querySelector("input").value;
    console.log("buscando cep", cepInput);

    let url = "https://viacep.com.br/ws/" + cepInput + "/json/";

    axios.get(url)
        .then(function (response) {
            let cep = response.data;
            console.log('imprimindo com axios', cep);
            document.querySelector("#dadoRua").innerText = cep.logradouro;
            document.querySelector("#dadoBairro").innerText = cep.bairro;
            document.querySelector("#dadoCidade").innerText = cep.localidade;
            document.querySelector("#dadoEstado").innerText = cep.uf;

            
            salvarHistorico(cep.cep, cep.logradouro, cep.bairro, cep.localidade, cep.uf);
        })
        .catch(function (error) {
            console.error('Erro na requisição com Axios:', error);
        });
}
