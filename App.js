import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Cart from "./screens/cart";
import Product from "./screens/product";
import Walkthrough from "./screens/walkthrough";
import Products from "./screens/products";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
                <Stack.Screen name="Products" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
