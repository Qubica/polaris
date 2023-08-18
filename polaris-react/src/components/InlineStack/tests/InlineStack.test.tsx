import React from 'react';
import {mountWithApp} from 'tests/utilities';

import {InlineStack} from '../InlineStack';

describe('<InlineStack />', () => {
  const childText = 'Child';
  const renderChildren = () =>
    [0, 1].map((i) => (
      <div key={i}>
        {childText} {i}
      </div>
    ));

  it('renders its children', () => {
    const inlineStack = mountWithApp(
      <InlineStack>{renderChildren()}</InlineStack>,
    );

    expect(inlineStack).toContainReactText(childText);
  });

  it('renders custom properties by default', () => {
    const inlineStack = mountWithApp(
      <InlineStack>{renderChildren()}</InlineStack>,
    );

    expect(inlineStack).toContainReactComponent('div', {
      style: expect.objectContaining({
        '--pc-inline-stack-wrap': 'wrap',
      }) as React.CSSProperties,
    });
  });

  it('overrides custom properties if they are passed in', () => {
    const inlineStack = mountWithApp(
      <InlineStack align="center" blockAlign="start" gap="10">
        {renderChildren()}
      </InlineStack>,
    );

    expect(inlineStack).toContainReactComponent('div', {
      style: expect.objectContaining({
        '--pc-inline-stack-align': 'center',
        '--pc-inline-stack-block-align': 'start',
        '--pc-inline-stack-wrap': 'wrap',
        '--pc-inline-stack-gap-xs': 'var(--p-space-10)',
      }) as React.CSSProperties,
    });
  });

  it('accepts gap based on breakpoints', () => {
    const inlineStack = mountWithApp(
      <InlineStack gap={{xs: '2', md: '8'}}>{renderChildren()}</InlineStack>,
    );

    expect(inlineStack).toContainReactComponent('div', {
      style: expect.objectContaining({
        '--pc-inline-stack-wrap': 'wrap',
        '--pc-inline-stack-gap-xs': 'var(--p-space-2)',
        '--pc-inline-stack-gap-md': 'var(--p-space-8)',
      }) as React.CSSProperties,
    });
  });
});
