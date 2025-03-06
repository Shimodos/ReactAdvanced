import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ArticleCreatePage.module.scss';
interface ArticleCreatePageProps {
  className?: string;
}
const ArticleCreatePage = ({ className }: ArticleCreatePageProps) => {
  return (
    <div className={classNames(classes.ArticleCreatePage, {}, [className])}>ArticleCreatePage</div>
  );
};

export default ArticleCreatePage;
