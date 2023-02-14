import React, { useState } from "react";
import { ButtonAddItem, ButtonCloseModal, Container, MyModal } from "./styled";
import { FaPen, FaTrash } from "react-icons/fa";
import { useItems } from "../../contexts/items";

interface IItems {
  id: number;
  name: string;
}

MyModal.setAppElement("#root");

export const Card: React.FC<IItems> = (item) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>(item.name);
  const { RemoveItem, UpdateItem } = useItems();

  const toggleModal = () => {
    setOpen(!open);
  };

  const toggleUpdate = () => {
    if (name) {
      UpdateItem({ name, id: item.id });
      setOpen(false);
      setName("");
    }
  };

  return (
    <>
      <Container>
        <h1>{item.name}</h1>
        <div>
          <FaPen className="Btn" onClick={toggleModal} />

          <FaTrash className="Btn" onClick={() => RemoveItem(item.id)} />
        </div>
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
            <ButtonAddItem onClick={toggleUpdate}>Atualizar</ButtonAddItem>
          </div>
        </div>
      </MyModal>
    </>
  );
};
