import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SIZES, COLORS, assets } from '@constants';
import withModal from '@hoc/withModal';
import ChangeNickNameModal from './ChangeNickNameModal';

const EditIcon = assets.edit;
const CopyIcon = assets.copy;

const NameAndAddress = ({ setModal }) => {
  const changeNickNameHandler = () => {
    setModal({ isOpen: true, Type: ChangeNickNameModal });
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.container}>
        <Text
          style={{ fontSize: SIZES.extraLarge, fontWeight: 'bold' }}
          numberOfLines={1}
        >
          Ginn
        </Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={changeNickNameHandler}
        >
          <EditIcon fill={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.address} numberOfLines={1}>
          0x3rf5c3rf5c50rf5c50
        </Text>
        <TouchableOpacity style={styles.touchable}>
          <CopyIcon fill={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SIZES.base / 2,
    alignItems: 'center',
  },
  address: {
    fontSize: SIZES.font,
    color: COLORS.white,
    width: 130,
    paddingVertical: SIZES.base / 2,
    paddingHorizontal: SIZES.base,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
  },
  touchable: {
    padding: SIZES.base / 2,
  },
});

export default withModal(NameAndAddress);
