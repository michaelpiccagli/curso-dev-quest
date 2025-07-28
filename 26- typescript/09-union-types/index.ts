function printClientId(id: number | string) { // Union type: number | string
  // A função pode receber um número ou uma string como parâmetro
    console.log(`O id do cliente é ${id}`);
}

printClientId(100);

printClientId('ClientId');