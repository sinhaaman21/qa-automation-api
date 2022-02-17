/// <reference types = "Cypress" />


describe ('get sales data api test', ()=>{

    it('get sales data', ()=>{

        cy.request({
            method : 'GET',
            url : 'https://limekit.limechat.ai/store/sale_data/get/',
            headers : {
                'authorization' : "Bearer Ir3HLvE7raTUa5VzoAxVQOLd0ttWkS"
            },
            body : {
                "start_date": "2021-10-20",
                "end_date": "2021-10-25",
                "account_id": 36
            } 
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body[0].name).to.eq("#60295")
        })


    })


})