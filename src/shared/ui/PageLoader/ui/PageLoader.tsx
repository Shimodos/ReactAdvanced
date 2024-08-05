import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';
interface PageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => {
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
