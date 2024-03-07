import { View } from 'react-native';
import { COLORS } from '@constants';
import Authen from './index';
import { BlurInput } from '@components/common/Input';
import { RectButton } from '@components/common/Button';

const PasswordInputField = ({ style, ...props }) => (
  <BlurInput
    containerStyle={style}
    blurColor={COLORS.primary}
    placeholderTextColor={COLORS.gray}
    secureTextEntry
    {...props}
  />
);

const Register = (props) => (
  <Authen {...props}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PasswordInputField title="Password" placeholder="password..." />
      <PasswordInputField
        title="Retype Password"
        placeholder="retype password..."
        style={{ marginTop: 20 }}
      />
      <RectButton text="OK" width="100%" marginTop={32} />
    </View>
  </Authen>
);

export default Register;
