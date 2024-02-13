import { Stack } from "expo-router";

export default function LayoutAuth() {
  return (
    <Stack
      screenOptions={{
        animation: "ios",
        contentStyle: {
          backgroundColor: "#d22929",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
