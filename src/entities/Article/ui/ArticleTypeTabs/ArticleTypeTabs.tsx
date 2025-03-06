import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
export const ArticleTypeTabs = (porops: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = porops;
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        constent: t('All')
      },
      {
        value: ArticleType.IT,
        constent: t('IT')
      },
      {
        value: ArticleType.SCIENCE,
        constent: t('SCIENCE')
      },
      {
        value: ArticleType.SPORT,
        constent: t('SPORT')
      }
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
};
