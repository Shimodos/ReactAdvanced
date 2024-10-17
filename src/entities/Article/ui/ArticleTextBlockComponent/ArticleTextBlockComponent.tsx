import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from 'entities/Article/models/types/article';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={classes.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text size={TextSize.M} key={index} text={paragraph} className={classes.paragraph} />
      ))}
    </div>
  );
};
