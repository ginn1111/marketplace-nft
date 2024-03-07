import { View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import { CircleButton } from '@components';
import { SIZES, assets } from '@constants';
import { CollectionAssetTitle } from '@components/Profile/CollectionSection/CollectionAsset';
import NFTCard from '@components/NFT/NFTCard';

const MyAssetHeader = ({ image, name, amount }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ width: '100%', height: 300 }}>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <CircleButton
        top={SIZES.small}
        left={SIZES.small}
        imgUrl={assets.left}
        handlePress={navigation.goBack}
      />
      <View
        style={{ marginHorizontal: SIZES.small, marginVertical: SIZES.medium }}
      >
        <CollectionAssetTitle name={name} amount={amount ?? 0} />
      </View>
    </>
  );
};

const MyAsset = ({ route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ position: 'relative' }}>
      <FlatList
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data.nfts}
        renderItem={({ item }) => (
          <NFTCard
            image={item.image}
            name={item.name}
            status={item.status}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <MyAssetHeader
            image={data.image}
            name={data.name}
            amount={data.nfts?.length ?? 0}
          />
        }
        contentContainerStyle={{ paddingBottom: SIZES.medium }}
      />
    </SafeAreaView>
  );
};

export default MyAsset;
