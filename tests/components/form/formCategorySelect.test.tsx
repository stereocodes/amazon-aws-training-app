import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import FormCategorySelect from "../../../src/components/form/formCategorySelect";
import sinon from "sinon";

describe("<FormCategorySelect />", () => {
  const props = {
    categories: [
      {
        key: "test-category",
        label: "testing label"
      }
    ]
  };
  const wrapper = mount(<FormCategorySelect {...props} />);
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
  it("should create a radio button", () => {
    expect(wrapper.find('input[type="radio"]').exists()).to.equal(true);
  });
  it("should return key onChange", () => {
    const onCategoryClick = sinon.spy();
    const props = {
      categories: [
        {
          key: "test-category",
          label: "testing label"
        }
      ],
      callback: onCategoryClick
    };
    const wrapper = shallow(<FormCategorySelect {...props} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: props.categories[0].key } });

    expect(onCategoryClick).to.have.property("callCount", 1);
    expect(onCategoryClick.args[0][0]).to.equal(props.categories[0].key);
  });
});
