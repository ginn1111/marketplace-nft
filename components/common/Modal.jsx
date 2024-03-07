import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { COLORS, SIZES } from '@constants';
import { FONTS } from '@constants/theme';
import { RectButton } from '@components/common/Button';

const Modal = ({ onClose, children, style }) => {
  const Container = onClose ? TouchableOpacity : View;
  return (
    <Container
      onPress={onClose}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <View
        style={{
          paddingHorizontal: SIZES.medium,
          paddingVertical: SIZES.large,
          borderRadius: SIZES.small,
          backgroundColor: COLORS.white,
          maxWidth: '80%',
          width: 300,
          gap: SIZES.large,
          ...style,
        }}
      >
        {children}
      </View>
    </Container>
  );
};

Modal.Title = ({ title, ...style }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.primary,
        textAlign: 'center',
        ...style,
      }}
    >
      {title}
    </Text>
  );
};

Modal.Actions = ({
  style,
  onNegative,
  positiveText = 'Update',
  negativeText = 'Cancel',
  onPositive,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: SIZES.small,
        ...style,
      }}
    >
      <RectButton
        handlePress={onPositive}
        text={positiveText}
        borderRadius={SIZES.small}
        flex={1}
      />
      <RectButton
        handlePress={onNegative}
        text={negativeText}
        borderRadius={SIZES.small}
        flex={1}
        backgroundColor={COLORS.white}
        color={COLORS.primary}
        borderColor={COLORS.primary}
        borderWidth={1}
      />
    </View>
  );
};

export default Modal;
