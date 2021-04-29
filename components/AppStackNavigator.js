import React,{ Component } from 'react';
import BookDonateScreen from '../Screens/BookDonateScreen';
import {createStackNavigator} from 'react-navigation-stack';
import RecieverDetailsScreen from '../Screens/RecieverDetailsScreen';


export const AppStackNavigator = createStackNavigator({
    BookDonateList : {
        screen : BookDonateScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    RecieverDetails : {
        screen : RecieverDetailsScreen,
        navigationOptions:{
            headerShown: false
        }
    }

}, 
    {
        initialRouteName : 'BookDonateList'
    }
);