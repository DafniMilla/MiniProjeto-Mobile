import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { useRouter, Link } from "expo-router";
import Botao from './components/Botao';

export default function Cadastro() {
  const [email, setEmail] = useState<string | null>(null);
  const [senha, setSenha] = useState<string | null>(null);

  const router = useRouter();

  const cadastrar = (): void => {
    alert("Cadastro realizado!");
    router.push("/(tabs)/Tarefas");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cadastroContainer}>
        <Text style={styles.titulo}>Cadastre-se </Text>
        <Input
          placeholder='Nome de usuário'
          leftIcon={{ type: 'font-awesome', name: 'user' , color: "#f4e38c"}}
        />
        <Input
          placeholder="E-mail"
          leftIcon={{ type: "font-awesome", name: "envelope", color: "#f4e38c" }}
          onChangeText={(value: string) => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          leftIcon={{ type: "font-awesome", name: "lock", color: "#f4e38c"}}
          onChangeText={(value: string) => setSenha(value)}
          secureTextEntry
        />
        <Input
          placeholder="Confirmar senha"
          leftIcon={{ type: "font-awesome", name: "lock", color: "#f4e38c" }}
          onChangeText={(value: string) => setSenha(value)}
          secureTextEntry
        />
        <Botao
          title="CADASTRAR"
          onPress={cadastrar}
        />
        <Text style={styles.linkText}>Já possui uma conta? Entre</Text>
        <Link href="/Login" style={styles.link}>aqui!</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  cadastroContainer: {
    backgroundColor: "#FFFFFF",
    width: 400,
    alignItems: "center",
    borderRadius: 18,
  },
  titulo: {
    color: "#fca49c",
    fontSize: 40,
    fontWeight: "bold",
  },

  linkText: {
    color: "##261c21",
  },

  link: {
    color: "#000000ff",
    fontWeight: "bold",
  }


});

