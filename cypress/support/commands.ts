/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite(
  'visit',
  (originalFn, url: any, options: any = {}, window) => {
    console.log(Cypress.env());
    console.log(Cypress.env('CYPRESS_BASE_URL'));
    const isDevUrl =
      Cypress.env('BASE_URL')?.includes('dev') ||
      Cypress.env('BASE_URL')?.includes('localhost');

    if (isDevUrl) {
      options.headers = {
        ...options?.headers, // Preserve any existing headers
        'x-vercel-protection-bypass': 'Y9tgUJtldkeeECCMJgXxkVJwxXQD3Wl5',
        'x-vercel-set-bypass-cookie': 'true',
      };
    }

    return originalFn(url, options, window);
  }
);

declare namespace Cypress {
  interface Chainable {
    // login(email: string, password: string): Chainable<void>;
    // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
    // dismiss(
    //   subject: string,
    //   options?: Partial<TypeOptions>
    // ): Chainable<Element>;
    visit(
      originalFn: CommandOriginalFn<any>,
      url: string,
      options: Partial<VisitOptions>
    ): Chainable<Element>;
  }
}
