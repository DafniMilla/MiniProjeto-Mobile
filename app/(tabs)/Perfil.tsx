import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Input, Button, Text } from 'react-native-elements';
import { useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function Perfil() {
  const router = useRouter();
  const [nome, setNome] = useState<string>('Seu Nome');
  const [email, setEmail] = useState<string>('email@exemplo.com');

  return (

    <View style={styles.container}>
      <View style={styles.containerPerfil}>
        <Avatar
          rounded
          size="xlarge"
          source={require('../../assets/images/avatarperfil.png')}
          containerStyle={styles.avatar}
        />

        <Text h3 style={styles.titulo}>Meu Perfil</Text>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(value: string) => setNome(value)}
          leftIcon={{ type: 'feather', name: 'user' }}
        />

        <Input
          label="E-mail"
          value={email}
          onChangeText={(value: string) => setEmail(value)}
          leftIcon={{ type: 'feather', name: 'mail' }}
        />

        <Botao
          title="sair da conta"
          onPress={() => router.push('/Login')}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  containerPerfil: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: '100%',
    borderRadius: 20,
    padding: 20,
    gap: 2,
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: '#e4b0b0ff',
  },
  titulo: {
    marginBottom: 20,
    color: '#333',
  },
});
