const host = `https://stgapp.limechat.ai`;
const hostLimeKit = `https://limekit-stgapp.limechat.ai`;
const hostFlowBuilder = `https://flow-builder-stg.limechat.ai/builder/v1`;
const hostLimekitProd = `https://limekit.limechat.ai`;
const accountsIdQA = 61;
const conversationsId = `3`;
const flowId = `162`;
const flowInstanceID = `3797`;
const dashboardApiAccessToken = `QNL4t1EA3qzoZhDhVieUDjmz`;
const limeKitToken_Ac_24_prod = `5EAWymkpIT8xrPiBz36OkznNLKcq4a`; //LimeChat
const limeKitToken_Ac_71_prod = `kJLKezZK99yzAb2k3RSoScEZ5iUGTr`; //WowSkinScience

let connection_flow_builder = {
    user: "postgres",
    password: "wavicle123",
    port: 5432,
    //port: 54323,
    //host: "localhost",
    host: "limechat-stg-rds.cn0rotjyqknw.ap-south-1.rds.amazonaws.com",
    database: "flow_builder_django"
};
let connection_dashboard = {
    user: "postgres",
    password: "wavicle123",
   // host: "localhost",
    host : "limechat-stg-rds.cn0rotjyqknw.ap-south-1.rds.amazonaws.com",
    database: "chatwoot_production",
    port: 5432
    //port: 54323,
}
export default {
    host,
    hostLimeKit,
    accountsIdQA,
    conversationsId,
    dashboardApiAccessToken,
    connection_flow_builder,
    hostFlowBuilder,
    connection_dashboard,
    flowId,
    flowInstanceID,
    hostLimekitProd,
    limeKitToken_Ac_24_prod,
    limeKitToken_Ac_71_prod,
};