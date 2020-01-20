import React from "react";

describe("jsx test", () => {
  it("calls React.createElement", () => {
    const createElementSpy = jest.spyOn(React, "createElement");
    <h1>Hello, jsx!</h1>;
    expect(createElementSpy).toHaveBeenCalledWith("h1", null, "Hello, jsx!");
  });
});
