import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';


export default class CustomSideBarMenu extends component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
            </View>   
            <View style={styles.logOutContainer}>
                <TouchableOpacity style={styles.logOutButton}
                onPress = {()=> {
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                }}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}