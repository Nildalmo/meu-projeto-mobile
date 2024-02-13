import React from "react";

import { Flex } from "../styles/main.style";
import { StoreCardBox } from "../styles/stores.style";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { router } from "expo-router";

export const StoreCard = () => {
  return (
    <StoreCardBox onPress={() => router.push("/main/stores/1")}>
      <View>
        <Image
          src="https://placehold.co/60x60/png"
          style={{ borderRadius: 50, height: 60, width: 60 }}
        />
      </View>
    </StoreCardBox>
  );
};
