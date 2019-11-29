import React, { ReactNode } from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import CourseCard from "../../../src/components/courses/courseCard";

describe("<CourseCard />", () => {
  const props = {
    title: "testing titles",
    image: "image.jpg",
    averageColor: "#00f",
    postMeta: [
      {
        title: "Videos",
        data: "20"
      }
    ],
    courseMeta: {
      language: "english",
      skill: "advanced",
      type: "curriculum",
      duration: "4 hours"
    }
  };
  const wrapper = mount(<CourseCard {...props} />);
  it("should mount", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .exists()
    ).to.equal(true);
  });
  it("should take an title", () => {
    expect(wrapper.props().title).to.equal(props.title);
  });
  it("should take an image", () => {
    expect(wrapper.props().image).to.equal(props.image);
  });
  it("should take an averageColor", () => {
    expect(wrapper.props().averageColor).to.equal(props.averageColor);
  });
  it("should accept post metadata", () => {
    expect(wrapper.props().postMeta).to.equal(props.postMeta);
  });
  it("should accept post coursemeta", () => {
    expect(wrapper.props().courseMeta).to.equal(props.courseMeta);
  });
});
