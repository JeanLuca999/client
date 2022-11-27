import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${(props) => props.gap || 0};

  @media screen and (min-width: 728px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Box = styled.div`
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.minHeight || "initial"};
  margin: ${(props) => props.margin || 0};
  max-width: ${(props) => props.maxWidth || "initial"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  text-align: ${(props) => props.textAlign || "initial"};
`;

export const Center = styled.div`
  display: flex;
  align-items: ${(props) => (props.vertically ? "center" : "initial")};
  justify-content: ${(props) => (props.horizontally ? "center" : "initial")};
  width: 100%;
`;
