import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

/* OS Estilos são criados via JavaScript abaixo */
const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C',
      height: 90,
      paddingTop: 50,
      flexDirection: 'row',      /* muda o padrão de coluna para linha, aqui no react Native é tudo colado em camel case */
      justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,    /* Pra converter em para pixel, só multiplicar por 16 */
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
  }
});
