/// <reference types="cypress" />

describe("browse to its steve jobs academy", () => {
  beforeEach(() => {
    cy.visit("https://google.it/");
    // cy.wait(7000);
    cy.get("#L2AGLb").click();
  });

  it("check button is disabled", () => {
    cy.get("#APjFqb").type("its steve jobs academy{enter}");
    cy.get("[class='LC20lb MBeuO DKV0Md']").first().click();
    cy.origin("https://stevejobs.academy", () => {
      cy.wait(1000);
      // cy.get('div[class="nav-menu-ico"]').click();
      // cy.wait(2000)
      cy.get("img[class='home_logo_url']").should("not.be.visible");
      cy.contains("span", "Corsi").should("exist");
      cy.get("span").contains("Corsi").click({ force: true });

      cy.get(
        "a[href='https://stevejobs.academy/web-and-mobile-development/']"
      ).click({ force: true });

      cy.get('input[value="Invia"]').should("be.disabled");
      cy.get("input[name='your-name']").type("Nome Cognome");
      cy.get("input[name='email']").type("email@email.it");
      cy.get("input[name='phone']").type("1234567890");
      cy.get("select[name='select-studio']").select(
        "Liceo scientifico (con opzione scienze applicate)",
        { force: true }
      );
      cy.get("select[name='age']").wait(1000).select("23-25", { force: true });
      cy.wait(1000);
      cy.get("li[class='select-option'][data-value='26-30']").click();
    });
  });

  //   it('can add new todo items', () => {
  //     // We'll store our item text in a variable so we can reuse it
  //     const newItem = 'Feed the cat'

  //     // Let's get the input element and use the `type` command to
  //     // input our new list item. After typing the content of our item,
  //     // we need to type the enter key as well in order to submit the input.
  //     // This input has a data-test attribute so we'll use that to select the
  //     // element in accordance with best practices:
  //     // https://on.cypress.io/selecting-elements
  //     cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

  //     // Now that we've typed our new item, let's check that it actually was added to the list.
  //     // Since it's the newest item, it should exist as the last element in the list.
  //     // In addition, with the two default items, we should have a total of 3 elements in the list.
  //     // Since assertions yield the element that was asserted on,
  //     // we can chain both of these assertions together into a single statement.
  //     cy.get('.todo-list li')
  //       .should('have.length', 3)
  //       .last()
  //       .should('have.text', newItem)
  //   })

  //   it('can check off an item as completed', () => {
  //     // In addition to using the `get` command to get an element by selector,
  //     // we can also use the `contains` command to get an element by its contents.
  //     // However, this will yield the <label>, which is lowest-level element that contains the text.
  //     // In order to check the item, we'll find the <input> element for this <label>
  //     // by traversing up the dom to the parent element. From there, we can `find`
  //     // the child checkbox <input> element and use the `check` command to check it.
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()

  //     // Now that we've checked the button, we can go ahead and make sure
  //     // that the list element is now marked as completed.
  //     // Again we'll use `contains` to find the <label> element and then use the `parents` command
  //     // to traverse multiple levels up the dom until we find the corresponding <li> element.
  //     // Once we get that element, we can assert that it has the completed class.
  //     cy.contains('Pay electric bill')
  //       .parents('li')
  //       .should('have.class', 'completed')
  //   })

  //   context('with a checked task', () => {
  //     beforeEach(() => {
  //       // We'll take the command we used above to check off an element
  //       // Since we want to perform multiple tests that start with checking
  //       // one element, we put it in the beforeEach hook
  //       // so that it runs at the start of every test.
  //       cy.contains('Pay electric bill')
  //         .parent()
  //         .find('input[type=checkbox]')
  //         .check()
  //     })

  //     it('can filter for uncompleted tasks', () => {
  //       // We'll click on the "active" button in order to
  //       // display only incomplete items
  //       cy.contains('Active').click()

  //       // After filtering, we can assert that there is only the one
  //       // incomplete item in the list.
  //       cy.get('.todo-list li')
  //         .should('have.length', 1)
  //         .first()
  //         .should('have.text', 'Walk the dog')

  //       // For good measure, let's also assert that the task we checked off
  //       // does not exist on the page.
  //       cy.contains('Pay electric bill').should('not.exist')
  //     })

  //     it('can filter for completed tasks', () => {
  //       // We can perform similar steps as the test above to ensure
  //       // that only completed tasks are shown
  //       cy.contains('Completed').click()

  //       cy.get('.todo-list li')
  //         .should('have.length', 1)
  //         .first()
  //         .should('have.text', 'Pay electric bill')

  //       cy.contains('Walk the dog').should('not.exist')
  //     })

  //     it('can delete all completed tasks', () => {
  //       // First, let's click the "Clear completed" button
  //       // `contains` is actually serving two purposes here.
  //       // First, it's ensuring that the button exists within the dom.
  //       // This button only appears when at least one task is checked
  //       // so this command is implicitly verifying that it does exist.
  //       // Second, it selects the button so we can click it.
  //       cy.contains('Clear completed').click()

  //       // Then we can make sure that there is only one element
  //       // in the list and our element does not exist
  //       cy.get('.todo-list li')
  //         .should('have.length', 1)
  //         .should('not.have.text', 'Pay electric bill')

  //       // Finally, make sure that the clear button no longer exists.
  //       cy.contains('Clear completed').should('not.exist')
  //     })
  //   })
});
