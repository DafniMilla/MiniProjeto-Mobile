import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { useRouter, Link } from "expo-router";
import Botao from './components/Botao';

export default function Login() {
  const [email, setEmail] = useState<string | null>(null);
  const [senha, setSenha] = useState<string | null>(null);

  const router = useRouter();
  const entrar = (): void => {
    alert("entrou");
    router.push("/(tabs)/Tarefas");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>

        <Text style={styles.titulo}>Login </Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: "font-awesome", name: "envelope" , color:"#f4e38c"}}
          onChangeText={(value: string) => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Sua senha"
          leftIcon={{ type: "font-awesome", name: "lock", color: "#f4e38c" }}
          onChangeText={(value: string) => setSenha(value)}
          secureTextEntry
        />

        <Botao 
          title="ENTRAR" 
          onPress={entrar} 
        />
        
        <Text style={styles.linkText}>Não possui conta?</Text>
        <Link href="/Cadastro" style={styles.link}>Cadastre-se</Link>
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
  loginContainer: {
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
    color: "#261c21",
    fontSize: 14,
    marginTop: 10,
  },
  link: {
    color: "#000000ff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
   // textDecorationLine: "underline",
  },
});
