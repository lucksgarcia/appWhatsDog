import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';



const GradientBackground2 = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#a2a9ef', '#ffff']} // Define as cores do gradiente #4552CB', '#4596EA
      style={[styles.background, style]} // Permite passar estilos customizados via props
    >
      {children}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
    background: {
      flex: 1, // Faz a View ocupar todo o espaço disponível
    },
  });

export default GradientBackground2;