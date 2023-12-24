import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useReducer, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import Listings from './Listings';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    listings: any[];
    category: string;
    refresh: number;
}

export default function ListingBottomSheet({ listings, category }: Props) {
    const [refresh, setRefresh] = useState(0)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '100%'], []);
    const showMap = () => {
        bottomSheetRef.current?.collapse()
        setRefresh(refresh+1)
    }
    return (
        <BottomSheet ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}>
            <View style={{ flex: 1 }}>
                <Listings listings={listings} category={category} refresh={refresh} />
                <View style={styles.absoluteBtn}>
                    <TouchableOpacity onPress={showMap} style={styles.btn}>
                        <Text style={{ color: '#fff' }}>Map</Text>
                        <Ionicons name='map' size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    absoluteBtn: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: Colors.dark,
        padding: 16,
        height: 50,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    sheetContainer: {
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    }
})