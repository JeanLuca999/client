import styled from "styled-components";

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #838383;
  text-align: center;
  padding-top: 30px;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #838383;
`;

export const Form = styled.form`
  padding-top: 30px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isEdit ? "space-between" : "center")};
  width: 100%;
  margin-top: 30px;
`;

export const DiscardButton = styled.button`
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
`;

export const Submit = styled.button`
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
