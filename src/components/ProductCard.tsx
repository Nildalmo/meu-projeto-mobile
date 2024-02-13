import { Image, Text } from "react-native";
import { ProductCardBox } from "../styles/stores.style";
import { ProductCardProps } from "../types/stores";
import { Flex } from "../styles/main.style";
import { View } from "react-native";

const ProductCard = () => {
  return (
    <ProductCardBox>
      <Image
        src="https://placehold.co/60x60.png"
        style={{
          height: 100,
          width: 100,
        }}
      />
      <Flex>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 8 }}>
            Camisa 1 Flamengo Authentic 2023/2024 - (TAMANHO M){" "}
          </Text>
        </View>
        <View>
          <Text style={{ color: "#3cae03", marginLeft: 10 }}>R$ 179,00</Text>
        </View>
        <Text style={{ fontSize: 10, color: "#1c1b1b" }} numberOfLines={2}>
          Sobre o Item:
        </Text>
        <Text style={{ fontSize: 5, color: "#1c1b1d" }}>TAMANHO M</Text>
        <Text style={{ fontSize: 5, color: "#1c1b1d" }}>Produto Exclusivo</Text>
        <Text style={{ fontSize: 5, color: "#1c1b1d" }}>Versão Torcedor</Text>
        <Text style={{ fontSize: 5, color: "#1c1b1d" }}>
          Qualidade Tailandesa 1:1
        </Text>
      </Flex>
    </ProductCardBox>
  );
};

export default ProductCard;
