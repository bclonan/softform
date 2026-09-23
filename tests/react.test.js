import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { SfButton } from '../src/react/SfButton.js';
import { SfInput } from '../src/react/SfInput.js';

describe('React adapters', () => {
  it('server renders a custom element without browser globals', () => {
    expect(renderToString(createElement(SfButton, { variant: 'accent' }, 'Save')))
      .toBe('<sf-button>Save</sf-button>');
    expect(renderToString(createElement(SfInput, { label: 'Name', modelValue: 'Ada' })))
      .toBe('<sf-input></sf-input>');
  });
});
