let value = 'peanut butter';

const myInput = (callback) => {
    let val = value;
    let string = callback(val);
    console.log(string);
    
}

const myData = (arg)  => {
    return arg;
}

module.exports = myInput;