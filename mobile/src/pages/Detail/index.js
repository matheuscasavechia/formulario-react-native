import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const funcionario = route.params.funcionario;

    function atuliazar(funcionario) {
        api.put('funcionarios', funcionario );
        navigation.navigate('Funcionarios');
    }

    function name(text){  
      funcionario.nome_funcionario = text;

    }

    function email(text){  
        funcionario.email_funcionario = text;
      }

    function valor(text){
        funcionario.value = text;
    }
    
    return(
        <View style={styles.container}>

            <View style={styles.incident}>
                
                <Text style={[styles.incidentProperty, {marginTop: 0}]}> NOME </Text>
                <TextInput style={styles.incidentValue} placeholder="Digite um Nome" onChangeText={text => name(text)}  defaultValue={funcionario.nome_funcionario} />
                
                <Text style={styles.incidentProperty}> E-MAIL </Text>
                <TextInput style={styles.incidentValue} placeholder="Digite um E-mail" onChangeText={text => email(text)}  defaultValue={funcionario.email_funcionario} />
                
                <Text style={styles.incidentProperty}> SALARIO </Text>
                <TextInput style={styles.incidentValue} placeholder="Digite um salario"  onChangeText={text => valor(text)} defaultValue={funcionario.value} />
                
                <Text style={styles.incidentProperty}> ANTECIPAÇÃO SALARIAL </Text>
                <Text style={styles.incidentValue}> {(funcionario.value)*0.4} </Text>

            </View>

            <View styele={styles.action}>
                <TouchableOpacity style={styles.action} onPress={() => atuliazar(funcionario)}>
                    <Text style={styles.actionText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
