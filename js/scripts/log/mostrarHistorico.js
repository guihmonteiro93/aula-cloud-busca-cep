function mostrarHistorico() {
    const log = document.getElementById('log');
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    log.innerHTML = '';
    historico.forEach(item => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.textContent = `${item.cep} - ${item.rua}, ${item.bairro}, ${item.cidade}-${item.estado} (Consultado em: ${item.data})`;
        log.appendChild(li);
    });
}
