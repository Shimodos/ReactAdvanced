import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../../../entities/Article/models/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = ({
  className,
  block
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={classes.img} alt={block.title} />
      {block.title && <Text text={block.title} />}
    </div>
  );
};
