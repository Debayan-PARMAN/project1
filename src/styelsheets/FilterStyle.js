import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default FilterStyle = StyleSheet.create({
     mainWrapper: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingLeft: 2,
          paddingRight: 2,
     },
     topContainer: {
          height: 40
     },
     resetallContainer: {
          height: 30,
          flexDirection: 'row'
     },
     resetall: {
          width: 90,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
     },
     resetallText: {
          fontSize: 15,
          color: '#972493',
     },
     resetallContainerText: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#707070',
     },
     filter: {
          width: 170,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
     },
     cross: {
          width: 85,
          height: 30,
          alignItems: 'flex-end',
     },
     crossImage: {
          width: 18,
          height: 18,
          marginTop: 5,
          marginEnd: 5
     },
     boxSectionContainer: {
          flex: 1,
          height: 71,
          backgroundColor: '#fff',
          marginBottom: 5,
     },
     boxSectionContainerText: {
          fontSize: 14,
          color: '#707070',
          padding: 4,
     },
     boxSection: {
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#972493',
     },
     FirstThreebox: {
          width: 87,
          height: 43,
          justifyContent: 'center',
          alignItems: 'center',
          borderEndWidth: 1,
          borderColor: '#972493'
     },
     FirstThreebox1: {
          width: 87,
          height: 43,
          justifyContent: 'center',
          alignItems: 'center',
          borderEndWidth: 1,
          borderColor: '#972493',
          backgroundColor: '#972493'
     },
     hoverboxText: {
          fontSize: 14,
          color: '#fff',
     },
     boxImageContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 85,
          marginTop: 1,
          flexDirection: 'row'
     },
     boxImage: {
          width: 15, height: 15,
          marginTop: 1,
     },
     boxText: {
          fontSize: 14,
          textAlign: 'center',
          color: '#972493',
     },
     Lastbox: {
          width: 87,
          height: 43,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#972493'
     },
     Lastbox1: {
          width: 87,
          height: 43,
          justifyContent: 'center',
          alignItems: 'center',
          
     },
     CheckBoxContainer: {
          width: 20,
          height: 20,
          justifyContent: 'center',
     },
     AfterCheckBoxContainer: {
          width: 65,
          height: 20,
          marginLeft: 7,
          justifyContent: 'center',
     },
     ApplyFilterContainer: {
          width: 400,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#707070',
     },
     ApplyFilterText: {
          fontSize: 15,
          color: '#fff',
          padding: 4,
     },


});