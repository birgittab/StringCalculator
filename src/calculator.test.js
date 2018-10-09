const add = require("./calculator");

it("should return zero on an empty string", () =>
{
    expect(add("")).toBe(0);
});

it("should return number when only one number in the string", () =>
{
    expect(add("2")).toBe(2);
});

it("should return the sum of two given numbers", () =>
{
    expect(add("2,3")).toBe(5);
});

it("should sumarize multiple numbers", () =>
{
    expect(add("1,2,3,4")).toBe(10);
});


it("should handle numbers being split by newline", () =>
{
    expect(add("1\n2")).toBe(3);
});
