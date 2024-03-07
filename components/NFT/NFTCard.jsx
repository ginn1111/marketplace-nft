import { StyleSheet, Text, View, Image } from 'react-native';

import { RectButton } from '@components/common/Button';
import { NFTStatus, SHADOWS, SIZES, screenWidth, FONTS } from '@constants';
import { EthPrice, NFTTitle } from '@components/NFT/SubInfo';
import withModal from '@hoc/withModal';
import ListingModal from './ListingModal';
import ConfirmModal from '@components/common/ConfirmModal';

const NFTCard = ({
  image,
  name,
  price,
  owner,
  status = NFTStatus.Listing,
  setModal,
}) => {
  const listingHandler = () => {
    setModal({ isOpen: true, Type: ListingModal });
  };
  const cancelListingHandler = () => {
    setModal({
      isOpen: true,
      Type: ConfirmModal,
      metadata: {
        children: <Text style={styles.cancelText}>Cancel this NFT?</Text>,
      },
    });
  };
  return (
    <View
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
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.medium,
          backgroundColor: '#fff',
        }}
      >
        <NFTTitle title={name} subTitle={owner} />
        <View
          style={{
            marginTop: SIZES.medium,
            marginBottom: SIZES.base / 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 3 }}>
            <EthPrice price={price} />
          </View>
          <RectButton
            handlePress={
              status === NFTStatus.Listing
                ? cancelListingHandler
                : listingHandler
            }
            flex={2}
            paddingVertical={SIZES.base}
            paddingHorizontal={2}
            fontSize={SIZES.small}
            text={status === NFTStatus.InStock ? 'Listing' : 'Cancel'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
  },
});

export default withModal(NFTCard);
