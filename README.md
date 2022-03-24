To run in CI pipeline update DB connection (host and port) to :- 
    "host": "limechat-stg-rds.cn0rotjyqknw.ap-south-1.rds.amazonaws.com",
    "port": 5432
 

To run in local, portforward to staging DB and update DB connection to :-
    "host": "localhost",
    "port": 54323
   
DB connection to be updated in :- 
    `constant.js` - for likekit DB and
    `cypress.json` - for Dashboard DB

To port forward to staging DB :- 
    `kubectl port-forward svc/postgresql-tunnel-stg 54323:5432 -n rds-test`    

Open cypress :- 
    `npx cypress open` 

Run all tests :- 
    `npx cypress run `

Run and push results to cypress dashboard :- 
    `npx cypress run --record --key b2c0e80c-6cfd-442c-b412-0ee5759d27a0`

Run single integration folder (FlowBuilder) :- 
    `npx cypress run --spec "cypress/integration/FlowBuilderApis/*spec.js" --record --key b2c0e80c-6cfd-442c-b412-0ee5759d27a0`