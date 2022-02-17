
function randomTextFunction(testStringSuffix){
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    let randomString = string + testStringSuffix;
    return randomString;
}


export default {
    randomTextFunction,
    
}
