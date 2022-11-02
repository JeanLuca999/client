import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  background-color: gray;
  height: 100vh;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  text-align: left;
  width: 90%;
  margin: 0 auto;
`;
