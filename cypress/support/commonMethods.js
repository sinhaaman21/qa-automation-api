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

function customerSendMessage(message, mobile){
    cy.request({
        method : 'POST',
        url : `${host}/whatsapp/gupshup_enterprise/callback`,
        headers : {
            'api_access_token' : dashboardApiAccessToken
        },
        body : 
        {
                "waNumber": "917299869181",
                "mobile": mobile,
                "name": "Aman Sinha",
                "replyId": "110330539317519565",
                "text": message,
                "type": "text",
                "timestamp": "1623446483000"
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
