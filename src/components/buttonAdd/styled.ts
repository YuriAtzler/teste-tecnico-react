import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  background-color: #e0e0e0;
  color: #616161;
  gap: 2rem;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    width: 80%;
    gap: 1rem;

    h1 {
      font-size: 25px;
    }
  }
`;

export const ButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #e0e0e0;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ButtonAddItem = styled(ButtonCloseModal)`
  background-color: green;
  color: #fff;
`;

export const MyModal = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5% 5%;
    background-color: #fff;
    border-radius: 10px;
    gap: 1.5rem;

    input {
      width: 100%;
      height: 40px;
      padding-left: 10px;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
