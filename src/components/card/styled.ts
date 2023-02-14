import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 175px;
  height: 200px;
  background-color: #b3e5fc;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  h1 {
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;

    .Btn {
      :hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
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
