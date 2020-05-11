import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const funcionario = route.params.funcionario;

    function navigationBack(){
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity style={styles.arrowLeft} onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#3E50B4"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                
                <Text style={[styles.incidentProperty, {marginTop: 0}]}> NOME </Text>
                <Text style={styles.incidentValue}> {funcionario.nome_funcionario} </Text>
                
                <Text style={styles.incidentProperty}> E-MAIL </Text>
                <Text style={styles.incidentValue}> {funcionario.email_funcionario} </Text>
                
                <Text style={styles.incidentProperty}> SALARIO </Text>
                <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(funcionario.value)} </Text>
                
                <Text style={styles.incidentProperty}> ANTECIPAÇÃO SALARIAL </Text>
                <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(funcionario.value)} </Text>

            </View>

            <View styele={styles.action}>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

//{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(funcionario.value)}