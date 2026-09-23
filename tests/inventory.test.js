import { describe, expect, it } from 'vitest';
import dictionary from '../src/component-dictionary.json';

const components = import.meta.glob('../src/components/Sf*.vue');
const stories = import.meta.glob('../stories/Sf*.stories.js');
const docs = import.meta.glob('../docs/components/Sf*.md', { query: '?raw', import: 'default' });
const elements = import.meta.glob('../src/elements/Sf*.js');
const react = import.meta.glob('../src/react/Sf*.js');

describe('component inventory', () => {
  it('has a decision guide, demo, story, reference, and custom element for every component', () => {
    const names = Object.keys(components).map(path => path.split('/').pop().replace('.vue', '')).sort();
    expect(names).toHaveLength(53);
    expect(Object.keys(dictionary).sort()).toEqual(names);
    for (const name of names) {
      const entry = dictionary[name];
      expect(stories[`../stories/${name}.stories.js`], name).toBeDefined();
      expect(docs[`../docs/components/${name}.md`], name).toBeDefined();
      expect(elements[`../src/elements/${name}.js`], name).toBeDefined();
      expect(react[`../src/react/${name}.js`], name).toBeDefined();
      expect(entry.whenToUse.length, name).toBeGreaterThan(20);
      expect(entry.avoidWhen.length, name).toBeGreaterThan(20);
      expect(entry.motion.length, name).toBeGreaterThan(20);
      expect(entry.demo.props, name).toBeTypeOf('object');
      expect(entry.tag, name).toMatch(/^sf-[a-z]+(?:-[a-z]+)*$/);
    }
  });
});
