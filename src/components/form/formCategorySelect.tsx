import React from "react";
import styled from "styled-components";

type TCategory = {
  key: string;
  label: string;
};

interface IFormCategorySelect {
  categories: TCategory[];
}

const FormCategorySelect = (props: IFormCategorySelect) => {
  function createSelectList(categories: TCategory[]) {
    return categories.map((e: TCategory, i: number) => (
      <StyledCategory key={i}>
        {i === 0 ? (
          <input type="radio" value={e.key} name="category" defaultChecked />
        ) : (
          <input type="radio" value={e.key} name="category" />
        )}
        <span>{e.label}</span>
      </StyledCategory>
    ));
  }

  return (
    <StyledFFormCategorySelect>
      {createSelectList(props.categories)}
    </StyledFFormCategorySelect>
  );
};

export default FormCategorySelect;

const StyledFFormCategorySelect = styled.div`
  padding: 64px 0 64px;
  grid-column: 2 / span 14;
  display: flex;
  align-items: flex-start;
`;

const StyledCategory = styled.label`
  overflow: hidden;
  font-size: 1.6rem;
  margin-right: 32px;
  overflow: hidden;
  input[type="radio"] {
    display: none;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
    transition: color 0.4s;
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
  span:after {
    content: "";
    margin-top: 5px;
    display: block;
    width: 0%;
    height: 2px;
    background: var(--color-HIGHLIGHT);
    transition: all 0.4s;
  }
  input:checked ~ span {
    color: rgba(0, 0, 0, 1);
  }
  input:checked ~ span:after {
    width: 100%;
  }
`;
