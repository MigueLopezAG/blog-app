import { StyleSheet } from 'react-native'

export const entryListStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkmagenta',
      padding: 16,
    },
    itemContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'darkmagenta',
      marginBottom: 8,
    },
    author: {
      fontSize: 14,
      color: 'darkmagenta',
      marginBottom: 8,
    },
    date: {
      fontSize: 12,
      color: 'darkmagenta',
      marginBottom: 8,
    },
    content: {
      fontSize: 16,
      color: 'darkmagenta',
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
    },
    searchInput: {
      borderBottomWidth: 0.7,
      height: 48,
      borderBottomColor: "#8e93a1",
      backgroundColor: 'white'
    }
  });