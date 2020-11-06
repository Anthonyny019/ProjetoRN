import React, { useState } from 'react';
import {ImageBackground, Text, View, TouchableOpacity, } from 'react-native'; 
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirItems = () => {
        navigation.navigate('Items')
    }

    const abrirAlunos = () => {
        navigation.navigate('Alunos')
    }

    return (
        <View style={estiloInicial.container}>
            
            <ImageBackground source={require('../../../assets/imagens/Fundo.jpg')} style={estiloInicial.fundo} >

                <TouchableOpacity onPress={abrirItems}>
                  <ImageBackground source={require('../../../assets/imagens/Items.jpg')} style={estiloInicial.botaoBackground}>
                    <Text style={estiloInicial.botaoTexto}>ITEMS</Text>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirAlunos}>
                   <ImageBackground source={require('../../../assets/imagens/Alunos.jpg')} style={estiloInicial.botaoBackground}>
                    <Text style={estiloInicial.botaoTexto}>ALUNOS</Text>
                   </ImageBackground> 
                </TouchableOpacity>

            </ImageBackground>

            </View>

    )
}
export default Inicial;