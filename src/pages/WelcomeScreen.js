import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Buttom from '../components/Button';

function Welcome({navigation}){
    
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Buttom text='Üye Kaydı Oluştur' onPress={goToMemberSign}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        //alignItems: 'center',

    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    }
})

export default Welcome;

