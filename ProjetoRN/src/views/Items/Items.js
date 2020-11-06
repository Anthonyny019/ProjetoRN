import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloItems from './estiloItems';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Items({ navigation }) {

    const [items, setItems] = useState( [
        {
            id: '1',
            titulo: 'O ATIRADOR (2018)',
            autor: '3 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
          
            foto: require('../../../assets/itens/oatirador.jpg'),
        },
        {
            id: '2',
            titulo: 'THE WALKING DEAD (2010)',
            autor: '10 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/twd.jpg'),
        },
        {
            id: '3',
            titulo: 'BREAKING BAD (2008)',
            autor: '5 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/breakingbad.jpg'),
        },
        {
            id: '4',
            titulo: 'PEAKY BLINDERS (2013)',
            autor: '5 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/peakyblinders.jpg'),
        },
         {
            id: '5',
            titulo: 'LA CASA DE PAPEL (2017)',
            autor: '4 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/lacasa.jpg'),
        },
         {
            id: '6',
            titulo: 'BROOKLYN NINE-NINE (2013)',
            autor: '7 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/b99.jpg'),
        },
        {
            id: '7',
            titulo: ' E L I T Ǝ (2018)',
            autor: '3 TEMPORADAS ATÉ O MOMENTO',
            anoPublicacao: '25/10/20',
            foto: require('../../../assets/itens/elite.jpg'),
        }
       
        ] );
        
        
    const voltar = () => {
        navigation.navigate('Items')
    }

    return (
        <View style={estiloItems.container}>
            
    
            
          
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={items}
                renderItem={ ({item}) => <Lista data={item} />}
        />

        </View>
    )
}

export default Items;

