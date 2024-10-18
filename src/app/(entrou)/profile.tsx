import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import pataStyles from '../../components/pataPng/pataPngStyles';
import PataPngCp from '../../components/pataPng/pataPngCp';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';

//========================================================================================//

export default function entrou() {
  return (
    <GradientBackground3 style={stylesGradient.container}>
      <View style={tabEstilo.container}>

        {/* Implementa o logo */}
        <View style={tabEstilo.containerlogoPages}>
          <Text style={tabEstilo.textologoPages}>What's DOG</Text>
        </View>

        {/* Profile Image */}
        <View style={tabEstilo.profileImageContainer}>
          <View style={tabEstilo.profileImage} />
        </View>

        {/* informação do usuario */}
        <View>
          <Text style={tabEstilo.title}>João Dias</Text>
          <Text style={tabEstilo.subtitle}>Dog cadastrados: 1</Text>
          <Text style={tabEstilo.subtitle}>Membro desde: 20/07/2024</Text>
        </View>

        {/* Informação dog */}
        <View>
          <TouchableOpacity style={tabEstilo.button}>
            <Text style={tabEstilo.buttonText}>PEGA LEVE</Text>
          </TouchableOpacity>
        </View>



      </View>

    </GradientBackground3>


  );
}
