import { Stack } from "expo-router";


export default function Layout(){

        return(
                <Stack>
                        <Stack.Screen name="index"/>
                        <Stack.Screen name="home"/>
                        <Stack.Screen name="login"/>
                        <Stack.Screen name="Pai"/>
                        <Stack.Screen name="(entrou)"/>
                        <Stack.Screen 
                                name="(entrou)/profile"
                                options={{headerTintColor:'blue'}}
                        />
                        <Stack.Screen 
                                name="(entrou)/verificaRaca"
                                options={{headerTintColor:'blue'}}
                        />

                        <Stack.Screen 
                                name="(entrou)/newDog"
                                options={{headerTintColor:'blue'}}
                        />
                        
                        <Stack.Screen 
                                name="(entrou)/cadastrados"
                                options={{headerTintColor:'blue'}}
                        />
                        <Stack.Screen name="(entrou)/pegaImg"/>
                </Stack>

        )


}