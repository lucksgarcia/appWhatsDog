import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import GradientBackground3 from '../components/backGroundpage/gradientBackground3';
import estiloLoginGradient from '../components/backGroundpage/gradientBackgroundStyle';
import { estiloLogin } from '../estilos/estiloLogins';
import { Link } from 'expo-router';
import pataStyles from '../components/pataPng/pataPngStyles';
import PataPngCp from '../components/pataPng/pataPngCp';
import firebase from '../database/firebaseConect';


//================================================================================================//

const addPai = () => {
  
  const [isSelected, setSelection] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [nome, setNome] = useState('');
  const [email, setMail] = useState('');
  const [fotoPai, setFotoPai] = useState('');
  const [senha, setSenha] = useState('');
  const [dataRg, setDataRG] = useState('');



  async function cadastrar() {
    
  
      
    if (nome !== '' && email !== '' && fotoPai !== '' && senha !== '' && dataRg !== '') {
          let tbPai = await firebase.database().ref('tbPai');
          let idPai = tbPai.push().key;

          tbPai.child(idPai).set({
              nome: nome,
              email: email,
              fotoPai: fotoPai,
              senha: senha,
              dataRg: dataRg
          });

          alert('Cadastrado com sucesso!');
          setNome('');
          setMail('');
          setFotoPai('');
          setSenha('');
          setDataRG('')
      }
  }

  const onRegisterPress = () => {
  }


  return (


    <GradientBackground3 style={estiloLoginGradient.container}>

      <View style={estiloLogin.containerlogoPages}>
        <Text style={estiloLogin.textologoPages}>What's DOG</Text>
      </View>

      <Text style={estiloLogin.title}>Bem-vindo(a)</Text>
      <Text style={estiloLogin.subtitle}>Faça seu cadastro</Text>

      <View style={estiloLogin.areaFormulario}>
        <View>
          <Text>Nome:</Text>
          <TextInput
            style={estiloLogin.input}
            placeholder="Nome completo"
            placeholderTextColor="#A3A3A3"
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />

          <Text>E-Mail: </Text>
          <TextInput
            style={estiloLogin.input}
            placeholder="E-mail"
            placeholderTextColor="#A3A3A3"
            keyboardType="email-address"
            onChangeText={(texto) => setMail(texto)}
            value={email}
          />


          <Text>Senha: </Text>
          <View style={estiloLogin.passwordContainer}>
            <TextInput
              style={estiloLogin.passwordInput}
              placeholder="Senha"
              placeholderTextColor="#A3A3A3"
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

          <View style={estiloLogin.checkboxContainer}>
            <TouchableOpacity
              style={estiloLogin.checkboxL}
              onPress={() => setSelection(!isSelected)}
            >
              {isSelected && <View style={estiloLogin.checkboxInner} />}
            </TouchableOpacity>
            <Text style={estiloLogin.label}>Para criar seu cadastro você deve estar em de acordo com os Termos & Condições.</Text>
          </View>

          <TouchableOpacity
            style={estiloLogin.botaoAzul}
            onPress={() => onRegisterPress()}
          >
            <View style={estiloLogin.btnArea}>
              <Text style={estiloLogin.btnTextoBranco}>Criar Meu Cadastro</Text>
            </View>
          </TouchableOpacity>

          <Text style={estiloLogin.footerText}>
            Você já é cadastrado?  <Text style={estiloLogin.footerLink}><Link href={'/login'}>Clique aqui</Link></Text>
          </Text> 

          <Button
                title="Novo Pai de Dog"
                onPress={cadastrar}
            />

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

      <View style={{ alignItems: 'center', paddingBottom:20,}}></View>
      

    </GradientBackground3>

  );
}

export default addPai