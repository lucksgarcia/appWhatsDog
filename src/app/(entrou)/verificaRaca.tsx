import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

//========================================================================================//

export default function raca() {
    return (
        <GradientBackground3 style={stylesGradient.container}>
            <View style={tabEstilo.container}>

                {/* Implementa o logo */}
                <View style={tabEstilo.containerlogoPages}>
                    <Text style={tabEstilo.textologoPages}>What's DOG</Text>
                </View>

                {/* Inicio */}
                <View style={tabEstilo.header}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            marginRight: 8,
                            alignItems: 'flex-end',
                        }}>
                            <Text style={tabEstilo.subtitle2}>João Dias</Text>
                           
                        </View>
                        <FontAwesome name="user-circle" size={50} color="gray" />
                    </View>
                </View>

                {/* Titulo */}
                <Text style={tabEstilo.title}>Verifica Raça</Text>

                {/* Identificação */}

                <View style={tabEstilo.identification}>
                    <TouchableOpacity style={tabEstilo.optionButton}>
                        <FontAwesome name="camera" size={30} color="blue" />
                        <Text>Camera</Text>
                    </TouchableOpacity>
                    <Text style={tabEstilo.subtitle2}>Ou</Text>
                    <TouchableOpacity style={tabEstilo.optionButton}>
                        <FontAwesome name="upload" size={30} color="gray" />
                        <Text>Upload</Text>
                    </TouchableOpacity>
                </View>

                {/* Imagem */}
                <View style={tabEstilo.imageContainer}>
                    <Image
                        source={{ uri: 'https://placehold.co/300x200' }}
                        style={tabEstilo.image}
                        alt="A bulldog standing on grass"
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
                    <Text style={tabEstilo.resultText}>Este cachorro é um Bull Dog Inglês...............</Text>
                </View>



            </View>
        </GradientBackground3>
    );
}

