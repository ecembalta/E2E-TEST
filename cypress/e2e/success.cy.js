describe("Form Submission - Successful", () => {
  it("should navigate to the success page on valid form submission", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("example@mail.com");

    cy.get('input[name="password"]').type("1234567Abc.");

    cy.get('input[name="terms"]').check();

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
  });
});
