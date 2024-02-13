import { Tabs } from "expo-router";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Loja Flamengo",
          tabBarIcon: () => <Icon name="home" color="#e7562aff" size={28} />,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            color: "#e7562aff",
          },
          headerTitleAlign: "center",
          headerTintColor: "#e7562aff",
        }}
      />

      <Tabs.Screen
        name="products/index"
        options={{
          title: "carrinho de compras",
          tabBarShowLabel: false,
          headerTintColor: "#e7562aff",
          tabBarIcon: () => (
            <IconEntypo name="shopping-cart" color="#e7562aff" size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="/"
        options={{
          title: "carrinho de compras",
          tabBarShowLabel: false,
          headerTintColor: "#e7562aff",
          tabBarIcon: () => (
            <IconEntypo name="user" color="#e7562aff" size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="stores/[id]/index"
        options={{ href: null, headerShown: false, tabBarShowLabel: false }}
      />
    </Tabs>
  );
}
