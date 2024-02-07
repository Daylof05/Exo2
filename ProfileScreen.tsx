import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native' 

const ProfileScreen: React.FC = (/*{route, navigation}*/) => {
    const route = useRoute();
    const { name } = route.params as {name: string};
    console.log (name);
    return(
        <View>
            <Text>ProfileScreen</Text>
            <Text>Name: {name}</Text>
        </View>
    )
}

export default ProfileScreen;