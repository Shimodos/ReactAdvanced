import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRaiting } from '@/shared/ui/StarRaiting/StarRaiting';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;

  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}
export const RatingCard = (props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }

      setIsModalOpen(true);
    },
    [hasFeedback, onAccept]
  );

  const onSendHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const onCancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap={'16'} align={'center'} justify={'center'}>
      <Text title={starsCount ? t('ratingTitle') : title} />
      <Input placeholder={t('Your feedback')} value={feedback} onChange={setFeedback} />
      <HStack max gap={'16'} justify={'end'}>
        <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelHandler}>
          {t('Cancel')}
        </Button>
        <Button onClick={onSendHandler}>{t('Send')}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(classes.RatingCard, {}, [className])}>
      <VStack gap={'8'} align={'center'} justify={'center'}>
        <Text title={starsCount ? t('ratingTitle') : title} />
        <StarRaiting selectedStars={starsCount} size={30} onSelect={onSelectStars} />

        <BrowserView>
          <Modal
            isOpen={isModalOpen}
            lazy
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
            {modalContent}
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
};
