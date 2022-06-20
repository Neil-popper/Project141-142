import React from "react";
import HomeScreen from "./screens/Home";
import Popular from "./screens/Popular";
import Reccomended from "./screens/Reccomendation";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTagNavigator} from 'react-navigation-tags'
import {RFValue} from 'react-native-responsive-fontsize'



export default function App() {
  return <appContainer />;
}

const AppTopNavigation=createMaterialTopTagNavigator({
  ReccomendedBooks:{
    screen:Reccomended,
    navigationOptions:{
      tabBarLable:"reccomended",
      tabBarOptions:{tabStyle:{backgroundColor:"Blue"},
      lableStyle:{color:"black"},
      indicatorStyle:{backgroundColor:"Red"}}
    }
  },
  PopularBooks:{
    screen:Popular,
    navigationOptions:{
      tabBarLable:"Popular",
      tabBarOptions:{tabStyle:{backgroundColor:"Blue"},
      lableStyle:{color:"black"},
      indicatorStyle:{backgroundColor:"Red"}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headersShown:false
      }
    },
    AppTopNav:{
      screen:AppTopNavigation,
      navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#fff',
        headerTitle:"Reccomended books",
        headerStyle:{
          backgroundColor:'#t500f9'
        },
        headerTitleStyle:{
          color:'#fff',
          fontWeight:"bold",
          fontSize:RFValue(18)
        }
      }
    }
  },
  {initialRouteName:"Home"}
)
const AppContainer=createAppContainer(AppStackNavigator)





