import { DropDowDirection } from '../../../types/ui';
import classes from './Popup.module.scss';

export const mapDirectionClass: Record<DropDowDirection, string> = {
  'down left': classes.optionDownLeft,
  'up left': classes.optionUpLeft,
  'down right': classes.optionDownRight,
  'up right': classes.optionUpRight
};
