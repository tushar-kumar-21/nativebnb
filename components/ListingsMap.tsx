import { defaultStyles } from '../constants/Styles';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Platform, PermissionsAndroid } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service'

interface Props {
    listings: any;
}

const ListingsMap = ({ listings }: Props) => {

    useEffect(() => {
        Geolocation.setRNConfiguration({ debug: true });

        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then((granted) => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                    // Check if Geolocation is available
                    // if (Geolocation) {
                    //     Geolocation.getCurrentPosition(
                    //         (position) => {
                    //             console.log('Current position:', position);
                    //         },
                    //         (error) => {
                    //             console.error('Error getting location:', error);
                    //         },
                    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    //     );
                    // } else {
                    //     console.error('Geolocation module is not available');
                    // }
                } else {
                    console.log('Location permission denied');
                }
            });
        } else {
            // For iOS, you may use a different method to request permissions
        }        
    }, [Geolocation]);


    return (
        <View>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: 37.33,
                    longitude: -122,
                    latitudeDelta: 9,
                    longitudeDelta: 9,
                }}
            />
        </View>
    )
}

export default ListingsMap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    }
})