import styled from "styled-components";
//COMPONENTS
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: block;
  padding: 1rem;
  background-color: #d9d9d9;

  @media screen and (min-width: 728px) {
    padding: 2rem;
  }
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  text-align: center;
`;

export const Span = styled.span`
  display: block;
  color: #838383;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 35px;
  object-fit: contain;
`;

export const Exit = styled.li`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
