import React from 'react';

import { OutlineInput } from '@components/common/Input';
import Modal from '@components/common/Modal';

const ChangeNickNameModal = ({ onClose, onUpdate }) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Title title="Change nickname" />
      <OutlineInput text="New nickname" placeholder="Enter new nickname" />
      <Modal.Actions onNegative={onClose} onPositive={onUpdate} />
    </Modal>
  );
};

export default ChangeNickNameModal;
