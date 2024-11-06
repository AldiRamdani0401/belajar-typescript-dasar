import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello aldi", function () {
    expect(sayHello("aldi")).toBe("Hello aldi");
  });
});
