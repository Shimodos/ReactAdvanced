import classes from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/module/types/sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(classes.item, { [classes.collapsed]: collapsed })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>{t(item.text)}</span>
    </AppLink>
  );
};
