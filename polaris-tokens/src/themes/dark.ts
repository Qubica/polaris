import * as colors from '../colors';

import {createMetaTheme, createMetaThemePartial} from './utils';

export const metaThemeDarkPartial = createMetaThemePartial({
  color: {
    'color-scheme': {value: 'dark'},
    'color-bg': {value: colors.gray[16]},
    'color-bg-surface': {value: colors.gray[15]},
    'color-icon': {value: colors.gray[8]},
    'color-icon-secondary': {value: colors.gray[12]},
    'color-text': {value: colors.gray[8]},
    'color-text-secondary': {value: colors.gray[11]},
    'color-bg-surface-secondary-active': {value: colors.whiteAlpha[9]},
    'color-bg-surface-secondary-hover': {value: colors.whiteAlpha[6]},
    'color-bg-fill-transparent': {value: colors.whiteAlpha[8]},
    'color-bg-fill-brand': {value: colors.gray[1]},
    'color-text-brand-on-bg-fill': {value: colors.gray[15]},
    'color-bg-surface-hover': {value: colors.gray[14]},
    'color-bg-fill-tertiary-hover': {value: 'rgba(37, 37, 37, 1)'},
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
    'color-bg-fill-secondary-hover': {value: colors.whiteAlpha[8]},
    'color-bg-surface-brand-selected': {value: colors.gray[14]},
    'color-border-secondary': {value: colors.gray[14]},
    'color-tooltip-tail-down-border-experimental': {
      value: 'rgba(60, 60, 60, 1)',
    },
    'color-tooltip-tail-up-border-experimental': {
      value: 'rgba(71, 71, 71, 1)',
    },
    'color-border-gradient-experimental': {
      value: `linear-gradient(to bottom, ${colors.whiteAlpha[10]}, ${colors.whiteAlpha[4]})`,
    },
    'color-border-gradient-hover-experimental': {
      value: `linear-gradient(to bottom, ${colors.whiteAlpha[10]}, ${colors.whiteAlpha[4]})`,
    },
    'color-border-gradient-selected-experimental': {
      value: `linear-gradient(to bottom, ${colors.blackAlpha[16]}, ${colors.blackAlpha[11]} 10%, ${colors.whiteAlpha[11]})`,
    },
    'color-border-gradient-active-experimental': {
      value: `linear-gradient(to bottom, ${colors.blackAlpha[16]}, ${colors.blackAlpha[11]} 10%, ${colors.whiteAlpha[11]})`,
    },
    'color-button-gradient-bg-fill-selected-experimental': {
      value: `linear-gradient(to bottom, rgba(25, 25, 25, 1), rgba(19, 19, 19, 1) 50%, rgba(10, 10, 10, 1))`,
    },
    'color-button-gradient-bg-fill-active-experimental': {
      value: `linear-gradient(to bottom, rgba(33, 33, 33, 1), rgba(30, 30, 30, 1) 50%, rgba(18, 18, 18, 1))`,
    },
    'color-border-focus': {value: colors.blue[12]},
    'color-text-critical': {value: colors.red[10]},
    'color-bg-surface-magic': {value: colors.purple[16]},
    'color-bg-surface-magic-hover': {value: colors.purple[15]},
    'color-input-bg-surface': {value: colors.gray[16]},
    'color-input-bg-surface-hover': {value: colors.gray[15]},
    'color-input-bg-surface-active': {value: colors.gray[15]},
    'color-input-border': {value: colors.gray[14]},
    'color-input-border-active': {value: colors.gray[12]},
    'color-border-magic-secondary': {value: colors.purple[12]},
    'color-border-magic-secondary-hover': {value: colors.purple[11]},
    'color-text-magic': {value: colors.purple[9]},
    'color-icon-magic': {value: colors.purple[10]},
    'color-icon-emphasis': {value: colors.blue[12]},
    'color-bg-surface-tertiary': {value: colors.gray[15]},
    'color-icon-secondary-active': {value: colors.gray[1]},
    'color-icon-secondary-hover': {value: colors.gray[1]},
    'color-bg-fill-disabled': {value: colors.gray[16]},
    'color-text-disabled': {value: colors.gray[13]},
    'color-text-brand-on-bg-fill-disabled': {value: colors.gray[13]},
    'color-icon-disabled': {value: colors.gray[13]},
    'color-bg-fill-transparent-secondary': {value: colors.whiteAlpha[13]},
    'color-bg-fill-transparent-secondary-active': {
      value: colors.whiteAlpha[9],
    },
    'color-backdrop-bg': {value: colors.blackAlpha[16]},
    'color-bg-fill': {value: colors.gray[16]},
    'color-bg-fill-hover': {value: colors.gray[14]},
  },
  shadow: {
    'shadow-bevel-100': {
      value:
        '1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, -1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px -1px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.16) inset',
    },
    'shadow-button': {
      value: '0px',
    },
    'shadow-button-primary-inset': {
      value: '0px -1px 0px 1px rgba(26, 26, 26, 1) inset, 0px 0px 0px 1px rgba(26, 26, 26, 1) inset, 0px 0.5px 0px 1.5px rgba(0, 0, 0, 0.25) inset',
    },
    }
  },
});

export const metaThemeDark = createMetaTheme(metaThemeDarkPartial);
