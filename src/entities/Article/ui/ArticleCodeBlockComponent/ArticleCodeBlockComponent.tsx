import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleCodeBlockComponent.module.scss';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'entities/Article/models/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}
export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
