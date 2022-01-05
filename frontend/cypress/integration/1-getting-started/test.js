// import Login from "../../../src/views/login.vue";
// import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';


// describe('login.vue', () => {
//   it('h3 has correct h3 tag rendered', () => {
//     const wrapper = shallowMount(Login);
//     expect(wrapper.find("h3").text()).equal(
//       'Login'
//     );
//   });
// });
describe('login', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:8080/')

    cy.get('.success').click().contains('Login')
    cy.get('a').contains('Forget password') 
    cy.request('GET', '/login', {
        user: {
            email: 'user@email.com',
            password: 'password'
        }
        })
  })
})
