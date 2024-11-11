// Função para navegar para outra página
function navigateTo(page) {
    if (page === 'comando_normal') {
        window.location.href = 'comando_normal.html';
    } else if (page === 'comando_adm') {
        window.location.href = 'comando_adm.html';
    } else if (page === 'comando_entretenimento') {
        window.location.href = 'comando_entretenimento.html';
    }
}

// Função para voltar à página inicial
function goBack() {
    window.location.href = 'index.html';
}
