import { expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

const stories = import.meta.glob('../stories/*.stories.js', { eager: true });

it('renders every documented component story on the server', async () => {
  expect(Object.keys(stories)).toHaveLength(53);
  for (const [path, story] of Object.entries(stories)) {
    const component = story.default.component;
    const html = await renderToString(createSSRApp({
      render: () => h(component, story.Default.args, () => 'Example'),
    }));
    expect(html.length, path).toBeGreaterThan(0);
  }
});
