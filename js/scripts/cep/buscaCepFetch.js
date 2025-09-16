async function buscaCepFetch() {
    let cepInput = document.querySelector("input").value;
    console.log("buscando cep", cepInput);

    let url = "https://viacep.com.br/ws/" + cepInput + "/json/";

    fetch(url)
        .then((res) => res.json())
        .then((cep) => {
            console.log(cep.logradouro);
            document.querySelector("#dadoRua").innerText = cep.logradouro;
            document.querySelector("#dadoBairro").innerText = cep.bairro;
            document.querySelector("#dadoCidade").innerText = cep.localidade;
            document.querySelector("#dadoEstado").innerText = cep.uf;

            
            salvarHistorico(cep.cep, cep.logradouro, cep.bairro, cep.localidade, cep.uf);
        })
        .catch((error) => console.error('Erro na requisição com Fetch:', error));
}
