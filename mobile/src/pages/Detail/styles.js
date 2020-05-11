import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5, 
    },
    arrowLeft:{
        marginLeft: 330,
        paddingBottom: 20,

    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,

    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380'

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