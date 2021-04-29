import react from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../Screens/BookDonateScreen';
import BookRequestScreen from '../Screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        Screen: BookDonateScreen,
        navigationOptions :{
            tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Donate Books",
        }
    },
    RequestBook : {
        Screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-book.png")} style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Book Request",
        }
    },
    
})
