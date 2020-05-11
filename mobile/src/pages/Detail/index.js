import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';


export default function Detail() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#3E50B4"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.funcionarioName}> Funcionário1 </Text>
                <Text style={styles.funcionarioSalario}> R$1200,00 </Text>
                <Text style={styles.funcionarioName}> funcionario1@email.com </Text>
            </View>

        </View>

    );
}