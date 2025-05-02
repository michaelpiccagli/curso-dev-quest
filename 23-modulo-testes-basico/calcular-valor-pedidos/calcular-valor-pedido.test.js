const calcularValorPedido = require("./calcular-valor-pedido")

it("Não deve cobrar entrega dos produtos se for superior a R$ 500,00", () => {
    //AAA - 3 passos de criação de um teste

    //ARRANGE - Preparar o cenário
    const meuPedido = {
        itens: [
            { nome: "Arco encantado", valor: 2000 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }
    
    //ACT - Executar a ação
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - Verificar o resultado
    expect(resultado).toBe(2000)
})

it("Deve cobrar o valor da entrega produtos se for inferior a R$ 500,00", () => {
    //AAA - 3 passos de criação de um teste

     //ARRANGE - Preparar o cenário
    const meuPedido = {
        itens: [
            { nome: "Runa encantada", valor: 80 },
            { nome: "Entrega", valor: 50, entrega: true }
        ]
    }
     
     //ACT - Executar a ação
const resultado = calcularValorPedido(meuPedido)

//ASSERT - Verificar o resultado
expect(resultado).toBe(130)
})

it(" Deve cobrar o valor da entrega se o valor dos produtos for exatamente R$ 500,00", () => {
    const meuPedido = {
        itens: [
            { nome: "Espada de Aço", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(meuPedido)
    expect(resultado).toBe(600)
})

//CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA

it("Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS", () => {
    const pedidoComEstadoRS = {
        estado: "RS",
        itens: [
            { nome: "Espada de Aço", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS)
    expect( resultado).toBe(620)
})

it("Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC", () => {
    const pedidoComEstadoSC = {
        estado: "SC",
        itens: [
            { nome: "Espada de Aço", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC)
    expect( resultado).toBe(620)
})

it("Não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP", () => {
    const pedidoComEstadoSP = {
        estado: "SP",
        itens: [
            { nome: "Espada de Aço", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSP)
    expect( resultado).toBe(600)
})