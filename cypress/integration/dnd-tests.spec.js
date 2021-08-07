describe("dnd works fine", function() {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("should move ingredients", function() {
    cy.get("div").contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("div")
      .contains("Перетащите ингредиенты для формирования корзины")
      .trigger("drop");
  });
});
