import { View, Text } from 'react-native';

import { FONTS, SIZES } from '@constants/theme';
import Modal from '@components/common/Modal';
import { OutlineInput } from '@components/common/Input';
import CURRENCY from '@constants/currency';
import useCurrency from '@hooks/useCurrency';
import { Picker } from '@react-native-picker/picker';

const TransactionModal = ({ title, onClose, onConfirm }) => {
  const [currency, setCurrency] = useCurrency();
  return (
    <Modal>
      <Modal.Title title={title} />
      <View>
        <OutlineInput.Label text={title} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 3 }}>
            <OutlineInput keyboardType="numeric" placeholder="Enter amount" />
          </View>
          <Picker
            style={{
              flex: 2,
              marginRight: -SIZES.medium,
            }}
            selectedValue={currency}
            onValueChange={(currency) => setCurrency(currency)}
          >
            {CURRENCY.map((c) => (
              <Picker.Item value={c.value} label={c.label} key={c.label} />
            ))}
          </Picker>
        </View>
      </View>
      <Modal.Actions
        onNegative={onClose}
        positiveText="Confirm"
        onPositive={onConfirm}
      />
    </Modal>
  );
};

export default TransactionModal;
