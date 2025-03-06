import React, { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './LoginModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(classes.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSucces={onClose} />
      </Suspense>
    </Modal>
  );
};
