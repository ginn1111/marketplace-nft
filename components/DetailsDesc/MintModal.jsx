import { View, Text } from 'react-native';
import React from 'react';
import Modal from '@components/common/Modal';
import { OutlineInput } from '@components/common/Input';

const MintModal = ({ onClose, onSave }) => {
  return (
    <Modal>
      <Modal.Title title="Mint" />
      <OutlineInput text="NFT name" placeholder="Enter NFT name" />
      <OutlineInput text="Description" placeholder="Enter description" />
      <Modal.Actions
        onNegative={onClose}
        onPositive={onSave}
        positiveText="Save"
      />
    </Modal>
  );
};

export default MintModal;
