import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import Colors from '../../constants/Colors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
        }}>
            <Tabs.Screen name="index"
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome5
                            name="search"
                            color={color}
                            size={size}
                        />
                }}/>
            <Tabs.Screen name="wishlist"
                options={{
                    tabBarLabel: 'Wishlists',
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons
                            name="heart-outline"
                            color={color}
                            size={size}
                        />
                }}/>
            <Tabs.Screen name="trips"
                options={{
                    tabBarLabel: 'Trips',
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome5
                            name="airbnb"
                            color={color}
                            size={size}
                        />
                }}/>
            <Tabs.Screen name="inbox"
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name="message-outline"
                            color={color}
                            size={size}
                        />
                }}/>
            <Tabs.Screen name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    headerShown:false,
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons
                            name="person-circle-outline"
                            color={color}
                            size={size}
                        />
                }}/>
        </Tabs>
    )
}

export default Layout

const styles = StyleSheet.create({})