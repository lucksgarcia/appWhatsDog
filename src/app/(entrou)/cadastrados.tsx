import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity, FlatList } from 'react-native';
import { tabEstilo } from '../../estilos/estiloTabs';
import GradientBackground3 from '../../components/backGroundpage/gradientBackground3';
import stylesGradient from '../../components/backGroundpage/gradientBackgroundStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import firebase from '../../database/firebaseConect';
import { useLocalSearchParams } from 'expo-router';  // Hook para pegar os parâmetros da rota
import { ref, onValue } from 'firebase/database'; // Para ler o banco de dados
//========================================================================================//

export default function cadastrados() {
  
        const [dogList, setDogList] = useState([]);
        
  
        useEffect(()=>{ 
            const dogRef = ref(firebase.database(),'tbDog/'); //Faz referencia para a tabela tbdog
            //console.log("Referência de 'tbDog' inicializada:", dogRef); 
            // Escuta os dados do Firebase e os armazena no estado
              onValue(dogRef, (snapshot) => {
                const data = snapshot.val();
                
                //console.log("Dados recebidos:", data); // Confirme os dados aqui
                const dogsArray = data ? Object.keys(data).map(key => ({
                  id: key,
                  ...data[key],
                })) : [];
                setDogList(dogsArray); // Atualiza o estado com a lista de dogs
              });

        }, [])

        // Função para renderizar cada item do FlatList
              const renderDogItem = ({item}) => (
                <View style={tabEstilo.itemContainer}>
                  <Text style={tabEstilo.name}>Nome: {item.apelido}</Text>
                  <Text style={tabEstilo.breed}>Raça: {item.racaDog}</Text>
                  <Text style={tabEstilo.age}>Idade: {item.idadeDog}</Text>
                </View>
              );

  return (
    <GradientBackground3 style={stylesGradient.container}>
      <View style={tabEstilo.container}>
          {/* Implementa o logo */}
          <View style={tabEstilo.containerlogoPages}>
            <Text style={tabEstilo.textologoPages}>What's DOG</Text>
          </View>
        <Text style={tabEstilo.subtitle}>Dogs já cadastrados</Text>
          {/* FlatList para renderizar os dados */}
          <FlatList
            data={dogList}
            keyExtractor={(item) => item.id}
            renderItem={renderDogItem}
            ListEmptyComponent={<Text>Nenhum cachorro cadastrado ainda.</Text>}
          />

      </View>
    </GradientBackground3>
  );
}