import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CadastrarScreen } from "../screens/CadastrarScreen";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicial" component={LoginScreen} options={{
                headerShown: false,
                title: "Tela inicial Feliz",
            }} />

            <Stack.Screen name="HomeNavigation" component={TabNavigation}
                options={{
                    headerShown: false,
                    title: "Tela inicial Feliz",
                }} />

            <Stack.Screen name="Cadastrar" component={CadastrarScreen}
                options={{
                    headerShown: false,
                    title: "Tela inicial Feliz",
                }} />
        </Stack.Navigator>
    );

};

const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialComunityIcons name="home" color={color} size={26} />),
                }}

            />

            <Tab.Screen name="Home2" component={HomeScreen} />
            <Tab.Screen name="home3" component={HomeScreen} />
        </Tab.Navigator>
    );
};