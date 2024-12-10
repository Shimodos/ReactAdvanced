import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleSortSelector.module.scss';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/models/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
  className?: string;
  sort?: ArticleSortField;
  order?: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, order, sort, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(
    () => [
      {
        value: 'asc',
        constent: t('Asc')
      },
      {
        value: 'desc',
        constent: t('Desc')
      }
    ],
    [t]
  );

  const orderFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED_AT,
        constent: t('DateOfCreation')
      },
      {
        value: ArticleSortField.TITLE,
        constent: t('Title')
      },
      {
        value: ArticleSortField.VIEWS,
        constent: t('Views')
      }
    ],
    [t]
  );

  return (
    <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
      <Select
        options={orderFieldOptions}
        label={t('SortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select options={orderOptions} label={t('By')} value={order} onChange={onChangeOrder} />
    </div>
  );
};
