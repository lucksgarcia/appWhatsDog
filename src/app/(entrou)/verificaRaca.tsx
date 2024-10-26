import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

//========================================================================================//

export default function raca() {
    
     
    const router = useRouter();
    const [inputValue,setInputValue] = useState('');// Estado para armazenar o valor do input
    const [image,setImage] = useState('https://i.pinimg.com/enabled/564x/11/41/61/1141614c8690ca0c3a3183827e4d47f3.jpg');
 
    // Função para abrir a câmera e capturar a imagem
    const tirarFoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,  // Permite que o usuário edite a imagem após capturar
          aspect: [4, 4],        // Define a proporção da imagem
          base64: true,
          quality: 1,            // Define a qualidade da imagem (1 = melhor qualidade)
        });

        if (!result.canceled){
            setImage(result.assets[0].uri);
      
          }

    };
    // Função para upload da imagem
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
   
     // Navegar para a tela de preview e passar a imagem e o texto
        const irParaCadastroDog = () => {
            console.log ("valor enviado ", image && inputValue);
            // Usando router.push para navegar e passar os parâmetros
            router.push({
                pathname: '/newDog', // Nome do arquivo da próxima tela (preview.js)
                params: {imageUri:image, inputValue }, // Enviando os dados como parâmetros
            });
            
        };

    return (
       
       <GradientBackground3 style={stylesGradient.container}>
            
            <View style={tabEstilo.container}>

                {/* Implementa o logo */}
                <View style={tabEstilo.containerlogoPages}>
                    <Text style={tabEstilo.textologoPages}>What's DOG</Text>
                </View>

               

                {/* Titulo */}
                <Text style={tabEstilo.title}>Verifica Raça</Text>

                {/* Identificação */}

                <View style={tabEstilo.identification}>
                    <TouchableOpacity onPress={tirarFoto} style={tabEstilo.optionButton}>
                        <FontAwesome name="camera" size={30} color="blue" />
                        <Text>Camera</Text>
                    </TouchableOpacity>
                    <Text style={tabEstilo.subtitle2}>Ou</Text>
                    <TouchableOpacity onPress={handleImagePicker} style={tabEstilo.optionButton}>
                        <FontAwesome name="upload" size={30} color="gray" />
                        <Text>Upload</Text>
                    </TouchableOpacity>
                </View>

                {/* Imagem */}
                <View style={tabEstilo.imageContainer}>
                    <Image
                        source={{ uri:image }}
                        style={tabEstilo.image}
                        alt="A imagem de um Dog"
                    />
                    
                </View>

                {/* botão detect*/}

                <TouchableOpacity style={tabEstilo.botaoAzul}>
                    <View style={tabEstilo.btnArea}>
                        <Text style={tabEstilo.btnTextoBranco}><Link href={'/profile'}>Detectar com IA</Link></Text>
                    </View>
                </TouchableOpacity>

                {/* resultado IA */}
                <View style={tabEstilo.resultContainer}>
                <TextInput
                                        style={tabEstilo.resultText}
                                        placeholder="AGUARDANDO IA......."
                                        placeholderTextColor="#9a9898"
                                        onChangeText={setInputValue}
                                        value={inputValue}
                                />
                </View>
                
                {/* botão de ida para o cadastro do dog */}
                <TouchableOpacity onPress={irParaCadastroDog} style={tabEstilo.optionButton2}>
                        <FontAwesome name="check" size={20} color="oranje" />
                        <Text>Continuar</Text>
                </TouchableOpacity>


            </View>
        </GradientBackground3>
    );
}

