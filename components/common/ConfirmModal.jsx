import React from 'react';
import Modal from '@components/common/Modal';

const ConfirmModal = ({
  title = 'Are you sure?',
  positiveText = 'OK',
  negativeText = 'Cancel',
  onClose,
  onPositive,
  children,
}) => {
  return (
    <Modal>
      <Modal.Title title={title} />
      {children}
      <Modal.Actions
        positiveText={positiveText}
        negativeText={negativeText}
        onNegative={onClose}
        onPositive={onPositive}
      />
    </Modal>
  );
};

export default ConfirmModal;
