import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import {
  FormBox,
  AuthTitle,
  AuthSubtitle,
  AuthButton,
  AuthLink,
} from "../../../styles/auth.style";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!nome || !email || !password || !confirmPassword) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos."
      );
      return;
    }
    if (!isEmailValid(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Senhas não coincidem", "As senhas devem ser iguais.");
      return;
    }

    console.log("Registrado com sucesso!");
  };

  return (
    <FormBox>
      <AuthTitle>Cadastro</AuthTitle>
      <AuthSubtitle>Seja bem-vindo, cadastre-se!</AuthSubtitle>

      <View>
        <Text>Nome:</Text>
        <TextInput
          placeholder="Nome..."
          placeholderTextColor="#cbc9c9"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="none"
        />
      </View>

      <View>
        <Text>Email:</Text>
        <TextInput
          placeholder="Email..."
          placeholderTextColor="#cbc9c9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View>
        <Text>Senha:</Text>
        <TextInput
          placeholder="Senha..."
          placeholderTextColor="#cbc9c9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View>
        <Text>Confirme sua senha:</Text>
        <TextInput
          placeholder="Confirme sua senha..."
          placeholderTextColor="#cbc9c9"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <Button title="Cadastrar" onPress={handleRegister} />
      <Text style={{ textAlign: "center" }}>
        Já possui uma conta? <AuthLink href="/">Faça login</AuthLink>
      </Text>
    </FormBox>
  );
}
