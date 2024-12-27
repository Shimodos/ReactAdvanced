import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleEditPage.module.scss';
interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  return (
    <div className={classNames(classes.ArticleEditPage, {}, [className])}>ArticleEditPage</div>
  );
};

export default ArticleEditPage;
