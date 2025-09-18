import { Tabs } from "expo-router";
import { Icon } from '@rneui/themed';
import Octicons from '@expo/vector-icons/Octicons';
import { Cabecalho, getCabecalhoOptions } from '../components/Cabecalho';

//import {  } from '../components/BarraNavegacao';

//telas que não aparece a navegação inferior e a barra superior

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        ...Cabecalho,
        // ...tabBarConfig,
      }}
    >

      <Tabs.Screen
        name="Tarefas"
        options={{
          ...getCabecalhoOptions("Organizaê"), //chama o componente cabçalho na tela de tarefas
          tabBarLabel: "Tarefas",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="tasklist" size={24}  />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          ...getCabecalhoOptions("Organizaê"),
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="antdesign" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
