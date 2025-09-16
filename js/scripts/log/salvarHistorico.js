function salvarHistorico(cep, rua, bairro, cidade, estado) {
    const log = document.getElementById('log');
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.unshift({ cep, rua, bairro, cidade, estado, data: new Date().toLocaleString() });

    if (historico.length > 25) historico.pop();
    localStorage.setItem('historico', JSON.stringify(historico));
    mostrarHistorico();
}
