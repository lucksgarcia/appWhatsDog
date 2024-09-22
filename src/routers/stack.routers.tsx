import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator} = createStackNavigator();

import Home from '../screens/home';
import Login from '../screens/login';



    export function UserRouters (){
        return (
            <Navigator>
                <Screen
                    name= 'home'
                    component={Home}
                />
                <Screen
                    name= 'login'
                    component={Login}
                />



            </Navigator>
        )

    }