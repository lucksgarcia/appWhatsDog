import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import GradientBackground from '../components/backGroundpage/gradientBackground';
import stylesGradient from '../components/backGroundpage/gradientBackgroundStyle';
import pataStyles from '../components/pataPng/pataPngStyles';
import PataPngCp from '../components/pataPng/pataPngCp';
import { estilo } from '../estilos/estiloPrincipal';
import { useNavigation } from '@react-navigation/native';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

//====================================================//


const home = () => {

  const openScreen = useNavigation();

  let [fontsLoaded] = useFonts({
    EncodeSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (

    //chamada para a view principal em gradiente//

    <GradientBackground style={stylesGradient.container}>

      <View style={estilo.containerText}>
        <Text style={estilo.textologoWhats}>What's</Text>
      </View>

      <View style={estilo.containerTextDog}>
        <Text style={estilo.textologoDogs}>DOG</Text>
      </View>




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

      <View style={pataStyles.container}>
        <View style={pataStyles.row}>
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={10} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage2}
          />
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={30} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage}
          />
        </View>

      </View>

      <View style={pataStyles.container}>
        <View style={pataStyles.row}>
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={40} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage}
          />
          <PataPngCp
            source={require('../../assets/imagens/pata_branca.png')} // Sua imagem local
            angle={70} // Rotaciona a imagem em 45 graus
            style={pataStyles.offsetImage2}
          />
        </View>

      </View>

      <View style={estilo.containerEspaco}>

      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => openScreen.navigate('loginUser')} // Navega para a página de Login

      >

        <View style={estilo.btnArea}>
          <Text style={estilo.btnTexto}>Vamos começar</Text>
        </View>

      </TouchableOpacity>



    </GradientBackground>

  );
}

export default home