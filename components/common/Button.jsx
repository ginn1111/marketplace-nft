import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants';
import { BlurView } from 'expo-blur';

export const CircleButton = ({ children, imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      {children || (
        <Image
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
      )}
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  className,
  text = 'Detail',
  children,
  leftIcon,
  rightIcon,
  color,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        flexDirection: 'row',
        gap: SIZES.base,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.font,
        ...props,
      }}
      className={className}
      onPress={handlePress}
    >
      {leftIcon}
      {children || (
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: color || COLORS.white,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      )}
      {rightIcon}
    </TouchableOpacity>
  );
};

/**
 *  props object this is props of RectButton
 *  blurProps object his is props of BlurView
 */
export const BlurButton = ({
  actionStyle,
  children,
  blurColor = COLORS.primary,
  blurProps = {
    intensity: 50,
  },
  ...props
}) => (
  <View
    style={{
      backgroundColor: 'transparent',
      ...actionStyle,
    }}
  >
    <BlurView style={{ position: 'relative' }} {...blurProps}>
      <View
        style={{
          backgroundColor: blurColor,
          position: 'absolute',
          zIndex: -1,
          opacity: 0.7,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />
      {children || <RectButton backgroundColor="transparent" {...props} />}
    </BlurView>
  </View>
);
