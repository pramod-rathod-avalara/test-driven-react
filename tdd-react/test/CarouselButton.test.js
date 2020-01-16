import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CarouselButton from "../src/CarouselButton";

configure({
  adapter: new Adapter()
});

describe("CarouselButton", () => {
  it("renders a <button>", () => {
    const wrapper = shallow(<CarouselButton children="" />);
    expect(wrapper.type()).toBe("button");
  });
  
  it("passes children through to the <button>", () => {
    const buttonText = "Button Text";
    const onClick = () => {};
    const wrapper = shallow(
      <CarouselButton onClick={onClick}>{buttonText}</CarouselButton>
    );
    expect(wrapper.prop("children")).toBe("Button Text");
    expect(wrapper.prop("onClick")).toBe(onClick);
  });
});
