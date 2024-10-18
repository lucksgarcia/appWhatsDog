import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import GradientBackground from '../components/backGroundpage/gradientBackground';
import stylesGradient from '../components/backGroundpage/gradientBackgroundStyle';
import pataStyles from '../components/pataPng/pataPngStyles';
import PataPngCp from '../components/pataPng/pataPngCp';
import { estilo } from '../estilos/estiloPrincipal';
import { Link } from 'expo-router';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';
import GradientBackground2 from '../components/backGroundpage/gradientBackground2';

//========================================================================================================//


export default function home(){



  let [fontsLoaded] = useFonts({
    EncodeSans_700Bold, EncodeSans_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (

    //chamada para a view principal em gradiente//

    <GradientBackground style={stylesGradient.container}>


      <View style={estilo.containerlogoPages}>
        <Text style={estilo.textologoPages}>What's DOG</Text>
      </View>


      <View style={estilo.containerCurveDog}>
        <Image
          source={require('../../assets/imagens/dogCurve.png')} // Caminho para a imagem local
          style={estilo.curveDogImage}
        />
      </View>

      <View>
        <Text style={{
          fontSize: 25,
          textAlign: 'center',
          fontFamily: 'EncodeSans_400Regular',
          fontWeight: 'bold',
          color: '#ffff',
          paddingBottom: 20
        }}>Qual a raça do seu cão?</Text>
      </View>

      <View>
        <Text style={{
          fontSize: 18,
          textAlign: 'justify',
          fontFamily: 'EncodeSans_400Regular',
          fontWeight: 'medium',
          color: '#ffff',
          paddingHorizontal: 15,
          paddingBottom: 15
        }}><Text>Você pode não saber, mas nossa inteligência</Text>
          <Text> artificial sabe, e irá detalhar para você.</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={estilo.botao}
      >

        <View style={estilo.btnArea}>
          <Text style={estilo.btnTexto}><Link href={'/login'}> Vamos começar</Link></Text>
        </View>

      </TouchableOpacity>

      <View style={pataStyles.container}>
        <View style={pataStyles.row}>
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={45} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage}
          />
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={60} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage2}
          />
        </View>

      </View>


    </GradientBackground>

  );
}

