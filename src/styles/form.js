import styled from "styled-components";

import { Link } from "react-router-dom";

export const Form = styled.form``;

export const Field = styled.fieldset`
  position: relative;
  border: 1px solid #838383;
  border-radius: 5px;
  margin-top: 2rem;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #838383;
  position: absolute;
  top: -1rem;
  left: 0;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 1rem;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  width: 100%;
  min-height: 200px;
  padding: 2rem;
  color: #838383;
  border-radius: 5px;
  border: 1px solid #838383;
  outline: 0;
  &:focus {
    border-width: 3px;
  }
`;

export const Submit = styled.button`
  border: 0;
  border-radius: 5px;
  display: block;
  width: 100%;
  background-color: #838383;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  border: 1px solid #838383;
  border-radius: 5px;
  display: block;
  width: 100%;
  background-color: #fff;
  color: #838383;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Anchor = styled(Link)`
  color: #838383;
`;

export const Error = styled.span`
  display: block;
  margin: 10px 0;
  padding: 0;
  color: #cc2323;
`;
