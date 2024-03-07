import { View, Text } from 'react-native';

import { CircleButton } from '@components/common/Button';
import { CURRENCY, assets, SIZES, COLORS, FONTS } from '@constants';
import { OutlineInput } from '@components/common/Input';
import { useExchange } from '../useActionsSection';
import Modal from '@components/common/Modal';
import { Picker } from '@react-native-picker/picker';

const ExchangeIcon = assets.exchange;

export const TransferModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Title title="Transfer" />
      <OutlineInput text="Address" placeholder="Enter address" />
      <OutlineInput
        text="Amount"
        keyboardType="numeric"
        placeholder="Enter amount"
      />
      <Modal.Actions onNegative={onClose} positiveText="Confirm" />
    </Modal>
  );
};

export const ChangePasswordModal = ({ onClose }) => {
  return (
    <Modal>
      <Modal.Title title="Change Password" />
      <OutlineInput
        text="Old password"
        secureTextEntry
        placeholder="Enter old password"
      />
      <OutlineInput
        text="New password"
        secureTextEntry
        placeholder="Enter new password"
      />
      <OutlineInput
        text="Retype new password"
        secureTextEntry
        placeholder="Retype new password"
      />
      <Modal.Actions onNegative={onClose} />
    </Modal>
  );
};

const ExchangeModalItem = ({
  title,
  inputProps,
  setExchangeIdx,
  exchangeIdx,
}) => {
  return (
    <View>
      <OutlineInput.Label text={title} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 3 }}>
          <OutlineInput
            placeholder="Enter amount"
            keyboardType="numeric"
            {...inputProps}
          />
        </View>
        <Picker
          style={{
            flex: 2,
            marginRight: -SIZES.medium,
          }}
          selectedValue={CURRENCY[exchangeIdx].value}
          onValueChange={(_, index) => setExchangeIdx(index)}
        >
          {CURRENCY.map((currency) => (
            <Picker.Item
              key={currency.value}
              value={currency.value}
              label={currency.label}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export const ExchangeModal = ({ onClose }) => {
  const {
    exchange: { exchangeIdx, receiveIdx },
    setExchangeIdx,
    setReceiveIdx,
    setExchange,
  } = useExchange(CURRENCY.length, { exchangeIdx: 0, receiveIdx: 1 });

  const revertExchangeHandler = () => {
    setExchange({ exchangeIdx: receiveIdx, receiveIdx: exchangeIdx });
  };

  return (
    <Modal>
      <Modal.Title title="Exchange" />
      <ExchangeModalItem
        title="You send"
        setExchangeIdx={setExchangeIdx}
        exchangeIdx={exchangeIdx}
      />
      <View
        style={{
          position: 'relative',
          height: 30,
          alignItems: 'center',
        }}
      >
        <CircleButton
          backgroundColor={COLORS.primary}
          handlePress={revertExchangeHandler}
        >
          <ExchangeIcon fill={COLORS.white} />
        </CircleButton>
      </View>
      <ExchangeModalItem
        title="You get"
        setExchangeIdx={setReceiveIdx}
        exchangeIdx={receiveIdx}
      />
      <Modal.Actions onNegative={onClose} positiveText="Confirm" />
    </Modal>
  );
};
