import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import MaineIcone from 'shared/assets/icons/maine.svg';
import AboutIcone from 'shared/assets/icons/about.svg';
import ProfileIcone from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
    Icon: ProfileIcone
  }
];
