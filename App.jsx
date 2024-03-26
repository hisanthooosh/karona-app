
import Default from "./screens/Default"

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loginpage from "./screens/Loginpage";

import Signup from "./screens/Signup";

import Reg from "./screens/Reg";

import Verifyemail from "./screens/Verifyemail";

import Forgot from "./screens/Forgot";

import Home from "./screens/Home";

import Profile from "./screens/Profile";

import Search from "./screens/Search";

import Notification from "./screens/Notification";

import Chat from "./screens/chat";

import Edit from "./screens/Edit";

import Settingspage from "./screens/Settingspage";

import Check from "./screens/Check";

import Video from "./screens/Video";


function App() {

  const stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <stack.Navigator initialRouteName="Video" screenOptions={{ headerShown: false }} >

        <stack.Screen name='Default' component={Default} />

        <stack.Screen name='Loginpage' component={Loginpage} />

        <stack.Screen name='Signup' component={Signup} /> 

        <stack.Screen name='Reg' component={Reg} />

        <stack.Screen name='Verifyemail' component={Verifyemail} />

        <stack.Screen name='Forgot' component={Forgot} />

        <stack.Screen name='Home' component={Home} />

        <stack.Screen name='Profile' component={Profile} />

        <stack.Screen name='Search' component={Search} />

        <stack.Screen name='Notification' component={Notification} />

        <stack.Screen name='Chat' component={Chat} />

        <stack.Screen name='Edit' component={Edit} />

        <stack.Screen name='Settingspage' component={Settingspage} />  

        <stack.Screen name='Video' component={Video} /> 

        <stack.Screen name='Check' component={Check} /> 

      </stack.Navigator>

    </NavigationContainer>

  )

}

export default App
