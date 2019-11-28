import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

interface IFormSelect {
  options: string[];
  name: string;
  defaultIndex: number;
  label: string;
  callback: (option:string) => void;
}

const FormSelect = (props: IFormSelect) => {
  const selectRef = useRef(null);
  
  function getOptions(data: string[]) {
    return data.map((e:string, i:number) => 
      <option
        value={e}
        key={i}
      >{e}</option>
    )
  }

  useEffect(() => {
    selectRef.current[props.defaultIndex].selected = true;
  },[]);

  function changeCallback(e: any) {
    props.callback(e.target.value);
  }

  return (
    <StyledFormSelect >
      <label>{props.label}</label>
      <div>
        <select name={props.name} ref={selectRef} onChange={(e) => changeCallback(e)}>
          {getOptions(props.options)}
        </select>
      </div>
    </StyledFormSelect>
  )
}


export default FormSelect; 


const StyledFormSelect = styled.div`
  display: flex;
  grid-column: 10 / span 3;
  align-self: center;
  position: relative;
  align-items: center;
  &:after{
    content: '';
    display: block;
    height: 40%;
    width: 1px;
    border-radius: 100px;
    background: black;
    position: absolute;
    right: 16px;
    top: 50%;
    right: 16;
    transform: translateY(-50%);
  }
  & > label{
    white-space: nowrap;
    margin-right: 5px;
    color: #787878;
    font-size: 1.2rem;
  }
  & > div{
    border: 1px solid #D9D9D9;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
  }
  select{
    -webkit-appearance: none;
    background: none;
    font-size: 1.4rem;
    width:100%;
  }
`;