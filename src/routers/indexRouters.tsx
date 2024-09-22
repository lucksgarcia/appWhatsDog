import {NavigationContainer} from '@react-navigation/native';
import {UserRouters} from './stack.routers'



export function Routers (){
    return(

        <NavigationContainer>
            <UserRouters/>
        </NavigationContainer>


    )


}