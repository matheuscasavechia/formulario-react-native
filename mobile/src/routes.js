import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import New from './pages/New';


export default function Routes(){
    return (
        <NavigationContainer>
            
            <AppStack.Navigator>
                <AppStack.Screen name="Funcionarios" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Novo Funcionario" component={New} />
            </AppStack.Navigator>
        
        </NavigationContainer>
    );
}