import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useItems } from "../../contexts/items";
import { Container, ButtonCloseModal, MyModal, ButtonAddItem } from "./styled";

MyModal.setAppElement("#root");

export const ButtonAdd: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { AddItem } = useItems();

  const toggleModal = () => {
    setOpen(!open);
  };

  const toggleAdd = () => {
    if (name) {
      AddItem({ name, id: Math.floor(Math.random() * 1000 + 1) });
      setOpen(false);
      setName("");
    }
  };

  return (
    <>
      <Container onClick={toggleModal}>
        <FaPlus size={30} />
        <h1>Adicionar</h1>
      </Container>
      <MyModal isOpen={open} onRequestClose={toggleModal}>
        <div>
          <h1>Adicionar item</h1>
          <input
            type="text"
            placeholder="Digite..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div>
            <ButtonCloseModal onClick={toggleModal}>Voltar</ButtonCloseModal>
            <ButtonAddItem onClick={toggleAdd}>Adicionar</ButtonAddItem>
          </div>
        </div>
      </MyModal>
    </>
  );
};
