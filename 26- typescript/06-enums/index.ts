// EXEMPLO 1:

// enum Colors {
//     Red,
//     Blue,
//     Green
// }

// function showColor(color) {
//     console.log(color);
// }

// showColor(Colors.Red)

//Podemos percorrer o enum usando o for
// for (const key in Colors) {
//     console.log(key);
// }

// EXEMPLO 2:

// enum UserResponse {
//     no = 0,
//     yes = 1,
// }

// function respondedEmail(recipient: string, userResponse: UserResponse): void {
//     //...Salvar no banco se o usuário respondeu ou não
// }

// respondedEmail('Michael', UserResponse.yes)

// EXEMPLO 3:

// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
// }

// saveTrade(TradeType.TESOURO_DIRETO)


// EXEMPLO 4:

// enum StatusCodes {
//     OK = 200,
//     BadRequest = 400,
// }
// const OK = StatusCodes.OK //200
// const indexOK = StatusCodes['OK'] //200
// const strinfBadRequest = StatusCodes[400] //BadRequest


// StatusCodes.OK;

// EXEMPLO 5:

// enum gender {
//     M = 'Masculino',
//     F = 'Feminino',
// }

