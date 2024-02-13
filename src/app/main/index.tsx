import { View, Text, ScrollView } from "react-native";
import { Container, Flex } from "../../styles/main.style";
import { Link } from "expo-router";
import { StoreCard } from "../../components/storeCard";
import { ProductCardBox } from "../../styles/stores.style";
import React from "react";
import ProductCard from "../../components/ProductCard";

export default function MainPage() {
  return (
    <Container>
      <Flex
        style={{ flexDirection: "row" }}
        flexDirection="row"
        flexWrap="wrap"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Container>
  );
}
