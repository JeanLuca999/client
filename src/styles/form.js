import styled from "styled-components";

import { Link } from "react-router-dom";

export const Form = styled.form``;

export const Field = styled.fieldset`
  position: relative;
  border: 1px solid #838383;
  border-radius: 5px;
  margin: 2rem 0;
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
`;

export const Anchor = styled(Link)`
  color: #838383;
`;
