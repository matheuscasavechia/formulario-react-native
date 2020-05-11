import React, { useState,useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(funcionario) {
        navigation.navigate('Detail', { funcionario } );
    }

    async function loadFuncionarios(){
        if (loading){
            return;
        }

        if (total > 0 && funcionarios.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('funcionarios',{
            params:{ page }
        });
        setFuncionarios([...funcionarios, ...response.data]);
        setTotal(response.headers['total-funcionarios'])
        setPage(page + 1);
        setLoading(false);

    }

    useEffect(() => {
        loadFuncionarios();
    }, []);

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
                data={funcionarios}
                style={styles.funcionariosList}
                keyExtractor={funcionario => String(funcionario.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={ loadFuncionarios}
                onEndReachedThreshold={0.2}
                renderItem={({item: funcionario}) => (
                    <View style={styles.funcionario}>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(funcionario)}>
                    <Text style={styles.funcionarioName}><Feather name="user" size={20} color="gray" /> {funcionario.nome_funcionario} </Text>
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