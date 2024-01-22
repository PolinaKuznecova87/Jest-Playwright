const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Function should throw TypeError when used without parameter", () => {
    expect(() => sorting.sortByName()).toThrow()
  })

it("Without sorting", () => {
  expect(
    sorting.sortByName([
      "Кавказ",
      "Мастер и Маргарита",
      "Кавказ",
    ])
  ).toEqual(["Кавказ", "Кавказ", "Мастер и Маргарита"]);
});

});