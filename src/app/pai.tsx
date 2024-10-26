import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { Link } from 'expo-router';
import firebase from '../database/firebaseConect';
import { estiloLogin } from '../estilos/estiloLogins';
import GradientBackground3 from '../components/backGroundpage/gradientBackground3';
import estiloLoginGradient from '../components/backGroundpage/gradientBackgroundStyle';
import pataStyles from '../components/pataPng/pataPngStyles';
import PataPngCp from '../components/pataPng/pataPngCp';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

//=========================================================================

export default function App() {

        const [passwordVisible, setPasswordVisible] = useState(false);

       //Constantes para permissão da camera
       



        
       // Captura a data e hora atuais do dispositivo
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const ano = dataAtual.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`; // Formato DD/MM/YYYY

       //=========================================================
       
        const [nome, setNome] = useState('');
        const [email, setMail] = useState('');
        const [senha, setSenha] = useState('');
        const [dataRg, setDataRG] = useState('');
        const [fotoPai, setFotoPai] = useState('');

        

        //Função que cadastra no banco de dados firebase
        async function cadastrar() {
                
                if (nome !== '' & email !== '' & senha !== '') {
                        let tbPai = await firebase.database().ref('tbPai');
                        let idPai = tbPai.push().key;

                        tbPai.child(idPai).set({
                               
                                fotoPai: fotoPai,
                                nome: nome,
                                email: email,
                                dataRg: dataFormatada,
                                senha: senha

                        });

                        alert('Cadastrado com sucesso!');
                
                        setMail(''); 
                        setNome('');
                        setSenha('');

                }
        }

        return (

        <GradientBackground3 style={estiloLoginGradient.container}>

                <View style={estiloLogin.areaFormulario}>
                
                        <View style={estiloLogin.containerlogoPages}>
                                <Text style={estiloLogin.textologoPages}>What's DOG</Text>
                        </View>
                        
                        <Text style={estiloLogin.title}>Bem-vindo(a)</Text>
                        <Text style={estiloLogin.subtitle}>Faça seu cadastro</Text>

                        
                       
                        <View>
                                <Text style={estiloLogin.texto2}>Nome:</Text>
                                <TextInput
                                        style={estiloLogin.input}
                                        placeholder="Nome completo"
                                        placeholderTextColor="#9a9898"
                                        onChangeText={(texto) => setNome(texto)}
                                        value={nome}
                                />
                                <Text style={estiloLogin.texto2}>E-Mail</Text>
                                <TextInput
                                        style={estiloLogin.input}
                                        placeholder="E-mail"
                                        placeholderTextColor="#9a9898"
                                        keyboardType="email-address"
                                        onChangeText={(texto) => setMail(texto)}
                                        value={email}
                                />

                                <Text style={estiloLogin.texto2}>Senha: </Text>
                                <View style={estiloLogin.passwordContainer}>
                                        <TextInput
                                                style={estiloLogin.passwordInput}
                                                placeholder="Senha"
                                                placeholderTextColor="#9a9898"
                                                secureTextEntry={!passwordVisible}
                                                onChangeText={(texto) => setSenha(texto)}
                                                value={senha}
                                        />

                                        <TouchableOpacity
                                                style={estiloLogin.eyeIcon}
                                                onPress={() => setPasswordVisible(!passwordVisible)}>
                                                <Text style={{ color: '#A0AEC0' }}>{passwordVisible ? '👁️' : '🙈'}</Text>
                                        </TouchableOpacity>
                                </View>

                        </View>

                        <TouchableOpacity
                                style={estiloLogin.botaoAzul}
                                onPress={cadastrar}
                                >
                                <View style={estiloLogin.btnArea}>
                                        <Text style={estiloLogin.btnTextoBranco}>Criar Meu Cadastro</Text>
                                </View>
                        </TouchableOpacity>

                        <Text style={estiloLogin.footerText}>
                                Você já é cadastrado?  <Text style={estiloLogin.footerLink}><Link href={'/login'}>Clique aqui</Link></Text>
                        </Text>

                        <View style={pataStyles.container}>
                                <View style={pataStyles.row}>
                                <PataPngCp
                                source={require('../../assets/imagens/pata_azul.png')} // Sua imagem local
                                angle={10} // Rotaciona a imagem em 45 graus
                                style={pataStyles.offsetImage}
                                />
                                <PataPngCp
                                source={require('../../assets/imagens/pata_azul.png')} // Sua imagem local
                                angle={20} // Rotaciona a imagem em 45 graus
                                style={pataStyles.offsetImage2}
                                />
                                </View>
                        </View>   

                </View>

         </GradientBackground3>
        );
}
