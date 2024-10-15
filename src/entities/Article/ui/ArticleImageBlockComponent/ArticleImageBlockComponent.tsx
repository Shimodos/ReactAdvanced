import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}
export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
      ArticleImageBlockComponent
    </div>
  );
};
