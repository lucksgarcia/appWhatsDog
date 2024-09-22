import { StyleSheet } from 'react-native';

export const pataStyles = StyleSheet.create({
  image: {
    width: 50, //largura padrão da imagem
    height:50, //altura padrão da imagem
    marginRight: 20, // espaçamento entre as imagens
  },

  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row', // Alinha as imagens horizontalmente
  },

  offsetImage: {
    marginTop: 20, // Desloca a segunda imagem um pouco para baixo
  },

  offsetImage2: {
    marginTop: 50, // Desloca a segunda imagem um pouco para baixo
    marginBottom: 20,
  }

});

export default pataStyles;