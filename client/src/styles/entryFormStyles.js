import { StyleSheet } from 'react-native'

export const entryFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '10%',
        color: 'darkmagenta',

    },
    imputText:{
        fontSize: 16, 
        color: '#8e93a1'  
    },
    input: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
    },
    buttonStyle: {
        backgroundColor: "darkmagenta",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
