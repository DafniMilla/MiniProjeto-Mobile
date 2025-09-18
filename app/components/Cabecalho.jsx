import { color } from "@rneui/base";

// Configurações do cabeçalho
export const Cabecalho = {
  headerShown: true,
  headerStyle: {
    backgroundColor:"#fca49c",
  },
  headerTintColor:"",
  headerTitleStyle: {
    color:"#f4e38c",
    fontWeight: 'bold',
    fontSize: 20,
  },
};

// Função para criar opções de cabeçalho com título personalizado
export const getCabecalhoOptions = (title = "Organizaê") => ({
  ...Cabecalho,
  title: title,
});

//estilo da navegação inferior
export const tabBarConfig = {
  tabBarActiveTintColor: '#fca49c',
  tabBarInactiveTintColor: '#f4e38c',
};