import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { screenWidth, SIZES, SHADOWS, ScreenName } from '@constants';
import { Text, View, Image } from 'react-native';
import { NFTTitle } from '@components/NFT/SubInfo';

export const CollectionAssetTitle = ({ name, amount }) => {
  return (
    <>
      <NFTTitle title={name} titleSize={SIZES.large} />
      <Text style={{ textAlign: 'right', marginTop: SIZES.base }}>
        {amount > 1 ? `${amount} NFTs` : `${amount} NFT`}
      </Text>
    </>
  );
};

const CollectionAsset = ({ name, image, amount = 0, nfts }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ScreenName.MyAsset, { data: { name, image, nfts } })
      }
      style={{
        maxWidth: 190,
        width: (screenWidth - SIZES.base * 4) / 2,
        marginHorizontal: SIZES.base,
        borderRadius: SIZES.base,
        overflow: 'hidden',
        marginBottom: SIZES.medium,
        ...SHADOWS.dark,
      }}
    >
      <View>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: '100%', height: 190 }}
        />
      </View>
      <View
        style={{
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.medium,
          backgroundColor: '#fff',
        }}
      >
        <CollectionAssetTitle name={name} amount={nfts?.length ?? 0} />
      </View>
    </TouchableOpacity>
  );
};

export default CollectionAsset;
