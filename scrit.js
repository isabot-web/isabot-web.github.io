document.addEventListener("DOMContentLoaded", function () {
    // Associando eventos de clique aos botões
    document.getElementById('ping').addEventListener('click', function() { executeCommand('ping'); });
    document.getElementById('say').addEventListener('click', function() { executeCommand('say'); });
    document.getElementById('ban').addEventListener('click', function() { executeCommand('ban'); });
    document.getElementById('kick').addEventListener('click', function() { executeCommand('kick'); });
    document.getElementById('ship').addEventListener('click', function() { executeCommand('ship'); });
    document.getElementById('skinmine').addEventListener('click', function() { executeCommand('skinmine'); });
});

function executeCommand(command) {
    let resultText = "";

    switch (command) {
        case 'ping':
            resultText = "Pong! O comando Ping foi executado com sucesso.";
            break;
        case 'say':
            resultText = "O comando Say foi executado. O bot diz: 'Olá, mundo!'";
            break;
        case 'ban':
            resultText = "Você tem permissão para banir usuários!";
            break;
        case 'kick':
            resultText = "Você tem permissão para expulsar usuários!";
            break;
        case 'ship':
            resultText = "Você foi 'shipado' com alguém. Que legal!";
            break;
        case 'skinmine':
            resultText = "O comando Skinmine foi executado. Explore as skins!";
            break;
        default:
            resultText = "Comando desconhecido.";
            break;
    }

    document.getElementById('result').innerHTML = `<p>${resultText}</p>`;
}
