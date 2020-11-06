import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    botaoBackground: {
        width: 140,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        opacity: '97%',
        borderColor: '#000000',
    },
    borda: {
        backgroundColor: '#000000',
        width: '80%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 23,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
        
    },
    botaoContainer: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
      fontSize: 22,
       color: '#ff0000',
    },
});
export default estiloInicial;