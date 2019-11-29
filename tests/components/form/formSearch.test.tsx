import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import FormSearch from "../../../src/components/form/formSearch";
import sinon from "sinon";

describe("<FormSearch />", () => {
  const wrapper = mount(<FormSearch />);
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
  it("should return text value onChange", () => {
    const onCategoryClick = sinon.spy();
    const searchValue = "hello world";
    const props = {
      callback: onCategoryClick
    };
    const wrapper = shallow(<FormSearch {...props} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: searchValue } });

    expect(onCategoryClick).to.have.property("callCount", 1);
    expect(onCategoryClick.args[0][0]).to.equal(searchValue);
  });
});
