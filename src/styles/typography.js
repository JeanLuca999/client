import styled from "styled-components";

export const Span = styled.span`
  color: #838383;
  font-size: 1rem;
  font-weight: ${(props) => (props.strong ? "bolder" : "400")};
`;
