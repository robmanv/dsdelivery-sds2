import React from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { Order } from '../types';
import { RectButton } from 'react-native-gesture-handler';
import OrderCard from '../OrderCard/index';
import setDelivered from '../api';

type Props = {
  route: {
    params: {
      order: Order
    }
  }
}

export default function OrderDetails({ route }: Props) {
  /* a View não é clicável dai tenho que fazer o Touchable */
  //const order = route.params.order;       /* todo Stack.Navigator (vide Routes.tsx) ja embute a prop route e params */
  const { order } = route.params;       /* Posso escrever assim também, extraindo order de route.params */
  const navigation = useNavigation();   /* hook do react, assim como useEffect, useState */

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  const handleDelivered = () => {
    setDelivered(order.id)
      .then(() => { 
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(() => {
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
      })

  }

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
          <OrderCard order={order} />
          <RectButton style={styles.button} onPress={handleStartNavigation}>
                <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleDelivered}>
                <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleOnCancel}>
                <Text style={styles.buttonText}>CANCELAR</Text>
          </RectButton>
        </View>
    </>
  );
}

/* OS Estilos são criados via JavaScript abaixo */
const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});
