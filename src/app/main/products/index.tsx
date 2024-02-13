import ProductCard from "../../../components/ProductCard";
import { Flex } from "../../../styles/main.style";

export default function Products() {
  return (
    <Flex gap={5} paddingHorizontal={10} padding={10}>
      <Products />
      <Products />
      <Products />
      <Products />
    </Flex>
  );
}
