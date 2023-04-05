import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert } from "react-native";

//import Input from '../components/Input';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';


function MemberSign({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userSurname, setSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHomeTown, setUserHomeTown] = useState(null);

    function handleSubmit() {
        //boş değer girildiğinde alert veren fonksiyon.
        if (!userName || !userSurname || !userAge || !userMail || !userHomeTown) {
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHomeTown,
        };

        //console.log(user);
        navigation.navigate('MemberResultScreen', {user});
    }
    return (
        <SafeAreaView>
            <Input
                label="Üye Adı"
                placeholder="Üye ismini giriniz..."
                onChangeText={setUserName} />
            <Input
                label="Üye Soyadı"
                placeholder="Üyenin soyadını giriniz..."
                onChangeText={setSurname} />
            <Input
                label="Üye Yaşı"
                placeholder="Üyenin yaşını giriniz..."
                onChangeText={setUserAge} />
            <Input
                label="Üye E-posta"
                placeholder="Üyenin e-posta adresini giriniz..."
                onChangeText={setUserMail} />
            <Input
                label="Üye Memleketi"
                placeholder="Üyenin memleketini giriniz..." 
                onChangeText={setUserHomeTown}/>
            <Button text="Kaydı Tamamla"
                onPress={handleSubmit}/>
        </SafeAreaView>
    );
}

export default MemberSign;