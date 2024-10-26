import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image,} from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import pataStyles from '../../components/pataPng/pataPngStyles';
import PataPngCp from '../../components/pataPng/pataPngCp';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

//========================================================================================//

export default function entrou() {
 
 const [image,setImage] = useState('https://i.pinimg.com/enabled/564x/11/41/61/1141614c8690ca0c3a3183827e4d47f3.jpg');
 
 const handleImagePicker =  async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4,4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
     
    if (!result.canceled){
      setImage(result.assets[0].uri);

    }
 };

  return (
    
    <GradientBackground3 style={stylesGradient.container}>
      <View style={tabEstilo.container}>

        {/* Implementa o logo */}
        <View style={tabEstilo.containerlogoPages}>
          <Text style={tabEstilo.textologoPages}>What's DOG</Text>
        </View>

        {/* Profile Image */}
        <View style={tabEstilo.profileImageContainer}>
          <Image source={{uri:image}} style={tabEstilo.profileImage} />
          <TouchableOpacity onPress={handleImagePicker} style={{marginTop: 20, borderRadius:50, marginBottom: 20, }}>
            <Text>Escolher imagem</Text>
          </TouchableOpacity>
        </View>

        {/* informação do usuario */}
        <View style={{marginBottom: 20, }}>
          <Text style={tabEstilo.title}>João Dias</Text>
          <Text style={tabEstilo.subtitle}>Dog cadastrados: 1</Text>
          <Text style={tabEstilo.subtitle}>Membro desde: 20/07/2024</Text>
        </View>

        {/* Identificação */}

        <View style={tabEstilo.identification}>
          <TouchableOpacity style={tabEstilo.optionButton}>
            <FontAwesome name="search" size={30} color="gray" />
            <Text><Link href={'/verificaRaca'}>Cadastra Dog </Link></Text>
          </TouchableOpacity>

              
          <TouchableOpacity style={tabEstilo.optionButton}>
            <FontAwesome name="paw" size={30} color="blue" />
            <Text><Link href={'/cadastrados'}>Meus Dogs</Link></Text>
            </TouchableOpacity>
        </View>


        

      </View>

    </GradientBackground3>


  );
}
