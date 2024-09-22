import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import GradientBackground2 from '../components/backGroundpage/gradientBackground2';
import stylesGradient from '../components/backGroundpage/gradientBackgroundStyle';
import { estilo } from '../estilos/estiloPrincipal';
import { useNavigation } from '@react-navigation/native';
import home from './home';


//====================================================//

const login = () => {
  
  const openScreen = useNavigation();
  
  return (
    <GradientBackground2 style={stylesGradient.container}>
      
      <View style={estilo.containerlogoPages}>
        <Text style={estilo.textologoPages}>What's DOG</Text>
      </View>

      
      <TouchableOpacity
       style={estilo.botaoAzul}
       onPress={() => openScreen.navigate(home)} // Navega para a página de Login
      >
      <View style={estilo.btnArea}>
        <Text style={estilo.btnTextoBranco}>Voltar para home</Text>
      </View>

      </TouchableOpacity>

    </GradientBackground2>
    
  );
}

export default login