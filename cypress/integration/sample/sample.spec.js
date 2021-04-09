/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />
var name1=require("../../fixtures/db.json");
describe('fixtures',function() {
    it('fixtures',function() {
        expect(name1.name).equal("anjali");
    });
    it('fixtures demo',function() {
        cy.fixture("db").then(function (country) {
            expect(name1).to.deep.equal(country);
        })
    });
});

describe('my first test',function() {
    it('my first test',function() {
        cy.visit('http://bc15-green-commute.dev-apps.io/');
       /* cy.get('input')
        .type('Hyderabad, Telangana, India').then(($eq)=>{});*/

        cy.fixture("db").then(function (data) {
            cy.get('.MuiInputBase-root').type(data.location).type('{downarrow}{enter}')
        })



        cy.contains('Next').click();
        cy.fixture("db").then(function (data) {
            cy.get('.MuiInputBase-root').type(data.location).type('{downarrow}{enter}')
        })

        cy.contains('Next').click();


        cy.contains('Finish').click();
        cy.fixture("db").then(function (data) {
            cy.url().should('include', data.findjobs);

        })

       //cy.url().should('include', 'findJobs');

        cy.contains('Find Jobs');
        cy.contains('Zemoso').click();
        cy.contains('Apply').click();
        cy.contains('Save').click();
        cy.fixture("db").then(function (data) {
            cy.url().should('include', data.savedjobs);

        })





       // cy.contains('Learn React').click();
       // cy.url('https://reactjs.org/');
        //cy.contains('Get Started');


    //  cy.visit('https://example.cypress.io')

   // cy.contains('type').click()
    
// cy.url().should('include', 'commands/actions')

    });
});