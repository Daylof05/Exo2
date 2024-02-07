import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('ProfileScreen', {name : "Arnold"})}
            />
        </View>
    )
}

export default HomeScreen;