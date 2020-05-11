import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Funcionario com maior salário <Text style={styles.headerTextBold}>joao</Text>.
                </Text>
            </View> 
             <View style={styles.header}>
                <Text style={styles.headerText}>
                    Funcionario com o menor salário <Text style={styles.headerTextBold}>R$0,00</Text>.
                </Text>
             </View> 
             <View style={styles.header}>
                <Text style={styles.headerText}>
                    Media salarial da empresa <Text style={styles.headerTextBold}>R$0,00</Text>.
                </Text>
            </View> 

            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                style={styles.funcionariosList}
                keyExtractor={funcionario => String(funcionario)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.funcionario}>

                    <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                    <Text style={styles.funcionarioName}><Feather name="user" size={20} color="gray" /> Funcionário1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trashButton} onPress={() => {}}>
                    <Feather name="trash" size={20} color="gray"/>
                    </TouchableOpacity>

                </View>
                )}
            />


        </View>

    );
}