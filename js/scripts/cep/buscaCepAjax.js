async function buscaCepAjax() {
    let cep = document.querySelector("input").value;
    console.log("buscando cep", cep);

    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            document.querySelector("#dadoRua").innerText = data.logradouro;
            document.querySelector("#dadoBairro").innerText = data.bairro;
            document.querySelector("#dadoCidade").innerText = data.localidade;
            document.querySelector("#dadoEstado").innerText = data.uf;

            
            salvarHistorico(data.cep, data.logradouro, data.bairro, data.localidade, data.uf);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro na requisição:', textStatus, errorThrown);
        }
    });
}
