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

it("should handle numbers being split by newline and comma in one string", () =>
{
    expect(add("1\n2,3")).toBe(6);
});

it("should throw Negative numbers are not allowed exception when input includes one number that is a negative", function () {
   expect(function() {
         add("-1");
    }).toThrow("Negative numbers are not allowed: -1" );
});

it("should throw Negative numbers are not allowed exception when input includes negatives", function () {
   expect(function() {
         add("-1,-2,-3");
    }).toThrow("Negative numbers are not allowed: -1,-2,-3");
});

it("should ignore numbers bigger than 1000" , () =>
{
    expect(add("1,1001,1000")).toBe(1001);
});

it("should ignore numbers bigger than 1000 if there is only one number" , () =>
{
    expect(add("1001")).toBe(0);
});

it("should handle different delimeters" , () =>
{
    expect(add("//;\n1;2")).toBe(3);
});

it("should handle different delimeters with \n and ," , () =>
{
    expect(add("//;\n1;2\n1,1")).toBe(5);
});
