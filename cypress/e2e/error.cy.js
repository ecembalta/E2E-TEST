describe("Form Validation - Invalid Email", () => {
  it("should display an error message for invalid email and keep the button disabled", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("invalid-email");

    cy.get('input[name="password"]').type("1234567Abc.");

    cy.get('input[name="terms"]').check();

    cy.get('input[name="email"]')
      .parent()
      .find(".invalid-feedback")
      .should("contain.text", "Please enter a valid email address");

    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Form Validation - Invalid Email and Password", () => {
  it("should display error messages for both email and password", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("invalid-email");

    cy.get('input[name="password"]').type("short");

    cy.get('input[name="email"]')
      .parent()
      .find(".invalid-feedback")
      .should("contain.text", "Please enter a valid email address");

    cy.get('input[name="password"]')
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain.text",
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );

    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Form Validation - Terms Not Accepted", () => {
  it("should keep the button disabled if terms are not accepted", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("example@mail.com");

    cy.get('input[name="password"]').type("1234567Abc.");

    cy.get('button[type="submit"]').should("be.disabled");
  });
});
