const handleCalculation = (method, x, y) => {
    switch(method.toLowerCase()){
        case 'add':
            return result = x + y;
        case 'substract':
            return result = x - y;
        case 'multiply':
            return result = x * y;
        case 'divide':
            return result = x / y;
        default:
            return `This is an invalid option`;
    }
}

const handleMethodSign = (method) => {
    switch(method){
        case 'add':
            return sign = '+';
        case 'substract':
            return sign = '-';
        case 'multiply':
            return sign = '*';
        case 'divide':
            return sign = '/';
        default:
            return `There is an error`;
    }
}


const handleHttpCalculation = (req, res) => {
    const query = req.query;
    //res.json(query); //Response back with the query
    const x = Number(query.x);
    const y = Number(query.y);
    const method = query.method;

    const result = handleCalculation(method, x, y);
    const sign = handleMethodSign(method);
    res.send(`${x} ${sign} ${y} = ${result}`);
};

module.exports = handleHttpCalculation; //Export the calculation function