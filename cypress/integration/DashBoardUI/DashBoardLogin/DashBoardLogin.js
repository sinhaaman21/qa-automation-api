import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
Given('User is at the dashboard login page', () => {
    cy.visit('https://stgapp.limechat.ai/app/login')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.xpath(`//input[@placeholder="Email eg: someone@example.com"]`).type(username)
    cy.xpath(`//input[@placeholder="Password"]`).type(password)
})

And('User clicks on login button', () => {
    cy.xpath(`//button[@name = "Login"]`).click()
})

Then('User is able to successfully login to the dashboard', () => {
    cy.xpath(`//p[contains(text(),'LimeChat Helpdesk?')]`).should('be.visible', {timeout: 10000})
})