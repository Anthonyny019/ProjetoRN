import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista2 from './estiloLista2';
import { LinearGradient } from 'expo-linear-gradient';

const Lista2 = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista2.areaItens}>

        <LinearGradient colors={['#e74848', '#e74848', '#e74848']}>
        <Text style={estiloLista2.itemTitulo}> {item.titulo} </Text>
        </LinearGradient>
        <Text style={estiloLista2.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>

        <LinearGradient colors={['#c1c1c1', '#c1c1c1', '#c1c1c1']}>
        <Image
        style={estiloLista2.itemFoto}
        source={item.foto} 
        resizeMode='contain'
        />
        </LinearGradient>
        
        </View>
    );
}

export default Lista2;