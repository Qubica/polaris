import type {FileInfo, API, Options} from 'jscodeshift';

import reactUpdateComponentProp from '../react-update-component-prop/transform';
import {
  replacementMap1,
  replacementMap2,
} from '../v12-styles-replace-custom-property-color/transform';
import type {ComponentFromPropsMap} from '../react-update-component-prop/utils';
import {getReplacementMaps} from '../react-update-component-prop/utils';

const normalizedReplacementMap1 = Object.fromEntries(
  Object.entries(replacementMap1).map(([fromValue, toValue]) => [
    fromValue.replace('--p-color-', ''),
    toValue.replace('--p-color-', ''),
  ]),
);

const normalizedReplacementMap2 = Object.fromEntries(
  Object.entries(replacementMap2).map(([fromValue, toValue]) => [
    fromValue.replace('--p-color-', ''),
    toValue.replace('--p-color-', ''),
  ]),
);

const componentFromPropsMap: ComponentFromPropsMap = {
  Banner: ['textColor'],
  Box: ['background', 'borderColor', 'color', 'outlineColor'],
  Card: ['background'],
  Divider: ['borderColor'],
};

export interface MigrationOptions extends Options {
  step: number;
}

export default function transformer(
  fileInfo: FileInfo,
  _: API,
  options: MigrationOptions,
) {
  if (options.step === 1) {
    return reactUpdateComponentProp(fileInfo, _, {
      replacementMaps: getReplacementMaps(
        componentFromPropsMap,
        normalizedReplacementMap1,
      ),
    });
  } else if (options.step === 2) {
    return reactUpdateComponentProp(fileInfo, _, {
      replacementMaps: getReplacementMaps(
        componentFromPropsMap,
        normalizedReplacementMap2,
      ),
    });
  }
  throw new Error('Invalid step');
}
