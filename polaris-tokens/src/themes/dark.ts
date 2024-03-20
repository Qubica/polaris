import * as colors from '../colors';

import {createMetaTheme, createMetaThemePartial} from './utils';

export const metaThemeDarkPartial = createMetaThemePartial({
  color: {
    // todo
    'color-bg': {value: colors.gray[16]},
    // from figma
    'color-bg-surface': {value: colors.gray[15]},
    'color-bg-fill': {value: colors.gray[15]},
    'color-icon': {value: colors.gray[8]},
    'color-icon-secondary': {value: colors.gray[12]},
    'color-text': {value: colors.gray[8]},
    'color-text-secondary': {value: colors.gray[11]},
    'color-bg-fill-transparent': {value: colors.whiteAlpha[8]},
    'color-bg-fill-brand': {value: colors.gray[1]},
    'color-text-brand-on-bg-fill': {value: colors.gray[15]},
    'color-bg-surface-hover': {value: colors.gray[14]},
    'color-bg-fill-hover': {value: colors.gray[14]},
    'color-bg-fill-transparent-hover': {value: colors.whiteAlpha[9]},
    'color-bg-fill-brand-hover': {value: colors.gray[5]},
    'color-bg-surface-selected': {value: colors.gray[13]},
    'color-bg-fill-selected': {value: colors.gray[13]},
    'color-bg-fill-transparent-selected': {value: colors.whiteAlpha[11]},
    'color-bg-fill-brand-selected': {value: colors.gray[9]},
    'color-bg-surface-active': {value: colors.gray[13]},
    'color-bg-fill-active': {value: colors.gray[13]},
    'color-bg-fill-transparent-active': {value: colors.whiteAlpha[10]},
    'color-bg-fill-brand-active': {value: colors.gray[4]},
    'color-bg-surface-secondary-active': {value: colors.gray[13]},
    'color-bg-surface-secondary-hover': {value: colors.gray[14]},
    'color-border-secondary': {value: colors.gray[13]},
    'color-border-gradient': {
      value: `linear-gradient(to bottom, ${colors.whiteAlpha[9]}, ${colors.whiteAlpha[4]})`,
    },
    'color-border-gradient-hover': {
      value: `linear-gradient(to bottom, ${colors.whiteAlpha[9]}, ${colors.whiteAlpha[4]})`,
    },
    'color-border-gradient-selected': {
      value: `linear-gradient(to bottom, ${colors.blackAlpha[10]}, ${colors.whiteAlpha[10]})`,
    },
    'color-border-gradient-active': {
      value: `linear-gradient(to bottom, ${colors.whiteAlpha[10]}, ${colors.whiteAlpha[4]})`,
    },
  },
});

export const metaThemeDark = createMetaTheme(metaThemeDarkPartial);
