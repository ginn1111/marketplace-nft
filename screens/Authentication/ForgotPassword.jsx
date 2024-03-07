import { View } from 'react-native';
import { COLORS } from '@constants';
import Authen from './index';
import { BlurInput } from '@components/common/Input';
import { RectButton } from '@components/common/Button';

const Register = (props) => (
  <Authen {...props}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateY: -100 }],
      }}
    >
      <BlurInput
        title="Private key"
        placeholder="private key..."
        blurColor={COLORS.primary}
        placeholderTextColor={COLORS.gray}
      />
      <RectButton text="OK" width="100%" marginTop={32} />
    </View>
  </Authen>
);

export default Register;
