import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import Header from '../Header/index';
import OrderCard from '../OrderCard/index';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function Orders() {
    const [orders,setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();   /* hook do react, assim como useEffect, useState */
    const isFocused = useIsFocused(); /* toda vez que renderiza essa variável será modificada em TRUE e FALSE */

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false));
    }

    useEffect (() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);


  
    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    return (
      <> 
        <Header />
        <ScrollView style={styles.container}>
            {isLoading ? (
                <Text>Buscando pedidos...</Text>
            ) : (
                orders.map(order => (
                    <TouchableWithoutFeedback key={order.id} onPress={() => {handleOnPress(order)}}> 
                        <OrderCard order={order}/>
                    </TouchableWithoutFeedback>
                ))
            )}
        </ScrollView>
    </>
    );
}

/* na arrow function, () => {}, cada item de orders.map, order, como se fosse um FOR do java, varre toda a lista

/* OS Estilos são criados via JavaScript abaixo */
const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});

/* para Scroll da tela usar o componente ScrollView */