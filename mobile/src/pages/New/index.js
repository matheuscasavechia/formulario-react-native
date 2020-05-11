import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const funcionario = {};

    function salvar(funcionario) {
        if(funcionario.nome_funcionario == undefined || funcionario.email_funcionario == undefined || funcionario.value == undefined){
            return alert('Preencha os campos');
        }else{
        api.post('funcionarios', funcionario );
        navigation.navigate('Funcionarios');
        }
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
                <TextInput style={styles.incidentValue} placeholder="Digite um Nome" onChangeText={text => name(text)}  defaultValue={''} />
                
                <Text style={styles.incidentProperty}> E-MAIL </Text>
                <TextInput style={styles.incidentValue} placeholder="Digite um E-mail" onChangeText={text => email(text)}  defaultValue={''} />
                
                <Text style={styles.incidentProperty}> SALARIO </Text>
                <TextInput style={styles.incidentValue} placeholder="Digite um salario"  onChangeText={text => valor(text)} defaultValue={''} />
            </View>

            <View styele={styles.action}>
                <TouchableOpacity style={styles.action} onPress={() => salvar(funcionario)}>
                    <Text style={styles.actionText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
