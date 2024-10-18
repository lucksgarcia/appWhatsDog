
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a3edc',
    alignItems: 'center',
    justifyContent: 'center',

  },

  containerEspaco: {
    //flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5, // Adiciona algum padding horizontal
    paddingLeft: 60,
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingBottom: 10
  },

  containerText: {
    //flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5, // Adiciona algum padding horizontal
    paddingLeft: 60,
    alignSelf: 'flex-start',
    paddingTop: 5,
    //paddingBottom: 1,
  },

  containerTextDog: {
    //flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5, // Adiciona algum padding horizontal
    paddingRight: 60,
    alignSelf: 'flex-end',
    paddingBottom: 10
  },

  textologoWhats: {
    fontSize: 45,
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'EncodeSans_700Bold',
    fontWeight: 'condensedBold'
  },

  texto: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'EncodeSans_700Bold',
    fontWeight: 'normal'
  },


  textologoDogs: {
    fontSize: 55,
    color: '#FFCF6F',
    textAlign: 'right',
    fontWeight: 'bold',

  },

  botao: {
    width: 260,
    height: 40,
    borderWidth: 2,
    borderColor: '#FFCF6F',
    backgroundColor: '#FFCF6F',
    marginTop: 10,
    borderRadius: 25,
    
  },
  
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a3edc'
  },

  botaoAzul: {
    width: 260,
    height: 46,
    borderWidth: 2,
    borderColor: '#4552cb',
    backgroundColor: '#4552cb',
    marginTop: 10,
    borderRadius: 25,
    
  },
  
  
  btnTextoBranco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  containerCurveDog: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  curveDogImage: {
    width: 375,
    height: 375,
  },

  containerlogoPages: {
    justifyContent: 'center',
    paddingHorizontal: 10, // Adiciona algum padding horizontal
    paddingTop: 20,
    //paddingRight: 60,
    //alignSelf: 'flex-end',
    //paddingBottom: 10
  },

  textologoPages: {
    fontSize: 35,
    color: '#FFCF6F',
    textAlign: 'center',
    fontWeight: 'bold', 
  }

});

