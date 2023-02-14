import React from "react";
import { Container, ContainerList } from "./styled.";
import * as Components from "../components";
import { useItems } from "../contexts/items";

export const Home: React.FC = () => {
  const { arrItems } = useItems();

  return (
    <Container>
      <Components.ButtonAdd />
      <ContainerList>
        {arrItems.map((item) => (
          <Components.Card {...item} key={item.id} />
        ))}
      </ContainerList>
    </Container>
  );
};
