import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import FormSelect from "../../../src/components/form/formSelect";
import sinon from "sinon";

describe("<FormSelect />", () => {
  const props = {
    options: ["one", "two"],
    name: "field-name",
    defaultIndex: 1,
    label: "label title"
  };
  const wrapper = mount(<FormSelect {...props} />);
  it("should mount", () => {
    expect(wrapper.find("div").exists()).to.equal(true);
  });
  it("should create options", () => {
    expect(
      wrapper
        .find("option")
        .first()
        .exists()
    ).to.equal(true);
  });
  it("should return option value onChange", () => {
    const onChangeSelect = sinon.spy();
    const props = {
      options: ["one", "two"],
      name: "field-name",
      defaultIndex: 1,
      label: "label title"
    };
    const wrapper = shallow(
      <FormSelect {...props} callback={onChangeSelect} />
    );
    wrapper
      .find("select")
      .simulate("change", { target: { value: props.options[0] } });

    expect(onChangeSelect).to.have.property("callCount", 1);
    expect(onChangeSelect.args[0][0]).to.equal(props.options[0]);
  });
});
