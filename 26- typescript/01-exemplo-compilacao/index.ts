function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLogged ? 'não' : ''} pode logar.`);
}

const userName = "Michael"
const isLogged = true

sendMessage(userName, isLogged)