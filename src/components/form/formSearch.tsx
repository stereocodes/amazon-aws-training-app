import React from "react";
import styled from "styled-components";
import iconSearch from "~/static/icons/ui/search.svg";

interface IFormSearch {
  callback?: (value: string) => void;
}

const FormSearch = (props: IFormSearch) => {
  function changeCallback(e: any) {
    props.callback(e.target.value);
  }

  return (
    <StyledFormSearch>
      <div>
        <input
          type="text"
          placeholder="Course Search"
          onChange={e => changeCallback(e)}
        />
        <img src={iconSearch} alt="" />
      </div>
    </StyledFormSearch>
  );
};

export default FormSearch;

const StyledFormSearch = styled.div`
  grid-column: span 5;
  display: flex;
  align-items: center;
  input[type="text"] {
    width: calc(100% - 32px);
    padding: 5px;
    background: none;
    font-size: 1.6rem;
    margin: 0;
  }
  img {
    display: inline-block;
    max-width: 32px;
  }
  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    background: var(--color-MISTY);
    color: black;
    border-radius: 8px;
    padding: 16px 16px;
  }
`;
