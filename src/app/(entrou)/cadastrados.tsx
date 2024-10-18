import React from 'react';
import { View, Text } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';

//========================================================================================//

export default function cadastrados() {
  return (
    <GradientBackground3 style={stylesGradient.container}>
      <View style={tabEstilo.container}>
          {/* Implementa o logo */}
          <View style={tabEstilo.containerlogoPages}>
            <Text style={tabEstilo.textologoPages}>What's DOG</Text>
          </View>
        <Text style={tabEstilo.subtitle}>Meus dogs cadastrados</Text>
      </View>
    </GradientBackground3>
  );
}