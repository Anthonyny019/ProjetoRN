import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {
        flex:1,
        backgroundColor: '#d98080',
    },
    itemTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        color: '#000000',
    },
    itemSubTitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000000',
    },
    itemFoto:{
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 2
    },
});

export default estiloLista;