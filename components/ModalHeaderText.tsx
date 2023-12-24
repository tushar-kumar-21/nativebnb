import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors';

const ModalHeaderText = () => {
    const [active, setActive] = useState(0);
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent:'center', gap:10 }}>
            <TouchableOpacity onPress={() => setActive(0)}>
                <Text style={{fontSize:15,
                color:active === 0 ? '#000' :  Colors.grey,
                textDecorationLine:active === 0 ? 'underline' : 'none'
                }
                }>Stays</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(1)}>
                <Text style={{fontSize:15}}>Experiences</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default ModalHeaderText

const styles = StyleSheet.create({})