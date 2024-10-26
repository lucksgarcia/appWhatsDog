import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import GradientBackground3 from '../components/backGroundpage/gradientBackground3';
import estiloLoginGradient from '../components/backGroundpage/gradientBackgroundStyle';
import { estiloLogin } from '../estilos/estiloLogins';
import { Link } from 'expo-router';
import pataStyles from '../components/pataPng/pataPngStyles';
import PataPngCp from '../components/pataPng/pataPngCp';
import { estilo } from '../estilos/estiloPrincipal';

//====================================================//

export default function login(){


  return (
    
    <GradientBackground3 style={estiloLoginGradient.container}>

      
      <View style={estiloLogin.areaFormulario}>
        
        <View style={estiloLogin.containerlogoPages}>
          <Text style={estiloLogin.textologoPages}>What's DOG</Text>
        </View>

        <Text style={estiloLogin.title}>Seja bem-vindo(a) de volta!</Text>
        <Text style={estiloLogin.subtitle}>Faça o login para continuar</Text>

        
        <View>
          <Text style={estiloLogin.texto2}>E-Mail:</Text>
          <TextInput
            style={estiloLogin.input}
            placeholder="Digite seu E-mail"
            placeholderTextColor="#3c3a3a"
            keyboardType="email-address"
          />

          <Text style={estiloLogin.texto2}>Senha:</Text>
          <View style={estiloLogin.passwordContainer}>
            <TextInput
              style={estiloLogin.passwordInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#3c3a3a"
              secureTextEntry
            />
            <TouchableOpacity style={estiloLogin.eyeIcon}>
              <Text style={{ color: '#3c3a3a' }}>👁️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity style={estiloLogin.forgotPassword}>
            <Text style={estiloLogin.forgotPasswordText}>Esqueceu a senha:</Text>
          </TouchableOpacity>

          <View style={{paddingBottom:20, paddingTop:10}}></View>

          <TouchableOpacity style={estiloLogin.botaoAzul}>
            <View style={estiloLogin.btnArea}>
              <Text style={estiloLogin.btnTextoBranco}><Link href={'/profile'}>Entrar</Link></Text>
            </View>
          </TouchableOpacity>

          <Text style={estiloLogin.registerText}>
            Não é cadastrado?  <Text style={estiloLogin.registerLink}><Link href={'/pai'}>Cadastre-se aqui</Link></Text>
          </Text>

        </View>

        <View style={{paddingBottom:20, paddingTop:10}}></View>

      </View>

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


    </GradientBackground3>

  );
}

