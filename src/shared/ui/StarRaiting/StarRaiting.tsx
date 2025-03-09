import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './StarRaiting.module.scss';
import StarsIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import React, { useState } from 'react';

interface StarRaitingProps {
  className?: string;
  onSelect?: (star: number) => void;
  selectedStars?: number;
  size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRaiting = (props: StarRaitingProps) => {
  const { className, onSelect, selectedStars = 0, size = 30 } = props;

  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (onSelect) {
      onSelect(starsCount);
    }
    setCurrentStarsCount(starsCount);
    setIsSelected(true);
  };

  return (
    <div className={classNames(classes.StarRaiting, {}, [className])}>
      {stars.map((star) => (
        <div key={star} className={classes.star}>
          <Icon
            Svg={StarsIcon}
            key={star}
            className={classNames(classes.starIcon, { [classes.selected]: isSelected }, [
              currentStarsCount >= star ? classes.hovered : classes.normal
            ])}
            width={size}
            height={size}
            onMouseEnter={onHover(star)}
            onMouseLeave={onLeave}
            onClick={onClick(star)}
          />
        </div>
      ))}
    </div>
  );
};
