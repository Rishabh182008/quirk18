import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import {CustomSideBarMenu} from './CustomSideBarMenu';
import SettingScreen from '../Screens/SettingScreen';
import myBookDonationScreen from '../Screens/myBookDonationScreen';
import NotificationScreen from '../Screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen: AppTabNavigator
    },
    MyDonations : {
        screen : myBookDonationScreen
    },
    Notifications : {
        screen : NotificationScreen
    },
    Setting : {
        screen: SettingScreen
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})
