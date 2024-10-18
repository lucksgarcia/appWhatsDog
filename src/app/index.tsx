import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router';
import { estilo } from '../estilos/estiloPrincipal';
import { useRouter } from 'expo-router';
import {Tabs} from 'expo-router';


//=============================================================//

export default function app() {
  
  const router = useRouter(); // Hook para navegação no Expo Router

  // useEffect para navegar automaticamente
  useEffect(() => {
    // Usar setTimeout para simular uma espera antes do redirecionamento (opcional)
    const timer = setTimeout(() => {
      router.replace('/home'); // Substitui a rota atual pela rota '/home'
    }, 1000); // Aguarda 1 segundo antes de redirecionar

    // Limpeza do timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>Redirecionando para a Home...</Text>
    </View>
  );
}
