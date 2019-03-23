import { StyleSheet } from 'react-native';
import styleConstants from '../constants';
import { italic } from 'ansi-colors';

export const TextInputStyles = StyleSheet.create({
    font: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold',
    },
    textInputfield: {
        height: 35,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});