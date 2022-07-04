import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MenuScreen from "../screens/MenuScreen";
import RecodsScreen from "../screens/RecodsScreen";
import LevelOne from "../screens/Games/LevelOne";
import LevelTwo from "../screens/Games/LevelTwo";
import LevelThree from "../screens/Games/LevelThree";

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Hello!",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login Page",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Register Page",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: "Menu Page",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Recods"
          component={RecodsScreen}
          options={{
            title: "Records Page",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="One"
          component={LevelOne}
          options={{
            title: "Level One",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Two"
          component={LevelTwo}
          options={{
            title: "Level Two",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Three"
          component={LevelThree}
          options={{
            title: "Level Three",
            headerStyle: {
              backgroundColor: "#e46a24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
