import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import ExploreHeaders from '../../components/ExploreHeaders';
import Listings from '../../components/Listings';
import listingsData from "../../assets/data/airbnb-listings.json";
import ListingsMap from '../../components/ListingsMap';
import listingsDataGeo from '../../assets/data/airbnb-listings.geo.json';
import ListingBottomSheet from '../../components/ListingBottomSheet';

const index = () => {
  const [category, setCategory] = useState('Tiny homes')
  const items = useMemo(()=> listingsData as any,[]);

  const onDataChanged = (category : string) => {
    // console.log('Changed', items);  
    setCategory(category)
  }

  return (
    <View style={{flex:1}}>
      <Stack.Screen options={{
        header: () => <ExploreHeaders onCategoryChanged={onDataChanged} />
      }} />
      {/* <Listings listing={items} category={category}/> */}
       <ListingsMap listings={listingsDataGeo} />
      <ListingBottomSheet listings={items} category={category} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})