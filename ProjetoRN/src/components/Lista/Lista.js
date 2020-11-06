import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>

        <LinearGradient colors={['#e74848', '#e74848', '#e74848']}>
        <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
        </LinearGradient>
        <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>

        <LinearGradient colors={['#c1c1c1', '#c1c1c1', '#c1c1c1']}>
        <Image
        style={estiloLista.itemFoto}
        source={item.foto} 
        resizeMode='contain'
        />
        </LinearGradient>
        
        </View>
    );
}

export default Lista;