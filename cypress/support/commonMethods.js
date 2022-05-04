
function randomTextFunction(testStringSuffix){
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    let randomString = string + testStringSuffix;
    return randomString;
}

function randomNumberFunction(prefix){
    let randomNumber = prefix+(Math.floor(1000000000 + Math.random() * 9000000000));
    return randomNumber;
}

export default {
    randomTextFunction,
    randomNumberFunction
}
