import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import { COLORS, SIZES, assets, FONTS } from '@constants';
import { CircleButton, DetailsDesc, FocusedStatusBar } from '@components';
import NFTCard from '@components/NFT/NFTCard';

const CollectionHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Collection = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <FlatList
        numColumns={2}
        horizontal={false}
        data={data.nfts}
        renderItem={({ item }) => <NFTCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <CollectionHeader data={data} navigation={navigation} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.nfts?.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.extraLarge,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  NFTs
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Collection;
