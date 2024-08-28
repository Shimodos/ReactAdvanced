import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToogleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        className={classes.links}
        onClick={onToogleModal}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToogleModal}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores pariatur
          doloremque neque vel architecto molestias illum, nam cum accusamus quas odio, fugiat,
          distinctio sed autem enim consectetur! Illum, quae?
        </div>
      </Modal>
    </div>
  );
};
