import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { CollectionCard, HomeHeader, FocusedStatusBar } from '../components';
import { COLORS, CollectionData } from '../constants';

const Home = () => {
  const [collectionData, setCollectionData] = useState(
    CollectionData.map((collection) => ({
      ...collection,
      nfts: collection?.nfts?.map((nft) => ({
        ...nft,
        owner: `ginn ${nft.id}`,
      })),
    }))
  );

  const handleSearch = (value) => {
    if (value.length === 0) {
      setCollectionData(CollectionData);
    }

    const filteredData = CollectionData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setCollectionData(CollectionData);
    } else {
      setCollectionData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={collectionData}
            renderItem={({ item }) => <CollectionCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
