import React,{Component} from 'react';
import {text, View, TouchableOpacity, FlatList, ScrollView, StyleSheet} from 'react-native';
import {Card, Icon, ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '..config.js';
import { ThemeProvider } from '@react-navigation/native';
import MyHeader from '../Components/MyHeader.js'


export default class myBookDonationScreen extends Component{
    constructor(){
        super()
        this.state = {
            donorId: firebase.auth().currentUsers.email,
            donorName: "",
            allDonations : []
        }
        this.requestRef = null
    }
    getAllDonations =()=>{
        this.requestRef = db.collection("all_donations").where("donor_id","==",this.state.userId)
        .onSnapShot((snapshot)=>{
            var allDonations = snapshot.docs.map(document => document.data());
            this.setState({
                allDonations : allDonations,
            });
        })
    }
    
    sendNotification=(bookDetails,requestStatus)=>{
        var requestId = bookDetails.request_id
        var donorId = bookDetails.donor_id
        db.collection("all_notifications")
        .where("request_id","==", requestId)
        .where("donor_id","==",donorId)
        .get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var message = ""
                if(requestStatus === "Book Sent"){
                    message = this.state.donorName + " sent your book"
                }else{
                    message = this.state.donorName + " has shown interest in donating the book"
                }
                db.collection("all_notification").doc(doc.id).update({
                    "message": message,
                    "notification_status": "unread",
                    "data" : firebase.firestore.FieldValue.serverTimestamp(),
                })
            })
        })
    }
    keyExtractor = (item, index) => index.toString()
    
    renderItem = ({ item, i }) => (
        <ListItem 
            key={i} 
            title={item.book_name} 
            subtitle={"Requested By : " + item.requested_by + "\nStatus : " + item.request_status} 
            leftElement={<Icon name="book" type="font-awesome" color='#696969' />}
            titleStyle={{ color: 'black', fontWeight: 'bold' }} 
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#ffff' }}>Send Book</Text>
                </TouchableOpacity>
            }
        bottomDivider
        />
    )
    render(){
        return(
            <View style={{ flex: 1 }}> 
                <MyHeader navigation={this.props.navigation} title="My Donations" /> 
                <View style={{ flex: 1 }}> 
                {
                    this.state.allDonations.length === 0 
                    ?(
                        <View style={styles.subtitle}> 
                            <Text style={{ fontSize: 20 }}>List of all book Donations</Text> 
                        </View>
                     ) 
                    :(
                        <FlatList 
                            keyExtractor={this.keyExtractor} 
                            data={this.state.allDonations} 
                            renderItem={this.renderItem} 
                        />
                    )
                } 
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    button: { 
        width: 100, 
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        shadowColor: "#000", 
        shadowOffset: { 
            width: 0,
            height: 8 
        }, 
        elevation: 16 
        }, 
        subtitle: { 
            flex: 1, 
            fontSize: 20, 
            justifyContent: 'center', 
            alignItems: 'center' 
        } 
})
