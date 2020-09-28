const app = require(`./app`);

beforeEach(() => {
  console.log = jest.fn();
});

describe("makeNegative", () => {
  test("should exists", () => {
    expect(app.makeNegative).toBeDefined();
  });

  test("should return -1 with argument of 1", () => {
    expect(app.makeNegative(1)).toEqual(-1);
  });

  test("should return -10 with argument of 10", () => {
    expect(app.makeNegative(10)).toEqual(-10);
  });
});

describe("printAddition", () => {
  test("should exists", () => {
    expect(app.printAddition).toBeDefined();
  });

  test("should log 'The sum of 1 and 1 is 2.' to the console when invoked with arguments 1 and 1", () => {
    app.printAddition(1, 1);
    expect(console.log).toHaveBeenCalledWith("The sum of 1 and 1 is 2.");
  });

  test("should log 'The sum of 7 and 8 is 15.' to the console when invoked with arguments 7 and 8", () => {
    app.printAddition(7, 8);
    expect(console.log).toHaveBeenCalledWith("The sum of 7 and 8 is 15.");
  });

  test("should log 'The sum of 1 and 6 is 7.' to the console when invoked with arguments 1 and 6", () => {
    app.printAddition(1, 6);
    expect(console.log).toHaveBeenCalledWith("The sum of 1 and 6 is 7.");
  });

});
