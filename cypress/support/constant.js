const host = `https://stgapp.limechat.ai`;
const hostLimeKit = `https://limekit-stgapp.limechat.ai`;
const hostFlowBuilder = `https://flow-builder-stg.limechat.ai/builder/v1`;
const accountsIdQA = 61;
const conversationsId = `3`;
const dashboardApiAccessToken = `QNL4t1EA3qzoZhDhVieUDjmz`;
let connection_flow_builder = {
    user: "postgres",
    password: "wavicle123",
    port: 5432,
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
}
export default {
    host,
    hostLimeKit,
    accountsIdQA,
    conversationsId,
    dashboardApiAccessToken,
    connection_flow_builder,
    hostFlowBuilder,
    connection_dashboard
};