import React from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';



function MemberResult({route}){
    const {user} = route.params;
    //console.log(route);
    
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}>Üye Mail: {user.userMail} </Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHomeTown}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'pink',
        textAlign: 'center',
        margin: 20,
        padding:20,
    },

    label:{
       
        fontWeight:'bold',
        fontSize: 20,
        margin: 5,
        
        
    },
    message:{
        
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    }
})

export default MemberResult;