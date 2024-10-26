import { StyleSheet } from 'react-native';

export const tabEstilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 24,
    color: '#060606',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle2: {
    fontSize: 16,
    color: '#060606',
    marginBottom: 10,
    textAlign: 'center',
  },
 
  profileImageContainer: {
    marginBottom: 20,
  },
  
  profileImage: {
    width: 120,
    height: 120,
    backgroundColor: '#D1D5DB',
    borderRadius: 60,
  },

  profileImageContainer2: {
    marginBottom: 20,
  },
  
  profileImage2: {
    width: 100,
    height: 100,
    backgroundColor: '#D1D5DB',
    borderRadius: 50,
  },

  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  areaFormulario: {
    flexDirection:'column',
    padding: 20,
    alignItems: 'center'
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

  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 16,
  },
  cameraText: {
    marginLeft: 8,
    color: '#3b82f6',
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

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    position: 'relative',
  },

  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  identification: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },

  optionButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },

  optionButton2: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#0b6af7',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

  imageContainer: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    margin:10,
  },

  image: {
    width: 200,
    height: 150,
  },

  resultContainer: {
    backgroundColor: '#bfdbfe',
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },

  resultText: {
    color: '#1d4ed8',
  },

  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor:'#1d4ed8',
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius:10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFCF6F'
  },
  breed: {
    fontSize: 16,
    color: '#ffff',
  },
  age: {
    fontSize: 16,
    color: '#ffff',
  },

});