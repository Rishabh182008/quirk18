import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

import db from '../config';
import { render } from 'react-dom';

export default class NotificationScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            userId : firebase.auth().currentUser.email,
            allNotifications : []
     };

        this.notificationRef = null
    }

    getNotifications=()=>{
        this.requestRef = db.collection("all_notification")
        .where("notification_status", "==", "unread")
        .where("targeted_user_id", '==', this.state.userId)
        .onSnapshot((snapshot)=>{
            var allNotification = []
            snapshot.docs.map((doc)=>{
                var notification = doc.data()
                notification["doc_id"] = doc.id
                allNotification.push(notification)
            });
            this.setState({
                allNotifications : allNotifications
        }); 
        })
    }

    componentDidMount(){
        this.getNotifications()
    }

    componentWillUnmount(){
        this.notificationRef()
    }

    keyExtractor = (item, index) => index.tostring()

    renderItems = ({item,index}) =>{
        return (
            <ListItem
                key={index}
                leftElement={<Icon name="book" type="font-awesome" color='#696969'/>}
                title={item.book_name}
                titleStyle={{color: 'black', fontweight: 'bold'}}
                subtitle={item.message}
                bottomDivider
            />
        )
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <View style={{flex:0.1}}>
                    <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
                </View>
                <View style={{flex:0.9}}>
                    this.state.allNotification.lenght === 0
                    ?(
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontsize:25}}>You have no notifications</Text>
                        </View>
                    )
                    :(
                        <FlatList
                         keyExtractor={this.keyExtractor}
                         data={this.state.allNotification}
                         renderItem={this.renderItem}
                        />
                    )
                </View>
            </View>
        )
    }
}

const styles = StylesSheet.create({
    container : {
        flex : 1
    }
})