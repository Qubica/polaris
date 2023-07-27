import React, {useCallback, useEffect, useRef, useState} from 'react';

import {classNames} from '../../../../utilities/css';
import type {HSBColor} from '../../../../utilities/color-types';
import {hsbToHex, hexToHsb} from '../../../../utilities/color-transformers';
import {
  isHexString,
  coerceToValidUserInput,
} from '../../../../utilities/color-validation';
import {useI18n} from '../../../../utilities/i18n';
import {TextField} from '../../../TextField';
import styles from '../../ColorPicker.scss';

export interface TextPickerProps {
  color: HSBColor;
  allowAlpha?: boolean;
  onChange(hex: string): void;
}

export function TextPicker({color, allowAlpha, onChange}: TextPickerProps) {
  const i18n = useI18n();

  const [text, setText] = useState('');
  const lastValidValue = useRef('');

  const handleTextChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleBlur = useCallback(() => {
    const validUserInput = coerceToValidUserInput(text);
    if (validUserInput) {
      setText(validUserInput);
      lastValidValue.current = validUserInput;

      const colorHasChanged = validUserInput !== hsbToHex(color);

      if (colorHasChanged) {
        onChange(validUserInput);
      }

      return;
    }

    setText(lastValidValue.current);
  }, [color, lastValidValue, onChange, text]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      const {key} = event;

      if (key === 'Enter') {
        event.preventDefault();
        handleBlur();
      }
    },
    [handleBlur],
  );

  useEffect(() => {
    const newValue = hsbToHex(color);
    if (newValue !== hsbToHex(hexToHsb(lastValidValue.current))) {
      setText(newValue);
      lastValidValue.current = newValue;
    }
    if (lastValidValue.current === '') lastValidValue.current = newValue;
  }, [color]);

  const className = classNames(
    styles.TextPicker,
    allowAlpha && styles.AlphaAllowed,
  );
  const label = i18n.translate(
    'Polaris.ColorPicker.textPickerAccessibilityLabel',
  );
  const valueForDisplay = isHexString(text) ? text.toUpperCase() : text;

  return (
    <div id="TextPickerWrapper" onKeyDown={handleKeyDown} className={className}>
      <TextField
        value={valueForDisplay}
        label={label}
        labelHidden
        autoComplete="off"
        onChange={handleTextChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
