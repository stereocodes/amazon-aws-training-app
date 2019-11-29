import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import FormToggleButton from "../../../src/components/form/formToggleButton";
import sinon from "sinon";

describe("<FormToggleButton />", () => {
  const props = {
    toggleValues: { on: 'on value', off: 'off value' },
    icon: 'image.jpg'
  };
  const wrapper = mount(<FormToggleButton {...props} />);
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
  it("should create a checkbox", () => {
    expect(
      wrapper
        .find('input[type="checkbox"]')
        .exists()
    ).to.equal(true);
  });
  it("should return toggle value onChange", () => {
    const onChangeToggle = sinon.spy();
    const wrapper = shallow(
      <FormToggleButton {...props} callback={onChangeToggle} />
    );
    wrapper
      .find('input[type="checkbox"]')
      .simulate("change");
    
    expect(onChangeToggle).to.have.property("callCount", 1);
    expect(onChangeToggle.args[0][0]).to.equal(props.toggleValues.on);
  });
});
