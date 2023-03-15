import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../../constants/colors";
import { Items } from "../../constants/dummyData";
import { ProductCard } from "../../components";

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [accessory, setAccessory] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getDataFromDB();
        });
        return unsubscribe;
    }, [navigation]);

    const getDataFromDB = () => {
        let productList = [];
        let accessoryList = [];
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category === "product") {
                productList.push(Items[index]);
            } else if (Items[index].category === "accessory") {
                accessoryList.push(Items[index]);
            }
        }
        setProducts(productList);
        setAccessory(accessoryList);
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLOURS.white}
                barStyle="dark-content"
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Entypo name="shopping-bag" style={styles.bag} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoContainer}>
                        <Text style={styles.logo}>Ben's Store</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cart")}
                    >
                        <MaterialCommunityIcons
                            name="cart"
                            style={styles.cart}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.greeting}>
                    <Text style={styles.title}>Welcome Shop & Service</Text>
                    <Text style={styles.subTitle}>
                        This shop offers both products and services
                    </Text>
                </View>
                <View style={{ padding: 16 }}>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.title1}>Products</Text>
                            <Text style={styles.count}>41</Text>
                        </View>
                        <Text style={styles.see}>See all</Text>
                    </View>
                    <View style={styles.products}>
                        {products.map((data) => {
                            return (
                                <ProductCard
                                    key={data.id}
                                    data={data}
                                    navigation={navigation}
                                />
                            );
                        })}
                    </View>
                </View>
                <View style={{ padding: 16 }}>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.title1}>Accessories</Text>
                            <Text style={styles.count}>78</Text>
                        </View>
                        <Text style={styles.see}>See all</Text>
                    </View>
                    <View style={styles.products}>
                        {accessory.map((data) => {
                            return (
                                <ProductCard
                                    key={data.id}
                                    data={data}
                                    navigation={navigation}
                                />
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    greeting: {
        marginBottom: 10,
        padding: 16,
    },
    bag: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
    },
    cart: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLOURS.backgroundLight,
    },
    title: {
        fontSize: 26,
        color: COLOURS.black,
        fontWeight: "500",
        letterSpacing: 1,
        marginBottom: 10,
    },
    subTitle: {
        fontWeight: "400",
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 24,
        color: COLOURS.black,
    },
    logoContainer: {
        color: COLOURS.black,
        backgroundColor: COLOURS.backgroundDark,
        textAlign: "center",
        borderRadius: 20,
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        color: COLOURS.white,
    },
    title1: {
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: "500",
        letterSpacing: 1,
    },
    count: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: "400",
        opacity: 0.5,
        marginLeft: 10,
    },
    see: {
        fontSize: 14,
        color: COLOURS.blue,
        fontWeight: "400",
    },
    products: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
});

export default Home;
