import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { COLORS, FONTS, SIZES, assets } from '@constants';
import CollectionAsset from './CollectionAsset';
import { RectButton } from '@components/common/Button';
import withModal from '@hoc/withModal';
import AddCollectionModal from './AddCollectionModal';

const AddIcon = assets.add;

const CollectionSection = ({ collections, setModal }) => {
  const addCollectionHandler = () => {
    setModal({ isOpen: true, Type: AddCollectionModal, metadata: {} });
  };
  return (
    <View
      style={{
        marginTop: SIZES.medium,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: SIZES.medium,
          marginHorizontal: SIZES.small,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.large,
          }}
        >
          My Collections
        </Text>
        <RectButton
          text="Collection"
          leftIcon={<AddIcon fill={COLORS.white} />}
          handlePress={addCollectionHandler}
        />
      </View>
      <FlatList
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={collections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CollectionAsset
              image={item.image}
              name={item.name}
              nfts={item.nfts}
            />
          );
        }}
      />
    </View>
  );
};

export default withModal(CollectionSection);
