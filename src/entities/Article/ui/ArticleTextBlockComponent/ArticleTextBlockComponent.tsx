import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}
export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
