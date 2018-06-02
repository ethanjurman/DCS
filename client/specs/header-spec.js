import AppHeader from "../elements/AppHeader";

/* eslint-disable */
describe("header", () => {
  it("should have the title", () => {
    const page = AppHeader();
    expect(page.outerHTML).toMatch("DCS");
  });
});
