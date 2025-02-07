import React from "react";
import { StyleSheet, Text, View, TextInput, Image, RefreshControl, ScrollView, StatusBar } from "react-native";
import { style } from "./style";

const Lab4 = () => {
    const [bartStyle, setBartStyle] = React.useState("light-content");
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setBartStyle(prev => (prev === "light-content" ? "dark-content" : "light-content"));
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        
        <ScrollView
            style={style.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <StatusBar barStyle={bartStyle} translucent backgroundColor="transparent" />
            <Text style={style.text}>Kéo xuống để đổi màu statusbar</Text>
        </ScrollView>
    );
};

export default Lab4;


