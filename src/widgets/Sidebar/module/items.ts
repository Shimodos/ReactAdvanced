import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import MaineIcone from 'shared/assets/icons/maine.svg';
import AboutIcone from 'shared/assets/icons/about.svg';
import ProfileIcone from 'shared/assets/icons/profile.svg';
import ArticleIcone from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: MaineIcone
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: AboutIcone
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfileIcone,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    Icon: ArticleIcone,
    authOnly: true
  }
  // {
  //   path: RoutePath.article_details,
  //   text: 'Article Details',
  //   Icon: ProfileIcone,
  //   authOnly: true
  // }
];
