import React from "react";
import { shallow } from "enzyme";
import CarouselSlide from "../src/CarouselSlide";

describe("CarouselSlide", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/image.png"
        description="Pramod Rathod"
      />
    );
  });

  it("renders a <figure>", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders an <img> and <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes 'imgUrl' through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ imgUrl });
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(imgUrl);
  });

  it("uses 'description' and 'attribution' as the <figcaption>", () => {
    const description = "An awesome place!";
    const attribution = "Pramod Rathod";
    wrapper.setProps({ description, attribution });
    expect(wrapper.find("figcaption").text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find("figcaption strong").text()).toBe(description);
  });

  it("passes other props through to the <figure>", () => {
    const style = {};
    const onClick = () => {};
    const className = "my-slide-main";

    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop("style")).toBe(style);
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
  });
});
