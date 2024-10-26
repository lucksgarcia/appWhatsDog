import { Tabs } from "expo-router/tabs";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
        return (
        
        <Tabs>
                <Tabs.Screen
                        name="profile"
                        options={{
                        headerShown: false,
                        title: "Meus Dados",
                        tabBarIcon: ({ focused, color, size }) => {

                                if (focused) {
                                return <FontAwesome name="user-circle" color={color} size={size} />
                                }
                                return <FontAwesome name="user" color={color} size={size} />

                                },
                        }}
                />

                <Tabs.Screen
                        name="cadastrados"
                        options={{
                        headerShown: false,
                        title: "Meus Dogs",
                        tabBarIcon: ({ focused, color, size }) => {

                                if (focused) {
                                return <FontAwesome name="vcard" color={color} size={size} />
                                }
                                 return <FontAwesome name="vcard-o" color={color} size={size} />

                                },
                        }}
                />

               
                <Tabs.Screen
                        name="verificaRaca"
                        options={{
                        headerShown: false,
                        title: "Verifica Raça",
                        tabBarIcon: ({ focused, color, size }) => {

                                if (focused) {
                                return <FontAwesome name="bolt" color={color} size={size} />
                                }
                                return <FontAwesome name="paw" color={color} size={size} />
                                },
                        }}
                />

         </Tabs>


        );

}