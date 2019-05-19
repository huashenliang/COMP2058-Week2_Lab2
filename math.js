const handleCalculation = (method, x, y) => {
    switch(method.toLowerCase()){
        case 'add':
            return result = x + y;
        case 'subtract':
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
        case 'subtract':
            return sign = '-';
        case 'multiply':
            return sign = '*';
        case 'divide':
            return sign = '/';
        default:
            return `There is an error`;
    }
}

const validMethod = ['add', 'subtract', 'divide', 'multiply'];

const handleNumberValidation = (x, y, res) => {
    //checking if x and y are numbers
    if(isNaN(x) || isNaN(y)){
        return res.send(`Both x: ${x} and y: ${y} must be a number`);
    } 
}

const handleMethodValidation = (method, res) => {

    //checking if the method entered is valid
   if(!validMethod.includes(method.toLowerCase())){
       return res.send(`${method} is not a valid method. It must be one of the following:
        ${validMethod.toString()}
       `);
   }
}

const handleHttpCalculation = (req, res) => {
    const query = req.query;
    //res.json(query); //Response back with the query
    const x = Number(query.x);
    const y = Number(query.y);
    const method = query.method;
    
    handleNumberValidation(x,y,res);
    handleMethodValidation(method,res);

    const result = handleCalculation(method, x, y);
    const sign = handleMethodSign(method);
    res.send(`${x} ${sign} ${y} = ${result}`);
};

module.exports = handleHttpCalculation; //Export the calculation function