import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Form = styled.form``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
  margin-top: 1rem;
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
