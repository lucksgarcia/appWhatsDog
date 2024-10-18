import { StyleSheet } from 'react-native';

export const stylesGradient = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      paddingVertical: 10,
      paddingHorizontal:10,
      backgroundColor: '#FFCF6F', // Fundo transparente para destacar o gradiente
      borderRadius: 20,
    },
    text: {
      fontSize: 18,
      color: '#030303',
    },
  });

  export default stylesGradient
