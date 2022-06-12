const inserir = require('./models/Inserir')


function sum(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 + num2;
    res.json({result : result});

    const ipCliente = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    inserir.create({
        PrimeiroValor: num1,
        operador: '+',
        SegundoValor: num2,
        Resultado: result,
        IP: ipCliente
    }).then(function(){
        console.log('Nova - Informação Cadastrada')
    })

}
function sub(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 - num2;
    res.json({result : result});

    const ipCliente = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    inserir.create({
        PrimeiroValor: num1,
        operador: '-',
        SegundoValor: num2,
        Resultado: result,
        IP: ipCliente
    }).then(function(){
        console.log('Nova - Informação Cadastrada')
    })

}
function mul(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 * num2;
    res.json({result : result});

    const ipCliente = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    
    inserir.create({
        PrimeiroValor: num1,
        operador: '*',
        SegundoValor: num2,
        Resultado: result,
        IP: ipCliente
    }).then(function(){
        console.log('Nova - Informação Cadastrada')
    })

}
function div(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 / num2;
    res.json({result : result});

    const ipCliente = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    
    inserir.create({
        PrimeiroValor: num1,
        operador: '/',
        SegundoValor: num2,
        Resultado: result,
        IP: ipCliente
    }).then(function(){
        console.log('Nova - Informação Cadastrada')
    })
}

module.exports = {

    sum, sub, mul, div

}