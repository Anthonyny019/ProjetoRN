import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import estiloAlunos from './estiloAlunos';
import Lista2 from '../../components/Lista2/Lista2';

function Alunos({ navigation }) {

    const [alunos, setAlunos] = useState( [
        {
            id: '5',
            titulo: 'Anthony Vitor',
            autor: '2º DS-B',
            anoPublicacao: 'TURMA - A',
            foto: require('../../../assets/itens/Anthony.jpeg'),
        },
        {
            id: '6',
            titulo: 'Breno Florêncio',
            autor: '2º DS-B',
            anoPublicacao: 'TURMA - A',
            foto: require('../../../assets/itens/Breno.jpeg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial');
    }

    return (
        <View style={estiloAlunos.container}>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={alunos}
                renderItem={ ({item}) => <Lista2 data={item} />}
            />
        </View>
    )
}
export default Alunos;