//To test DB client 
const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "wavicle123",
    port : 54323,
    host: "localhost",
    database: "flow_builder_django"
})

client.connect();

client.query(`Select * from Builder_Event WHERE ID = '29'`,(err, res)=>{
    if(!err){
        console.log(JSON.stringify(res.rows));
    }else {
        console.log(err.message);
    }
    client.end;
})