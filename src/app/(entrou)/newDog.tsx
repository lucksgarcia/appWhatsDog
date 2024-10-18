import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

//========================================================================================//

export default function novo() {
        return (
                <GradientBackground3 style={stylesGradient.container}>
                        <View style={tabEstilo.container}>

                                {/* Implementa o logo */}
                                <View style={tabEstilo.containerlogoPages}>
                                        <Text style={tabEstilo.textologoPages}>What's DOG</Text>
                                </View>

                                {/* Inicio*/}
                                <View style={tabEstilo.header}>
                                        <Text style={tabEstilo.subtitle}>Adicionar DOG</Text>
                                        <View style={tabEstilo.iconContainer}>
                                                <FontAwesome name="paw" size={24} color="blue" />
                                                <FontAwesome name="plus" size={12} color="green" style={tabEstilo.plusIcon} />
                                        </View>
                                </View>

                                {/* Formulario*/}
                                <View style={tabEstilo.areaFormulario}>
                                        <Text>Nome: </Text>
                                        <TextInput style={tabEstilo.input} />

                                
                                        <Text>Identifique a raça: </Text>
                                        <TouchableOpacity style={tabEstilo.optionButton}>
                                                <FontAwesome name="camera" size={24} color="blue" />
                                                <Text style={tabEstilo.cameraText}>Camera</Text>
                                        </TouchableOpacity>

                                        <Text style={tabEstilo.subtitle}><Text style={{ color: '#1d4ed8' }}>Ou</Text></Text>

                                        <Text>Informe a raça: </Text>
                                        <TextInput style={tabEstilo.input} />

                                        <Text>Observação: </Text>
                                        <TextInput style={tabEstilo.input} />

                                        <TouchableOpacity style={tabEstilo.botaoAzul}>
                                                <View style={tabEstilo.btnArea}>
                                                        <Text style={tabEstilo.btnTextoBranco}><Link href={'/profile'}>Cadastrar</Link></Text>
                                                </View>
                                        </TouchableOpacity>

                                </View>


                        </View>
                </GradientBackground3>
        );
}

