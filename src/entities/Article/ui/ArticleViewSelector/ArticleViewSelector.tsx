import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleViewSelector.module.scss';
import { ArticleView } from 'entities/Article/models/types/article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onChangeView?: (view: ArticleView) => void;
}

const viewTupes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon
  },
  {
    view: ArticleView.GRID,
    icon: TileIcon
  }
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onChangeView } = props;

  const onClick = (newView: ArticleView) => {
    return () => {
      onChangeView?.(newView);
    };
  };

  return (
    <div className={classNames(classes.ArticleViewSelector, {}, [className])}>
      {viewTupes.map((viewType) => (
        <Button theme={ThemeButton.CLEAR} key={viewType.view} onClick={onClick(viewType.view)}>
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [classes.noSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
};
