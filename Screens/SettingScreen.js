import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import {component} from 'react';
import {TextComponent} from 'react-native';


export default class SettingScreen extends Component{
    render(){
        return(
           <View style={styles.container} >
             <MyHeader title="Settings" navigation={this.props.navigation}/>
             <View style={styles.formContainer}>
                <TextInput>
                    style={styles.formTextInput}
                    placeholder ={"First Name"}
                    maxLength ={8}
                    onChangeText={(text)=>{
                        this.setState({
                            firstName: text
                        })
                    }}
                    value ={this.state.firstName}
                </TextInput>
                <TextInput>
                    style={styles.formTextInput}
                    placeholder ={"Last Name"}
                    maxLength ={8}
                    onChangeText={(text) => {
                        this.setState({
                            lastName: text
                        })
                    }}
                    value ={this.state.lastName}
                </TextInput>
                <TextInput>
                    style={styles.formTextInput}
                    placeholder ={"Contact"}
                    maxLength ={10}
                    keyboardType={'numeric'}
                    onChangeText={(text) => {
                        this.setState({
                            contact: text
                        })
                    }}
                    value ={this.state.contact}
                </TextInput>
                <TextInput>
                    style={styles.formTextInput}
                    placeholder ={"Address"}
                    multiline= true
                    onChangeText={(text) => {
                        this.setState({
                            address: text
                        })
                    }}
                    value ={this.state.address}
                </TextInput>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                       this.updateUserDetails()
                    }}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}