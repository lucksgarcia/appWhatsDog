
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

import { StyleSheet } from 'react-native';

export const estiloLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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

  areaFormulario: {
    flexDirection:'column',
    padding: 20,
    alignItems: 'center'
  },

  botao: {
    width: 260,
    height: 46,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a3edc'
  },

  botaoAzul: {
    width: 260,
    height: 40,
    borderWidth: 2,
    borderColor: '#4552cb',
    backgroundColor: '#091BC0', //#6B46C1 alternativo para usar pata lilas
    marginTop: 10,
    borderRadius: 25,
    
  },
  
  btnTextoBranco: {
    fontSize: 20,
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
    paddingVertical:20,
    //paddingRight: 60,
    //alignSelf: 'flex-end',
    //paddingBottom: 10
  },

  textologoPages: {
    fontSize: 35,
    color: '#FFCF6F',
    textAlign: 'center',
    fontWeight: 'bold',
    
    
  },

  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#060606',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 46,
    padding: 10,
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#D1C4E9',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#F3E5F5',
  },
  passwordContainer: {
    width: 300,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1C4E9',
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#A3A3A3',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#7E57C2',
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#A3A3A3',
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#1F1F1F',
    fontWeight: 'bold',
  },
  pawContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  pawImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },

  inputEmail: {
    backgroundColor: '#F7FAFC',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    color: '#718096',
    width: 260,
    paddingTop: 10,
    textAlign:'justify'
  },

  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#6B46C1',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },

  footerText: {
    color: '#718096',
    marginBottom: 24,
    paddingTop:10,
  },
  footerLink: {
    color: '#6B46C1',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  checkboxL: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxInner: {
    width: 16,
    height: 16,
    backgroundColor: '#6B46C1',
  },

});

