// const {Client} = require('pg')

// const client = new Client({
//     user: "postgres",
//     password: "wavicle123",
//     port : 54323,
//     host: "localhost",
//     database: "chatwoot_production"
// })

// client.connect();

// client.query(`Select name from Accounts WHERE ID = '27'`,(err, res)=>{
//     if(!err){
//         console.log(JSON.stringify(res.rows));
//     }else {
//         console.log(err.message);
//     }
//     client.end;
// })