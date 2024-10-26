import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import firebase from '../../database/firebaseConect';
import { useLocalSearchParams } from 'expo-router';  // Hook para pegar os parâmetros da rota


//========================================================================================//

export default function novo() {
       
        const {imageUri, inputValue } = useLocalSearchParams(); // Pegando os parâmetros da URL


        const [nomeDog, setNomeDog] = useState('');
        const [racaDog, setRacaDog] = useState(inputValue);
        const [idadeDog, setIdade] = useState('');
        const [obsRaca, setObsRaca] = useState('');
        const [fotoDog, setFotoDog] = useState('');
       
        async function cadastrar() {
                
                if (nomeDog !== '' & racaDog !== '' & idadeDog !== '') {
                        let tbDog = await firebase.database().ref('tbDog');
                        let idDog = tbDog.push().key;

                        tbDog.child(idDog).set({
                               
                                fotoDog: fotoDog,
                                apelido: nomeDog,
                                racaDog: racaDog,
                                idadeDog: idadeDog,
                                obsRaca: obsRaca,

                        });

                        alert('Cadastrado com sucesso!');
                
                        setNomeDog(''); 
                        setFotoDog('');
                        setRacaDog('');
                        setIdade('');
                        setObsRaca('');

                }
        }

       
       
       
       
        return (
                <GradientBackground3 style={stylesGradient.container}>
                        <View style={tabEstilo.container}>

                                {/* Implementa o logo */}
                                <View style={tabEstilo.containerlogoPages}>
                                        <Text style={tabEstilo.textologoPages}>What's DOG</Text>
                                </View>

                                {/* retirei por motivo de espaço
                                <View style={tabEstilo.header}>
                                        <Text style={tabEstilo.subtitle}>Adicionar DOG</Text>
                                        <View style={tabEstilo.iconContainer}>
                                                <FontAwesome name="paw" size={24} color="blue" />
                                                <FontAwesome name="plus" size={12} color="green" style={tabEstilo.plusIcon} />
                                        </View>
                                </View> */}

                                {/* Formulario*/}
                                <View style={tabEstilo.areaFormulario}>
                                      
                                        {/* Profile Image */}
                                        <View style={tabEstilo.profileImageContainer2}>
                                
                                        {/* Exibe a imagem passada como parâmetro*/}
                                                {imageUri && (
                                                        <Image 
                                                        source={{ uri: imageUri} }
                                                        style={tabEstilo.profileImage2}
                                                        />
                                                )} 
                                        </View>
                                       
                                        <Text>Nome:</Text>
                                        <TextInput 
                                                style={tabEstilo.input} 
                                                placeholder="Apelido"
                                                placeholderTextColor="#9a9898"
                                                onChangeText={(texto) => setNomeDog(texto)}
                                                value={nomeDog}
                                        />

                                        <Text>Raça identificada: </Text>
                                        <TextInput 
                                                style={tabEstilo.input}
                                                placeholder="IA"
                                                placeholderTextColor="#9a9898"
                                                onChangeText={(texto) => setRacaDog(texto)}
                                                value={racaDog}
                                        
                                        />

                                        <Text>Idade: </Text>
                                        <TextInput 
                                                style={tabEstilo.input} 
                                                placeholder="Coloque a idade aproximada"
                                                placeholderTextColor="#9a9898"
                                                onChangeText={(texto) => setIdade(texto)}
                                                value={idadeDog}
                                        />

                                        <Text>Observação: </Text>
                                        <TextInput 
                                                style={tabEstilo.input} 
                                                placeholder="Algo sobre o dog"
                                                placeholderTextColor="#9a9898"
                                                onChangeText={(texto) => setObsRaca(texto)}
                                                value={obsRaca}
                                                />

                                        <TouchableOpacity
                                                style={tabEstilo.botaoAzul}
                                                onPress={cadastrar}
                                                >
                                                <View style={tabEstilo.btnArea}>
                                                        <Text style={tabEstilo.btnTextoBranco}>ADD meu DOG</Text>
                                                </View>
                                        </TouchableOpacity>

                                </View>


                        </View>
                </GradientBackground3>
        );
}

