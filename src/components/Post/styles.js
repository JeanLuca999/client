import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 5px;
  border: 1px solid #838383;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100px;
`;

export const Text = styled.p`
  color: #838383;
  font-size: 1rem;
`;

export const Avatar = styled.img`
  background-color: #fff;
  display: block;
  position: absolute;
  top: -5%;
  left: -5%;

  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid #838383;
  padding: 5px;

  @media screen and (min-width: 728px) {
    width: 55px;
    height: 55px;
  }
`;
