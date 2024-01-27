import React from "react";

import { FlatList } from "react-native";
import Item from "./Item";
import TelaPadrao from "../../components/TelaPadrao";
import StatusCarrinho from "../../components/StatusCArrinho";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Um dose da vacina v4",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Um Dose da vacina Antirrábica, por ano!",
    quantidade: 1,
  },
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </TelaPadrao>
  );
}
