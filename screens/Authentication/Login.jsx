import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES } from '@constants';
import { BlurInput } from '@components/common/Input';
import { RectButton } from '@components';
import Authen from './index';
import { ScreenName } from '@constants';

const Login = (props) => {
  const navigation = useNavigation();

  return (
    <Authen {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BlurInput
          title="Address"
          placeholder="address..."
          blurColor={COLORS.primary}
          placeholderTextColor={COLORS.gray}
        />
        <BlurInput
          containerStyle={{ marginVertical: SIZES.extraLarge }}
          title="Password"
          placeholder="password..."
          secureTextEntry
          placeholderTextColor={COLORS.gray}
          blurColor={COLORS.primary}
        />
        <RectButton
          text="OK"
          width="100%"
          marginTop={12}
          handlePress={() => navigation.navigate(ScreenName.Home)}
        />
      </View>
    </Authen>
  );
};

export default Login;
