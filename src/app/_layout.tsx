import { Stack } from "expo-router";


export default function Layout(){

        return(
                <Stack>
                        <Stack.Screen name="index"/>
                        <Stack.Screen name="home"/>
                        <Stack.Screen name="login"/>
                        <Stack.Screen name="newPai"/>
                        <Stack.Screen name="(entrou)"/>
                </Stack>

        )


}