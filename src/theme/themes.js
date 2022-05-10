import {
  white,
  black,
  primary,
  grey,
  danger,
  success,
  orange,
  blue,
} from "./colors";
import { primaryFont } from "./theme-utils";

export const defaultTheme = {
  primaryColor: primary[100],
  primaryHoverColor: primary[100],
  primaryActiveColor: black[100],
  textColorOnPrimary: white[100],
  iconPrimary: primary[100],
  iconSecondary: orange[100],
  iconTetiary: blue[100],
  textColor: white[100],
  textColorInverted: black[100],
  disabled: grey[100],
  textOnDisabled: grey[100],
  primaryFont,
  status: {
    warningColor: danger[100],
    warningColorHover: danger[100],
    warningColorActive: danger[100],
    errorColor: danger[100],
    errorColorHover: danger[100],
    errorColorActive: danger[100],
    successColor: success[100],
    successColorHover: success[100],
    successColorActive: success[100],
  },
};
