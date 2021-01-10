import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header/index';
import OrderCard from '../OrderCard/index';

export default function Orders() {
  return (
      <>
        <Header />
        <ScrollView style={styles.container}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </ScrollView>
    </>
    );
}

/* OS Estilos são criados via JavaScript abaixo */
const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});

/* para Scroll da tela usar o componente ScrollView */