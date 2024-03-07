import React from 'react';
import { View } from 'react-native';
import Modal from '@components/common/Modal';
import { OutlineInput } from '@components/common/Input';
import { assets, COLORS, SIZES } from '@constants';

const PercentIcon = assets.percent;

const AddCollectionModal = ({
  title = 'New collection',
  onClose,
  onConfirm,
  isUpdate = false,
}) => {
  return (
    <Modal>
      <Modal.Title title={title} />
      <OutlineInput
        text="Collection name"
        placeholder="Enter collection name"
      />
      <View>
        <OutlineInput.Label text="Creator earning" />
        <View style={{ position: 'relative' }}>
          <OutlineInput
            placeholder="Enter a percent"
            keyboardType="numeric"
            editable={!isUpdate}
            selectTextOnFocus={!isUpdate}
          />
          <View
            style={{
              position: 'absolute',
              top: 1,
              bottom: 1,
              right: 1,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.small,
              justifyContent: 'center',
              paddingHorizontal: SIZES.base / 2,
            }}
          >
            <PercentIcon fill={COLORS.white} />
          </View>
        </View>
      </View>
      <OutlineInput
        numberOfLines={3}
        text="Description"
        placeholder="Enter description"
      />
      <Modal.Actions
        positiveText="Save"
        onNegative={onClose}
        onPositive={onConfirm}
      />
    </Modal>
  );
};

export default AddCollectionModal;
