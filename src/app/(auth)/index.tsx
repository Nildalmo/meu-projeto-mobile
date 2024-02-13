import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import {
  FormBox,
  AuthTitle,
  AuthSubtitle,
  AuthLink,
} from "../../styles/auth.style";
import { router } from "expo-router";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setShowPassword(false);
  };

  const handleLogin = () => {
    router.navigate("/main");
  };

  return (
    <FormBox>
      <Text style={{ color: "#0f0303", textAlign: "center", fontSize: 19 }}>
        Flamengo Roupas Esportivas S.A
      </Text>
      <AuthTitle>Login</AuthTitle>
      <AuthSubtitle>Seja bem-vindo de volta</AuthSubtitle>
      <View>
        <Text>Digite E-mail:</Text>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#cbc9c9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text>Digite sua senha:</Text>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#cbc9c9"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!showPassword}
        />
        <Button title="Entrar" onPress={handleLogin} />
        <Text style={{ textAlign: "center" }}>
          Não tem uma conta? <AuthLink href="register">cadastre-se</AuthLink>
        </Text>
      </View>
    </FormBox>
  );
}
