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
