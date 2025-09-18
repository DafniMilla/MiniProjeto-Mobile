import React from "react";
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    //telas que não aparecem a barra de navegação inferior e superior
    <Stack>
      <Stack.Screen 
        name="index" // tela principal que redireciona pra tela de login
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}

