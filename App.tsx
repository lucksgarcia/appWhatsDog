import React from 'react';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';


import {Routers} from './src/routers/indexRouters';
import { ActivityIndicator } from 'react-native';


//==================================================================


export default function App() {
  
  /*carrega as fontes para o projeto
  //let [fontsLoaded] = useFonts({
  EncodeSans_400Regular, EncodeSans_700Bold,
  });

 if (!fontsLoaded) {
  return <ActivityIndicator size="large" />;
  }*/

  
  return (
   
      <Routers />
      
  
  );
}

