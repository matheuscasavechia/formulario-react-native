import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 12
    },
    
    headerTextBold: {
        fontWeight: 'bold'
    },

    funcionariosList:{
        marginTop: 32,
    },

    funcionario:{
        padding: 24,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowRadius: 2.62,
        marginBottom: 12,
    },

    funcionarioName:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        fontWeight: 'bold'
    },

    detailsButton:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
    },

    action:{
        backgroundColor:'#3E50B4',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

});