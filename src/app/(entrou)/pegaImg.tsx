import React from 'react';
import { View, Text, } from 'react-native';
import GradientBackground from '../../components/backGroundpage/gradientBackground';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';


//====================================================//

export default function xxxx () {
  return (
    <GradientBackground style={stylesGradient.container}>
      <View style={stylesGradient.content}>
        <Text style={stylesGradient.text}>Pagina padrão com background</Text>
      </View>
    </GradientBackground>
    
  );
}
