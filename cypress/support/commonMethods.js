const {host, dashboardApiAccessToken, accountsIdQA} = require('../support/constant');
const payload = require('../fixtures/gupshupCallback.json');




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

function customerSendMessage(message){
    cy.request({
        method : 'POST',
        url : `${host}/whatsapp/gupshup/callback`,
        headers : {
            'api_access_token' : dashboardApiAccessToken
        },
        body : 
        {
            "app": payload.app,
            "timestamp": payload.timestamp,
            "version": payload.version,
            "type": payload.type,
            "payload":{
                "id": payload.payload.id,
                "source": payload.payload.source,
                "type": payload.payload.type,
                "payload":{
                    "text": message
                },
                "sender":{
                    "phone": payload.payload.sender.phone,
                    "name": payload.payload.sender.name,
                    "country_code": payload.payload.sender.country_code,
                    "dial_code": payload.payload.sender.dial_code
                }
            }
        }

    }).then((res)=>{
        //cy.log(JSON.stringify(res))
        //expect(res.status).to.eq(204)
    })


}

export default {
    randomTextFunction,
    randomNumberFunction,
    customerSendMessage
}
