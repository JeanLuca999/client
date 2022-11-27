import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #838383;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #838383;
  text-align: center;
  padding-top: 30px;
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const DeleteButton = styled.button`
  border: 0;
  border-radius: 5px;
  display: block;
  width: 200px;
  background-color: #cc3c37;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  border: 0;
  border-radius: 5px;
  display: block;
  width: 200px;
  background-color: #838383;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;
