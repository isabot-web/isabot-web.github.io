// Função para o comando Ping
function pingCommand() {
    document.getElementById('ping-result').textContent = "Pong! O bot está online.";
  }
  
  // Função para o comando Ban
  function banCommand() {
    let result = prompt("Digite o nome de usuário para banir:");
    if (result) {
      document.getElementById('ban-result').textContent = `Usuário ${result} banido com sucesso!`;
    } else {
      document.getElementById('ban-result').textContent = "Nenhum usuário foi banido.";
    }
  }
  
  // Função para o comando Ship
  function shipCommand() {
    let user1 = prompt("Digite o nome do primeiro usuário:");
    let user2 = prompt("Digite o nome do segundo usuário:");
    
    if (user1 && user2) {
      let shipResult = `${user1} ❤️ ${user2}`;
      document.getElementById('ship-result').textContent = `Resultado do Ship: ${shipResult}`;
    } else {
      document.getElementById('ship-result').textContent = "Por favor, insira dois nomes de usuários.";
    }
  }
  