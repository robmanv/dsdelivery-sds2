import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../types';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    products: Product[];
}

export default function OrderProducts({ products }: Props) {
  return (
      <>
        <View>
          <ScrollView contentContainerStyle={styles.productsList}>
              {products.map(product => (
                  <>
                    <ScrollView key={product.id} style={styles.productsList2}>
                      <Image source={{uri: `${product.imageUri}`}} style={styles.productImage} />
                      <Text style={styles.text}>{product.name}</Text>
                    </ScrollView>
                  </>
                  ))}
          </ScrollView>
        </View>
    </>
  );
}

/* OS Estilos são criados via JavaScript abaixo */
const styles = StyleSheet.create(
    {
        container: {
          marginTop: '5%',
          marginLeft: '2%',
          marginRight: '2%',
          marginBottom: '2%',
          padding: 15,
          backgroundColor: '#FFF',
          shadowOpacity: 0.25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 20,
          borderRadius: 10,
          elevation: 5
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        text: {
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 19,
          letterSpacing: -0.24,
          color: '#9E9E9E',
          fontFamily: 'OpenSans_400Regular',
          flexDirection: 'column'
        },
        orderName: {
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 25,
          letterSpacing: -0.24,
          color: '#263238',
          fontFamily: 'OpenSans_700Bold'
        },
        orderPrice: {
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 25,
          textAlign: 'right',
          letterSpacing: -0.24,
          color: '#DA5C5C',
          fontFamily: 'OpenSans_700Bold'
        },
        productsList: {
          marginTop: 1,
          paddingTop: 1,
          flexDirection: 'row',
          flex: 0.2
        },
        productsList2: {
          marginLeft: 10,
          flexDirection: 'column'
        },
        productImage: {
          width: 100, 
          height: 100, 
          marginTop: 10
        }
      }
);
